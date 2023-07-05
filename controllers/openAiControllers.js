const { createReadStream, existsSync } = require('fs');
const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
const axios = require('axios');
const sharp = require('sharp');
const fs = require('fs');
const imgbbUploader = require("imgbb-uploader");

const editInstructions = async (req, res) => {
  try {
    const { input, instruction } = req.body;
    const response = await openai.createEdit({
      model: "text-davinci-edit-001",
      input: input,
      instruction: instruction,
    });
    console.log(response);
    return res.status(200).json({
      success: true,
      message: response.data.choices[0].text,
    })
  } catch (err) {
    return res.status(404).json({
      success: false,
      error: err.message,
    })
  }
};

const generateText = async (req, res) => {
  const { prompt } = req.body;
  try {
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt,
      max_tokens: 256,
      temperature: 0,
    });
    const createdText = response.data.choices[0].text;
    return res.status(200).json({
      success: true,
      data: createdText,
    })
  } catch (err) {
    return res.status(404).json({
      success: false,
      error: err.message,
    });
  }
};

const generateImage = async (req, res) => {
  const { prompt, size } = req.body;
  let imageSize = size === 'small' ? '256x256' : size === 'medium' ? '512x512' : '1024x1024';
  try {
    const response = await openai.createImage({
      prompt,
      n: 1,
      size: imageSize,
    });
    const imageUrl = response.data.data[0].url;
    return res.status(200).json({
      success: true,
      imageUrl,
    });
  } catch (err) {
    return res.status(404).json({
      success: false,
      error: err.message,
    })
  }
};

// create text and image with one prompt
const generateTextAndImage = async (req, res) => {
  const { prompt, size } = req.body;
  let imageSize = size === 'small' ? '256x256' : size === 'medium' ? '512x512' : '1024x1024';
  try {
    // text response
    const textResponse = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `${prompt}.\nAssume that you are the realtor or agent of the real estate property business.Now give me an actual output of real estate property valuation based on the above data.\nGive me full details./nSet emojis for each topic`,
      max_tokens: 500,
      temperature: 0,
    });
    const createdText = textResponse.data.choices[0].text;
    // valuation response
    const valuationCostResponse = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `${prompt}.\nCreate a property valuation cost only money in Number/nMust be in number format. with a relevant emoji`,
      max_tokens: 250,
      temperature: 0,
    });
    const valuationCost = valuationCostResponse.data.choices[0].text;
    // image response
    const imageResponse = await openai.createImage({
      prompt,
      n: 1,
      size: imageSize,
    });
    const imageUrl = imageResponse.data.data[0].url;

    // png image to jpeg
    const pngImageUrl = imageUrl;
    const outputFilePath = 'estate.jpg';
    axios({
      url: pngImageUrl,
      responseType: 'arraybuffer'
    })
      .then(response => {
        // Convert the PNG image buffer to a JPEG image buffer
        return sharp(response.data)
          .jpeg()
          .toBuffer();
      })
      .then(jpegBuffer => {
        // Save the JPEG image buffer to a file
        fs.writeFileSync(outputFilePath, jpegBuffer);
        console.log('PNG image converted to JPEG and saved successfully!');
      })
      .catch(error => {
        console.error('An error occurred:', error);
      });
    // save image to imgbb
    const response = await imgbbUploader(process.env.imageAPIKey, outputFilePath);
    // return the response
    return res.status(200).json({
      success: true,
      valuationCost,
      createdText,
      imageUrl: response.display_url,
    });
  } catch (err) {
    return res.status(404).json({
      success: false,
      error: err.message,
    });
  }
};

module.exports = {
  editInstructions,
  generateText,
  generateImage,
  generateTextAndImage,
};
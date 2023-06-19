const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const editInstructions = async (req, res) => {
  try {
    const { input, instruction } = req.body;
    const response = await openai.createEdit({
      model: "text-davinci-edit-001",
      input: input,
      instruction: instruction,
    });
    console.log(response);
    res.status(200).json({
      success: true,
      message: response.data.choices[0].text,
    })
  } catch (err) {
    res.status(404).json({
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
    res.status(200).json({
      success: true,
      data: createdText,
    })
  } catch (err) {
    res.status(404).json({
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
    res.status(200).json({
      success: true,
      imageUrl,
    });
  } catch (err) {
    res.status(404).json({
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
      prompt: `${prompt}. create a real estate property valuation and set correct emojis regarding the output`,
      max_tokens: 500,
      temperature: 0,
    });
    const createdText = textResponse.data.choices[0].text;
    // image response
    const imageResponse = await openai.createImage({
      prompt,
      n: 1,
      size: imageSize,
    });
    const imageUrl = imageResponse.data.data[0].url;
    res.status(200).json({
      success: true,
      createdText,
      imageUrl,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      error: err.message,
    });
  }
};

module.exports = { editInstructions, generateText, generateImage, generateTextAndImage };

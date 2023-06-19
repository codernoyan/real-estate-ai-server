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
      max_tokens: 200,
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
    })
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
}

module.exports = { editInstructions, generateText, generateImage };

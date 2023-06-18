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



module.exports = { editInstructions };

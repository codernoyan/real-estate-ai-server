const express = require('express');
const { editInstructions, generateText, generateImage, generateTextAndImage } = require('../controllers/openAiControllers');
const router = express.Router();

// for openai test
router.post('/instruction', editInstructions);

// for openai test
router.post('/generateText', generateText);

// for openai test
router.post('/generateImage', generateImage);

// for image and text generation
router.post('/generateTextAndImage', generateTextAndImage);

module.exports = router;
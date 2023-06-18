const express = require('express');
const { editInstructions, generateText, generateImage, generateTextAndImage } = require('../controllers/openAiControllers');
const router = express.Router();

router.post('/instruction', editInstructions);

router.post('/generateText', generateText);

router.post('/generateImage', generateImage);

router.post('/generateTextAndImage', generateTextAndImage);

module.exports = router;
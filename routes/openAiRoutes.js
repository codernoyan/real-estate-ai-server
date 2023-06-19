const express = require('express');
const { editInstructions, generateText, generateImage } = require('../controllers/openAiControllers');
const router = express.Router();

router.post('/instruction', editInstructions);

router.post('/generateText', generateText);

module.exports = router;
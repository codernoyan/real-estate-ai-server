const express = require('express');
const { editInstructions, generateText, generateImage } = require('../controllers/openAiControllers');
const router = express.Router();

router.post('/instruction', editInstructions);

module.exports = router;
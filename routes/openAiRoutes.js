const express = require('express');
const { generateText, generateImage, generateTextAndImage, generateSocialMediaPoster } = require('../controllers/openAiControllers');
const router = express.Router();

// for openai test
router.post('/generateText', generateText);

// for openai test
router.post('/generateImage', generateImage);

// for image and text generation
router.post('/generateTextAndImage', generateTextAndImage);

// for generate social media poster
router.post('/generateSocialMediaPoster', generateSocialMediaPoster);

module.exports = router;
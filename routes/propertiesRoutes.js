const express = require('express');
const { propertiesCollection } = require('../collections/collections');
const router = express.Router();

router.get('/getProperties', async (req, res) => {
  try {
    const query = {};
    const cursor = propertiesCollection.find(query);
    const result = await cursor.toArray();
    // send response
    res.status(200).status({
      success: true,
      data: result,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      error: err.message,
    })
  }
});

module.exports = router;
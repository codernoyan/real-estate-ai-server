const express = require('express');
const { propertiesCollection } = require('../collections/collections');
const { ObjectId } = require('mongodb');
const router = express.Router();

// get all properties
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

// post a property
router.post('/addProperty', async (req, res) => {
  try {
    const propertyData = req.body;
    const result = await propertiesCollection.insertOne(propertyData);
    // send response
    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      error: err.message,
    });
  }
});

// get a property
router.get('/getProperty/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const query = { _id: new ObjectId(id) };
    const result = await propertiesCollection.findOne(query);
    // send response
    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      error: err.message,
    })
  }
})
module.exports = router;
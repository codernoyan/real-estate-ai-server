const { client } = require("../mongodb/mongodb.config");

const propertiesCollection = client.db('realEstateAI').collection('properties');

module.exports = {
  propertiesCollection
};
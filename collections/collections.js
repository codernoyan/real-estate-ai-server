const { client } = require("../mongodb/mongodb.config");

const listCollections = client.db('realEstateAI').collection('lists');

module.exports = {
  listCollections
};
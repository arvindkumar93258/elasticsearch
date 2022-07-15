// backend/create-index.js to create the index in the elasticsearch
const elasticClient = require("./elastic-client");

const createIndex = async (indexName) => {
  await elasticClient.indices.create({ index: indexName });
  console.log("Index created");
};

createIndex("posts");
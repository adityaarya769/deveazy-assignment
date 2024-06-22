const { Storage } = require('@google-cloud/storage');
const path = require('path');

const storage = new Storage({
  keyFilename: path.join(__dirname, '../google-cloud-key.json'),
  projectId: "scrapi-development",
});

const bucket = storage.bucket("deveazy-assignment");

module.exports = bucket;

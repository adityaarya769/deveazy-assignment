const { Storage } = require('@google-cloud/storage');
const path = require('path');
const dotenv = require('dotenv');
dotenv.config();

const storage = new Storage({
  keyFilename: path.join(__dirname, '../../google-cloud-key.json'),
  projectId: process.env.GCLOUD_PROJECT_ID,
});

const bucket = storage.bucket(process.env.GCLOUD_BUCKET_NAME);

module.exports = bucket;

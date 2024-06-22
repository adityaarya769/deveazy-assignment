const express = require('express');
const multer = require('multer');
const bucket = require('../utils/googleCloud');
const router = express.Router();
const upload = multer({ dest: 'uploads/' });

router.post('/upload', upload.single('file'), async (req, res) => {
  try {
    const blob = bucket.file(req.file.originalname);
    const blobStream = blob.createWriteStream();

    blobStream.on('finish', () => {
      res.status(200).send({ message: 'File uploaded successfully' });
    });

    blobStream.end(req.file.buffer);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;

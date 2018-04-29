var Multer = require('multer');
var aSync = require('async');
var culture_controller = require('./controllers/culture_controller');
var Promise = require('promise');

const Storage = require('@google-cloud/storage');
const config = require('./config/config');

const CLOUD_BUCKET = "bawurra_media";

const storage = Storage({
  keyFilename: './keyfile.json',
  projectId: "bawurralibrary"
});
const bucket = storage.bucket(CLOUD_BUCKET);

exports.multer =
  Multer({
  storage: Multer.MemoryStorage,
});


exports.sendUploadToGCS = function (req, res, next) {
var key = [];
console.log('here');
  if (!req.files) {
    res.redirect('/error');
  }
  else{
    for (var fileKey in req.files){
      key.push(new Promise(function (resolve, reject){
        upload(req.files[fileKey][0], function(){
          resolve();
        })
    }));
    };
Promise.all(key)
  .then(function () {
    next();
  })
}
}

upload = function(rawFile, callback){

  const gcsname = Date.now() + rawFile.originalname;
  const file = bucket.file(gcsname);

  const stream = file.createWriteStream({
    metadata: {
      contentType: rawFile.mimetype
    }
  });

  stream.on('error', (err) => {
    rawFile.cloudStorageError = err;
    callback(false)
  });

  stream.on('finish', () => {
    rawFile.cloudStorageObject = gcsname;
    file.makePublic().then(() => {
      rawFile.cloudStoragePublicUrl = getPublicUrl(gcsname);
      callback(true);
    });
  });

  stream.end(rawFile.buffer);
}

getPublicUrl = function (filename) {
  return `https://storage.googleapis.com/${CLOUD_BUCKET}/${filename}`;
}

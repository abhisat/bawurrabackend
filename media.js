var Multer = require('multer');
var aSync = require('async');

const Storage = require('@google-cloud/storage');
const config = require('./config/config');

const CLOUD_BUCKET = "bawurra_media";

const storage = Storage({
  keyFilename: './keyfile.json',
  projectId: "bawurralibrary"
});
const bucket = storage.bucket(CLOUD_BUCKET);

exports.multer = Multer({
  storage: Multer.MemoryStorage,
});

exports.sendUploadToGCS = function (req, res, next) {

  if (!req.files) {
    return next();
  }
  else{
    for (var fileKey in req.files){

    const gcsname = Date.now() + req.files[fileKey][0].originalname;
    const file = bucket.file(gcsname);

    const stream = file.createWriteStream({
      metadata: {
        contentType: req.files[fileKey][0].mimetype
      }
    });

    stream.on('error', (err) => {
      req.files[fileKey][0].cloudStorageError = err;
    });

    stream.on('finish', () => {
      req.files[fileKey][0].fieldname = gcsname;
      req.files[fileKey][0].cloudStorageObject = gcsname;
      file.makePublic().then(() => {
        req.files[fileKey][0].cloudStoragePublicUrl = getPublicUrl(gcsname);
      });
    });

    stream.end(req.files[fileKey][0].buffer);
  }
};
}


// req.files.foreach((file) => {
//   console.log(file);
// }
//);
//   console.log(file);
//   const gcsname = Date.now() + req.file.originalname;
//   const file = bucket.file(gcsname);
//
//   const stream = file.createWriteStream({
//     metadata: {
//       contentType: req.file.mimetype
//     }
//   });
//
//   stream.on('error', (err) => {
//     req.file.cloudStorageError = err;
//     console.log(err);
//     next(err);
//   });
//
//   stream.on('finish', () => {
//     console.log(req.file);
//     req.file.cloudStorageObject = gcsname;
//     file.makePublic().then(() => {
//       req.file.cloudStoragePublicUrl = getPublicUrl(gcsname);
//       next();
//     });
//   });
//   stream.end(req.file.buffer);
// }

getPublicUrl = function (filename) {
  return `https://storage.googleapis.com/${CLOUD_BUCKET}/${filename}`;
}

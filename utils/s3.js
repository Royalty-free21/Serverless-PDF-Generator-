const AWS = require('aws-sdk');
const s3 = new AWS.S3();

exports.uploadToS3 = async (bucket, key, buffer) => {
  await s3.putObject({
    Bucket: bucket,
    Key: key,
    Body: buffer,
    ContentType: 'application/pdf',
    ACL: 'public-read'
  }).promise();

  return `https://${bucket}.s3.amazonaws.com/${key}`;
};

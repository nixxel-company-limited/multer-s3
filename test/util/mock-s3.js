var PutObjectCommand = require('@aws-sdk/client-s3').PutObjectCommand
var DeleteObjectCommand = require('@aws-sdk/client-s3').DeleteObjectCommand

function createMockS3 () {
  var s3 = {
    sent: [],
    config: {
      endpoint: function () {
        return Promise.resolve({ protocol: 'https:', hostname: 'mock-s3.local' })
      },
      forcePathStyle: false
    },
    send: function (command) {
      s3.sent.push(command)
      if (command instanceof PutObjectCommand) {
        return Promise.resolve({ ETag: 'mock-etag' })
      }
      if (command instanceof DeleteObjectCommand) {
        return Promise.resolve({})
      }
      return Promise.resolve({})
    }
  }
  return s3
}

module.exports = createMockS3

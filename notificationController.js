require('dotenv').config();
const AWS = require('aws-sdk');

AWS.config.update({
  region: process.env.AWS_REGION,
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});

const sns = new AWS.SNS();

exports.sendNotification = async (phoneNumber, message) => {
  const params = {
    Message: message,
    PhoneNumber: phoneNumber,
  };

  try {
    const response = await sns.publish(params).promise();
    console.log(`Notification sent to ${phoneNumber}: MessageId ${response.MessageId}`);
    return response;
  } catch (error) {
    console.error(`Failed to send notification:`, error);
    throw error;
  }
};

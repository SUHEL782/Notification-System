const AWS = require('aws-sdk');
AWS.config.update({ region: 'us-east-1' });

const sns = new AWS.SNS();
exports.sendSMS = async (phoneNumber, message) => {
  try {
    const params = {
      Message: message, 
      PhoneNumber: phoneNumber, 
    };
    const response = await sns.publish(params).promise();
    console.log('SMS sent:', response);
    return response;
  } catch (error) {
    console.error('Error sending SMS:', error.message);
    throw error;
  }
};

const axios = require('axios');

const FACEBOOK_PAGE_ACCESS_TOKEN = process.env.FACEBOOK_PAGE_ACCESS_TOKEN;
const FACEBOOK_PAGE_ID = process.env.FACEBOOK_PAGE_ID;
exports.sendFacebookMessage = async (recipientId, message) => {
  try {
    const url = `https://graph.facebook.com/v15.0/me/messages`;
    const payload = {
      recipient: { id: recipientId },
      message: { text: message },
      access_token: FACEBOOK_PAGE_ACCESS_TOKEN,
    };

    const response = await axios.post(url, payload);
    console.log('Facebook message sent:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error sending Facebook message:', error.response ? error.response.data : error.message);
    throw error;
  }
};

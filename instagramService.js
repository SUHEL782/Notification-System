const axios = require('axios');

const INSTAGRAM_ACCESS_TOKEN = process.env.INSTAGRAM_ACCESS_TOKEN;
const INSTAGRAM_BUSINESS_ACCOUNT_ID = process.env.INSTAGRAM_BUSINESS_ACCOUNT_ID;exports.sendInstagramMessage = async (userId, message) => {
  try {
    const url = `https://graph.facebook.com/v15.0/${INSTAGRAM_BUSINESS_ACCOUNT_ID}/messages`;
    const payload = {
      recipient: { id: userId },
      message: { text: message },
      messaging_type: 'MESSAGE_TAG',
      tag: 'CONFIRMED_EVENT_UPDATE', 
      access_token: INSTAGRAM_ACCESS_TOKEN,
    };

    const response = await axios.post(url, payload);
    console.log('Instagram message sent:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error sending Instagram message:', error.response ? error.response.data : error.message);
    throw error;
  }
};
exports.getInstagramUserId = async (username) => {
  try {
    const url = `https://graph.facebook.com/v15.0/${INSTAGRAM_BUSINESS_ACCOUNT_ID}/?fields=instagram_business_account{followers_count,username,media_count}&access_token=${INSTAGRAM_ACCESS_TOKEN}`;
    const params = { username };

    const response = await axios.get(url, { params });
    const instagramUserId = response.data.instagram_business_account.id;
    console.log('Instagram User ID:', instagramUserId);
    return instagramUserId;
  } catch (error) {
    console.error('Error fetching Instagram user ID:', error.response ? error.response.data : error.message);
    throw error;
  }
};

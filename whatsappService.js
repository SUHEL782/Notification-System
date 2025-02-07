const axios = require('axios');

const WHATSAPP_API_URL = process.env.WHATSAPP_API_URL;
const WHATSAPP_ACCESS_TOKEN = process.env.WHATSAPP_ACCESS_TOKEN;
exports.sendWhatsAppMessage = async (to, message) => {
  try {
    const url = `${WHATSAPP_API_URL}/messages`;
    const payload = {
      messaging_product: 'whatsapp',
      to,
      text: { body: message },
    };

    const headers = {
      'Authorization': `Bearer ${WHATSAPP_ACCESS_TOKEN}`,
      'Content-Type': 'application/json',
    };

    const response = await axios.post(url, payload, { headers });
    console.log('WhatsApp message sent:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error sending WhatsApp message:', error.response ? error.response.data : error.message);
    throw error;
  }
};

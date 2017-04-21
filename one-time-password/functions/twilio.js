const twilio = require('twilio');

const accountSid = 'AC6566be03ae2060335c62831271545624';
const authToken = 'c2274c69132638f3dcf0766d33df8517';

module.exports = new twilio.Twilio(accountSid, authToken);
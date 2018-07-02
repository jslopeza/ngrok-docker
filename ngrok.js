const ngrok = require('ngrok');

async function setup() {
  const url = await ngrok.connect({
    addr: '192.168.1.38:3000',
    authtoken: process.env.NGROK_TOKEN,
  });
  console.log(url);
}

setup();

const mineflayer = require('mineflayer');

const bot = mineflayer.createBot({
  host: 'vanilla129.aternos.me',
  port: 17412,
  username: 'AFK_Bot_123',
  version: false
});

bot.once('spawn', () => {
  console.log('✅ Bot connected to Aternos server.');

  setInterval(() => {
    bot.setControlState('jump', true);
    setTimeout(() => bot.setControlState('jump', false), 500);
  }, 15000);
});

bot.on('error', err => console.error('❌ Error:', err));
bot.on('end', () => console.log('❌ Bot disconnected.'));
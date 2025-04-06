const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Bot is alive'));
app.listen(port, () => console.log(`Keep-alive server running on port ${port}`));

const { Client, GatewayIntentBits } = require('discord.js');
require('dotenv').config();

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

client.once('ready', () => {
  console.log(`Bot is online as ${client.user.tag}`);
});

client.login(process.env.TOKEN);

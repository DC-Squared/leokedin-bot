// Get keys from .env file just for dev
import dotenv from 'dotenv'
dotenv.config()

import { Client, Intents } from 'discord.js'
import handleCommand from './commands/index.js'

const TOKEN = process.env.DISCORD_TOKEN

const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
})

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`)
})

client.on('messageCreate', message => {
    if (message.content.startsWith('>')) {
        handleCommand(message)
    }
})

client.login(TOKEN)
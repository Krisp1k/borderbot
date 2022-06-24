const Discord = require("discord.js")
const TOKEN = "yougotjebaited"

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

client.on("ready", function() {
    console.log("BorderBot is ON.")
})

client.login(TOKEN)

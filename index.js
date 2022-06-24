const Discord = require("discord.js")
const TOKEN = "OTg5NjI4NjI4MjcyODI4NDQ3.GMrqyw.sEM7CKEf8jB0MKCuMuJ1Q5fIn4W5nG6pH7zBw0"

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
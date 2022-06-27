import DiscordJS, { Intents } from 'discord.js'
import dotenv from 'dotenv'
dotenv.config({path: "./vars/.env"})

const client = new DiscordJS.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
})

client.on("ready", () => {
    console.log("BorderBot is running")

    // command handler
    let handler = require("./com-handler")
    if (handler.default) handler = handler.default

    handler(client)

    // statuses
    const statuses = ["Anything related to Borderlands","Type '$help' for more info"]
    let i = 0
    const updateStatus = () => {
        client.user?.setPresence({
            status: "online",
            activities: [
                {
                    name: statuses[i]
                }
            ],
        })
        i++

        if (i >= statuses.length) {
            i = 0
        }

        setTimeout(updateStatus, 2500)
    }
    updateStatus()
})

client.on("messageCreate", (message) => {
    if (message.content === "$off" && message.author.id == "653608166927368213") {
        client.destroy()
    }
})

client.login(process.env.TOKEN)
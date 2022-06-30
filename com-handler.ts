import {Client} from 'discord.js'
import fs from 'fs'
import getFiles from './files'

export const prefix = "$"
export const suffix = ".ts"

export default(client:Client) => {
    const commands = {} as {
        [key:string]: any
    }

    const commandFiles = getFiles('./commands',suffix)
    
    console.log(`Commands loaded:`)
    commandFiles.forEach(file => console.log(file))

    for (const comm of commandFiles) {
        let singleCommand = require(comm)
        if (singleCommand.default) singleCommand = singleCommand.default

        // for typing the commands, navigating to files
        const split = comm.replace(/\\/g,"/").split("/")
        const commandName = split[split.length - 1].replace(suffix,"")

        commands[commandName.toLowerCase()] = singleCommand
    }

    client.on("messageCreate", (msg) => {
        if (msg.author.bot || !msg.content.startsWith(prefix)) {
            return
        }

        const args = msg.content.slice(1).split(/ +/)
        const commandName = args.shift()!.toLowerCase()

        if (!commands[commandName]) {
            return
        }

        try {
            commands[commandName].callback(msg, ...args)
        } catch (err) {
            console.error(err)
        }
    })
}

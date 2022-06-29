import { Message } from 'discord.js'
import client  from '../../index'

export default {
    callback: (message: Message, ...args:string[]) => {
        if (message.author.id == "653608166927368213") {
            client.destroy()
        } else {
            message.channel.send("**❗You do not have enough permissions to turn of the bot.❗**")
        }
    } 
}
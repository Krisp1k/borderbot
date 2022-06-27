import { Message } from 'discord.js'

export default {
    callback: (message: Message, ...args:string[]) => {
        message.channel.send({
            content:"Pinging..."
        })
        .then((resultMessage) => {         
            const ping = resultMessage.createdTimestamp - message.createdTimestamp
            resultMessage.edit(`**Pong!** [${ping}ms]`)
            console.log(args, [message.author + " : " + message.content + ` [${ping}ms]`])
        }) 
    }
}
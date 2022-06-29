import { Message, MessageEmbed } from 'discord.js'
import client from '../../index'

export default {
    callback: (message: Message, ...args:string[]) => {
        message.channel.send({
            content:"Pinging..."
        })
        .then((resultMessage) => {         
            const botLatency = resultMessage.createdTimestamp - message.createdTimestamp
            const apiLatency = client.ws.ping

            const pingEmbed = new MessageEmbed()
            .setTitle("**Pong!**")
            .addFields(
                {name:"🤖 Bot latency", value:`[${botLatency}ms]`, inline: true},
                {name:"💻 API latency", value:`[${apiLatency}ms]`, inline: true}
            )

            message.channel.send({ embeds: [pingEmbed] })

            resultMessage.delete()
            console.log([`${message.author.username} (${message.author.id}) : [${botLatency}ms], [${apiLatency}ms]`])
        }) 
    }
}
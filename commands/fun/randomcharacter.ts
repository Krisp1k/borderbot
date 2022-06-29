import { Message, MessageEmbed, MessageAttachment } from 'discord.js'

export default {
    callback: (message: Message, ...args:string[]) => {

        const characters: {[key: string]: string} = {
            "Moze": "./images/characters/moze.jpg", 
            "Amara": "./images/characters/amara.jpg",
            "Zane": "./images/characters/zane.jpg", 
            "Fl4k": "./images/characters/flak.jpg", 
            "Zer0": "./images/characters/zero.jpg", 
            "Maya": "./images/characters/maya.jpg", 
            "Axton": "./images/characters/axton.jpg" ,
            "Salvador": "./images/characters/salvador.jpg",
            "Lilith": "./images/characters/lilith.jpg",
            "Brick": "./images/characters/brick.jpg" ,
            "Roland": "./images/characters/roland.jpg",
            "Mordecai": "./images/characters/morde.jpg",
            "Tiny Tina": "./images/characters/tiny.jpg",
            "Ellie": "./images/characters/ellie.jpg" ,
            "Crazy Earl": "./images/characters/earl.jpg",
            "Sir Hammerlock": "./images/characters/hammer.jpg",
            "Typhon DeLeon": "./images/characters/typhon.jpg",
            "Claptrap": "./images/characters/claptrap.jpg",
            "Ava": "./images/characters/ava.jpg",
            "Tannis": "./images/characters/tannis.jpg",
            "Moxxi" : "./images/characters/moxxi.jpg",
            "Marcus": "./images/characters/marcus.jpg",
            "Psycho":"./images/characters/psycho.jpg",
            "Aurelia": "./images/characters/aurelia.jpg",
            "Calypso Twins": "./images/characters/calypsos.jpg",
            "Handsome Jack": "./images/characters/jack.jpg"
        }

        const randomValue = Math.floor(Math.random() * Object.keys(characters).length)

        const randomChar = Object.keys(characters)[randomValue]
        const charImage = Object.values(characters)[randomValue]
        const imgFileName = charImage.slice(20, charImage.length)

        const embedImage = new MessageAttachment(charImage)
        const charEmbed = new MessageEmbed()

        let year = new Date().getFullYear()

        try { 
            charEmbed.setDescription(`${message.author}, you are **${randomChar}**!`)
            .setTitle("Your random character")
            .setColor("#D2C119")
            .setImage(`attachment://${imgFileName}`) 
            .setFooter({text: `@BorderBot, ${year.toString()}`})
            .setTimestamp()
            
        } catch (e) {
            console.error(e)
            message.channel.send(`Error : ${e}`)
            return
        }

        console.log(imgFileName)
        console.log([`${message.author.username} (${message.author.id}) : ${message.content})`])

        message.channel.send( {embeds: [charEmbed], files: [embedImage] })

    }
}
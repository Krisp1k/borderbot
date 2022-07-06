import { Message, MessageEmbed, MessageAttachment } from 'discord.js'

export default {
    callback: (message: Message, ...args:string[]) => {
        const characters: {[key: string]: string} = {
            "Amara": "./images/characters/amara/",
            "Moze": "./images/characters/moze/", 
            "Zane": "./images/characters/zane/", 
            "Fl4k": "./images/characters/fl4k/", 
            "Zer0": "./images/characters/zer0/", 
            "Maya": "./images/characters/maya/", 
            "Axton": "./images/characters/axton/" ,
            "Salvador": "./images/characters/salvador/",
            "Lilith": "./images/characters/lilith/",
            "Brick": "./images/characters/brick/" ,
            "Roland": "./images/characters/roland/",
            "Mordecai": "./images/characters/mordecai/",
            "Tiny Tina": "./images/characters/tiny_tina/",
            "Ellie": "./images/characters/ellie/" ,
            "Crazy Earl": "./images/characters/earl/",
            "Sir Hammerlock": "./images/characters/sir_hammerlock/",
            "Typhon DeLeon": "./images/characters/typhon_deleon/",
            "Claptrap": "./images/characters/claptrap/",
            "Ava": "./images/characters/ava/",
            "Tannis": "./images/characters/tannis/",
            "Moxxi" : "./images/characters/moxxi/",
            "Marcus": "./images/characters/marcus/",
            "Psycho":"./images/characters/psycho/",
            "Aurelia": "./images/characters/aurelia/",
            "Calypso Twins": "./images/characters/calypso_twins/",
            "Handsome Jack": "./images/characters/handsome_jack/"
        }

        const randomValue = Math.floor(Math.random() * Object.keys(characters).length)

        const randomChar = Object.keys(characters)[randomValue]
        const charImagePath = Object.values(characters)[randomValue]

        const randomImgIndex = Math.floor(Math.random() * 4)
        const imgFileName = `${randomImgIndex}.jpg`

        const embedImage = new MessageAttachment(`${charImagePath}${imgFileName}`)
        const charEmbed = new MessageEmbed()

        const year = new Date().getFullYear()

        charEmbed.setDescription(`${message.author}, you are **${randomChar}**!`)
            .setTitle("Your random character")
            .setColor("#D2C119")
            .setImage(`attachment://${imgFileName}`) 
            .setFooter({text: `@BorderBot, ${year.toString()}`})
            .setTimestamp()

        message.channel.send( {embeds: [charEmbed], files: [embedImage] })

    }
}
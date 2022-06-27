import { Message } from 'discord.js'

export default {
    callback: (message: Message, ...args:string[]) => {

        const characters: {[key: string]: string} = {
            "Moze": "", 
            "Amara": "",
            "Zane": "", 
            "Fl4k": "", 
            "Zer0": "", 
            "Maya": "", 
            "Axton": "" ,
            "Salvador": "",
            "Lilith": "",
            "Brick": "" ,
            "Roland": "",
            "Mordecai": "",
            "TnTina": "",
            "Ellie": "" ,
            "Crazy Earl": "",
            "Sir Hammerlock": "",
            "Tannis": "",
            "Moxxi" : "",
            "Marcus": ""
        }

        let randomChar = Object.keys(characters)[Math.floor(Math.random() * Object.keys(characters).length)]
        let charImage = Object.values(characters)[Math.floor(Math.random() * Object.keys(characters).length)]

        message.reply({
            content:`${message.author}, you are **${randomChar}**!`
        })

        console.log(args, [message.author + " : " + message.content])
    }
}
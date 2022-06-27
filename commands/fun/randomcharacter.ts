import { Message } from 'discord.js'

export default {
    callback: (message: Message, ...args:string[]) => {

        const characters:string[] = [
            "Moze","Amara","Zane","Fl4k",
            "Zer0","Maya","Axton","Salvador",
            "Lilith","Brick","Roland","Mordecai",
            "TnTina","Ellie","Crazy Earl","Sir Hammerlock","Tannis","Moxxi","Marcus"
        ]
        let randomchar = Math.floor(Math.random() * characters.length);

        message.reply({
            content:`${message.author}, you are **${characters[randomchar]}**!`
        })

        console.log(args, [message.author + " : " + message.content])
    }
}
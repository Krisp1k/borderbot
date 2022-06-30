import { Message, MessageEmbed, MessageAttachment } from 'discord.js'
import client  from '../../index'
import { prefix }  from '../../com-handler'

export default {
    callback: (message: Message, ...args:string[]) => {
        const characters:any = {
            "moze": {
                "name":"Moze",
                "games": "Borderlands 3",
                "typeclass": "Playable character, The Gunner",
                "description": "Moze is a ",
                "fact": "Moze has an affinity for fried food, and is apparently very open to trying delicacies so long as they are deep fried",
                "ability":"Iron Bear - a mech that is capable of shooting rockets, grenades and has a minigun or a bear claw",
                "img":"./images/characters/moze.jpg",
                "wiki":"https://borderlands.fandom.com/wiki/Moze"
            }, 
            "amara": {
                "name":"Amara",
                "games":"",
                "typeclass":"",
                "description":"",
                "fact":"",
                "ability":"",
                "img":"./images/characters/amara.jpg",
                "wiki":""
            },
            "zane": {
                "name":"Zane",
                "games":"",
                "typeclass":"",
                "description":"",
                "fact":"",
                "ability":"",
                "img":"./images/characters/zane.jpg",
                "wiki":""
            }, 
            "fl4k": {
                "name":"Fl4k",
                "games":"",
                "typeclass":"",
                "description":"",
                "fact":"",
                "ability":"",
                "img":"./images/characters/flak.jpg",
                "wiki":""
            }, 
            "zer0": {
                "name":"Zer0",
                "games":"",
                "typeclass":"",
                "description":"",
                "fact":"",
                "ability":"",
                "img":"./images/characters/zero.jpg",
                "wiki":""
            }, 
            "maya": {
                "name":"Maya",
                "games":"",
                "typeclass":"",
                "description":"",
                "fact":"",
                "ability":"",
                "img":"./images/characters/maya.jpg",
                "wiki":""
            }, 
            "axton": {
                "name":"Axton",
                "games":"",
                "typeclass":"",
                "description":"",
                "fact":"",
                "ability":"",
                "img":"./images/characters/axton.jpg",
                "wiki":""
            } ,
            "salvador": {
                "name":"Salvador",
                "games":"",
                "typeclass":"",
                "description":"",
                "fact":"",
                "ability":"",
                "img":"./images/characters/salvador.jpg",
                "wiki":""
            },
            "lilith": {
                "name":"Lilith",
                "games":"",
                "typeclass":"",
                "description":"",
                "fact":"",
                "ability":"",
                "img":"./images/characters/lilith.jpg",
                "wiki":""
            },
            "brick": {
                "name":"Brick",
                "games":"",
                "typeclass":"",
                "description":"",
                "fact":"",
                "ability":"",
                "img":"./images/characters/brick.jpg",
                "wiki":""
            } ,
            "roland": {
                "name":"Roland",
                "games":"",
                "typeclass":"",
                "description":"",
                "fact":"",
                "ability":"",
                "img":"./images/characters/roland.jpg",
                "wiki":""
            },
            "mordecai": {
                "name":"Mordecai",
                "games":"",
                "typeclass":"",
                "description":"",
                "fact":"",
                "ability":"",
                "img":"./images/characters/morde.jpg",
                "wiki":""
            },
            "tiny tina": {
                "name":"Tiny Tina",
                "games":"Borderlands, Borderlands: The Pre-Sequel, Borderlands 3, Tiny Tina's Wonderlands",
                "typeclass":"NPC",
                "description":"An unstable girl and also an explosives expert.",
                "fact":"She has an intermittent exotropia (lazy eye) in her left eye. This was originally due to a glitch, but the developers enjoyed it, so they purposefully left it in.",
                "ability":"EXPLODEEE",
                "img":"./images/characters/tiny.jpg",
                "wiki":"https://borderlands.fandom.com/wiki/Tiny_Tina"
            },
            "ellie": {
                "name":"Ellie",
                "games":"",
                "typeclass":"",
                "description":"",
                "fact":"",
                "ability":"",
                "img":"./images/characters/ellie.jpg",
                "wiki":""
            } ,
            "crazy earl": {
                "name":"Crazy Earl",
                "games":"",
                "typeclass":"",
                "description":"",
                "fact":"",
                "ability":"",
                "img":"./images/characters/earl.jpg",
                "wiki":""
            },
            "sir hammerlock": {
                "name":"Sir Hammerlock",
                "games":"",
                "typeclass":"",
                "description":"",
                "fact":"",
                "ability":"",
                "img":"./images/characters/hammer.jpg",
                "wiki":""
            },
            "typhon deLeon": {
                "name":"Typhon DeLeon",
                "games":"",
                "typeclass":"",
                "description":"",
                "fact":"",
                "ability":"",
                "img":"./images/characters/typhon.jpg",
                "wiki":""
            },
            "claptrap": {
                "name":"CL4P-TP",
                "games":"",
                "typeclass":"",
                "description":"",
                "fact":"",
                "ability":"",
                "img":"./images/characters/claptrap.jpg",
                "wiki":""
            },
            "ava": {
                "name":"Ava",
                "games":"",
                "typeclass":"",
                "description":"",
                "fact":"",
                "ability":"",
                "img":"./images/characters/ava.jpg",
                "wiki":""
            },
            "tannis": {
                "name":"Tannis",
                "games":"",
                "typeclass":"",
                "description":"",
                "fact":"",
                "ability":"",
                "img":"./images/characters/tannis.jpg",
                "wiki":""
            },
            "Moxxi" : {
                "name":"Mad Moxxi",
                "games":"",
                "typeclass":"",
                "description":"",
                "fact":"",
                "ability":"",
                "img":"./images/characters/moxxi.jpg",
                "wiki":""
            },
            "marcus": {
                "name":"Marcus",
                "games":"",
                "typeclass":"",
                "description":"",
                "fact":"",
                "ability":"",
                "img":"./images/characters/marcus.jpg",
                "wiki":""
            },
            "psycho":{
                "name":"Psycho",
                "games":"",
                "typeclass":"",
                "description":"",
                "fact":"",
                "ability":"",
                "img":"./images/characters/psycho.jpg",
                "wiki":""
            },
            "aurelia": {
                "name":"Aurelia Hammerlock",
                "games":"",
                "typeclass":"",
                "description":"",
                "fact":"",
                "ability":"",
                "img":"./images/characters/aurelia.jpg",
                "wiki":""
            },
            "calypso twins": {
                "name":"Calypso Twins",
                "games":"",
                "typeclass":"",
                "description":"",
                "fact":"",
                "ability":"",
                "img":"./images/characters/calypsos.jpg",
                "wiki":""
            },
            "handsome jack": {
                "name":"Handsome Jack",
                "games":"",
                "typeclass":"",
                "description":"",
                "fact":"",
                "ability":"",
                "img":"./images/characters/jack.jpg",
                "wiki":""
            }
        }

        let tokens = message.content.split(" ");
        let year = new Date().getFullYear()

        if (tokens[0] == `${prefix}character`) {

            if (tokens.length == 1) {

                const thumbnail = new MessageAttachment("./images/headings/bl3.png")
                const mainEmbed = new MessageEmbed()
                    .setTitle("All the characters you can browse through")
                    .setColor("#D2C119")
                    .setDescription(`Usage: ${prefix}character + <character>`)
                    .addFields({ name: '\u200B', value: '\u200B' },)
                    // bl3
                    .setThumbnail("attachment://bl3.png")
                    .addFields( 
                        {name:"Moze",value:"as The Gunner",inline: true,},
                        {name:"Amara",value:"as The Siren",inline: true,},
                        {name:"Fl4k",value:"as The Beastmaster",inline: true,},
                        {name:"Zane",value:"as Himself",inline: true,},
                    )
                    // bl2 
                    .addFields( 
                        {name:"Zer0",value:"as A Number",inline: true,},
                        {name:"Maya",value:"as The Siren",inline: true,},
                        {name:"Axton",value:"as The Beastmaster",inline: true,},
                        {name:"Salvador",value:"as The Gunzerker",inline: true,},
                    )
                    // bl1
                    .addFields( 
                        {name:"Roland",value:"as The Soldier",inline: true,},
                        {name:"Lilith",value:"as The Siren",inline: true,},
                        {name:"Brick",value:"as Himself",inline: true,},
                        {name:"Mordecai",value:"as The Hunter",inline: true,},
                    )
                    //villians
                    .addFields( 
                        {name:"Handsome Jack",value:"BL 2 Villian",inline: true,},
                        {name:"Calypso twins",value:"BL 3 villians",inline: true,},
                        {name:"Aurelia Hammerlock",value:"sister of Hammerlock",inline: true,},
                    )
                    //other
                    
                    .addFields( 
                        {name:"Claptrap",value:"The annoying robot",inline: true,},
                        {name:"Sir Hammerlock",value:"The cool guy",inline: true,},
                        {name:"Marcus",value:"The gunseller",inline: true,},
                        {name:"Tannis",value:"The sirenologist",inline: true,},
                        {name:"Moxxi",value:"The barman",inline: true,},
                        {name:"Crazy Earl",value:"The eridium gangsta",inline: true,},
                        {name:"Ellie",value:"The car mechanic",inline: true,},
                        {name:"Tiny Tina",value:"The dangerous girl",inline: true,},
                        {name:"Typhon DeLeon",value:"The first vault hunter",inline: true,},
                        {name:"Ava",value:"Maya's apprentince",inline: true,},
                    )
                    .setFooter({text: `@BorderBot, ${year.toString()}`})
                    .setTimestamp()

                message.channel.send({ embeds: [mainEmbed], files: [thumbnail]})
                return
            }

            let keycharacter = (`${tokens[1]} ${tokens[2]}`).toLowerCase()

            if (tokens[2] == undefined) {
                tokens[2] = ""
                keycharacter = (`${tokens[1]}${tokens[2]}`).toLowerCase()
            }
    
            const charImage = characters[keycharacter].img.toString()
            const imgFileName = charImage.slice(20, charImage.length)

            const characterImage = new MessageAttachment(charImage)
            const characterEmbed = new MessageEmbed()
            .setTitle(characters[keycharacter].name)
            .setColor("#D2C119")
            .setURL(`${characters[keycharacter].wiki}`)
            .addFields(
                {name:`Name :`,value:`${characters[keycharacter].name}`,inline:false},
                {name:`Description :`,value:`${characters[keycharacter].description}`,inline:false},
                {name:`Ability :`,value:`${characters[keycharacter].ability}`,inline:false},
                {name:`Appears in :`,value:`${characters[keycharacter].games}`,inline:false},
                {name:`Type / Class :`,value:`${characters[keycharacter].typeclass}`,inline:false},
                {name:`Fun fact :`,value:`${characters[keycharacter].fact}`,inline:false}
            )
            .setImage(`attachment://${imgFileName}`)
            .setFooter({text: `@BorderBot, ${year.toString()}`})
            .setTimestamp()
            
            console.log([`${message.author.username} (${message.author.id}) : ${message.content}`])
            message.channel.send({ embeds: [characterEmbed], files: [characterImage]})
            
        }
    } 
}



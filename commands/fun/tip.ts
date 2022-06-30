import { Message } from 'discord.js'
import { prefix }  from '../../com-handler'

export default {
    callback: (message: Message, ...args:string[]) => {
        
        let tokens = message.content.split(" ");
        
        if (tokens[0] == `${prefix}tip`) { 
            
            if (tokens.length > 2) {
                message.reply("Hey, that's not a valid tip!")
                return
            }

            let tip: any = parseInt(tokens[1]);

            if (!Number.isInteger(tip)) {
                message.reply("Hey, that's not a valid tip!")
                return
            }

            if (Number.isInteger(tip) && tip < 1) {
                message.reply("Hey, minimum is 1$")
                return
            }
                
            let replies: string[] = []

            switch (true) {
                case (0 <= tip && tip < 1000): 
                    replies = [
                        "Oh, you sweet thing. 🥺",
                        "Always love a good tip. 🥰",
                        "Haha, you're gonna make me blush! 😊",
                        "Tiger growl! 🐯",
                        "Hey, I'll take it. 😛",
                        "Ooh. Thanks. 🤗",
                        "Glad to be appreciated. 😍",
                        "Just a little tip? 🥺",
                        "Even a little goes a long way in my book. 😜",
                        "How sweet. 🥰",
                        "Better than nothing, I suppose. 😇",
                        "Thanks, sugar. 😊",
                        "Mighty kind of you, sugar. 🥰",
                        "Oh, you dear sweet thing. 🥰",
                    ] 
                    break;
                case (1000 <= tip &&  tip < 10000): 
                    replies = [
                        "You keep that up, I might just have to pay you back somehow. 😋",
                        "Just when I thought you couldn't get any more attractive. 😼",
                        "Spending all that money on little ol' me? I'm flattered. 😳",
                        "I haven't seen someone throw that much money around since... my last boyfriend. 😘",
                        "Awwh, you're makin' me as shy as a hooker in confession! I'm not a hooker, though. Don't go spreading that around. 🤫",
                        "I'll be able to rebuild the Underdome in no time! 😎",
                        "Thanks for the tips, sugar. I think it's time your generosity was... rewarded. 😏",
                        "All that, for little ol' me? You shouldn't have. 😊",
                        "You must be livin' the high life, flashing cash like that. I think I like it. 😜",
                        "Mmm, now that's what I like to see. 😏",
                        "Keep it up, sugar, and I might have to find a way to show my appreciation. 😏",
                        "You sure know how to make a girl feel special. 😋",
                        "Keep 'em comin'. That's what I always say. 🤭",
                        "I always appreciate a big tip. 😇",
                        "Oh you are just too kind, sugar. 😘",
                        "Thanks! This place ain't doing great, but it's still doing better than most -- nothing dulls the pain of losing a war quite like a strong glass of rakk-ale. 😓",
                    ] 
                    break;
                
                case (10000 <= tip): 
                    replies = [
                        "Hell, I'm all wet. I mean -- I spilled a drink. Before you came in. Not 'cause you tipped me. Good god, I'm not that easy. 😈",
                        "You remind me of my last boyfriend. Think you met him. Name of Jack. Real charmer, at first. Always opening doors for me, *telling me I'm beautiful, shooting anyone in the face if they looked at me sideways. Course, then he got clingy and I *dropped him like a bad habit -- which as it turns out, wasn't the best idea. 😬",
                        "One step closer to rebuilding the Underdome. Jack didn't take it too well when I kicked him to the curb. Way he figured it, if he couldn't have the thing he loved, neither could I. He sent his goons to burn the Underdome to the ground. I think he's planning to rebuild it in his own image, but he's missing the stuff that made it great... the flash, the pizzazz, the personality... and his tits aren't as nice. 🤪",
                        "They say money can't buy you love, but it's a damned good replacement. Though, Mordecai might disagree with that. Poor guy... I offered him a rakk hive's worth of guns and cash for winning the top spot in my Underdome, but he never wanted any of it. If I had a nickel for every time he asked me to run away with him? Well, I wouldn't need a tip jar, that's for sure. 😆",
                        "You met Ellie yet? Lovely girl. Hates my guts. I tried to explain to her, there's no harm in putting just a little effort into your appearance. A little rouge here, some dieting there -- reasonable requests, I thought -- but a few years of that were enough to make her move out to The Dust. Said something about making her own way, that she didn't need Scooter or I. Kids, you know? 😪",
                        "I tell ya, sugar: the resistance was desperate for someone like you. Roland's a real sweetheart, but everybody knows this city's just a skagleap away from getting torn apart by Hyperion or the bandits. We all thought we were safe in New Haven a few years back, but that... that didn't turn out so well. 😖",
                        "Appreciated, sugar. That reminds me of something Jimbo Hodunk told me right before me and the kids left his disgusting bandit clan forever. He said, Hng dong pohng, bern-downg, hash-bohn buh-ba. Jowm, hmm. I'll never forget that. 🤐",
                        "I appreciate it, darlin' -- business hasn't been so hot since Hyperion rolled into town. They talk big about cleaning up the wasteland and civilizing Pandora, but it really just comes down to two things: money and control. And Hyperion wants both. 🙄",
                        "You haven't met the Hodunks yet, have you? Bastards, every one of 'em. They think just 'cause you're born into their stupid clan, you have to follow their rules, date who they tell you to date, murder who they tell you to murder, and -- yeugh. Good lawrd, I am so glad the kids and I left that STUPID clan fer-- oh god. Oh god, did I go back into the accent? Oh no. Oh crap. DON'T TELL ANYBODY. 😨",
                        "There was a time when I'd be out there on the frontlines, fighting Jack's troops alongside you. 'Course, that was four kids and god knows how many husbands ago. My reflexes aren't exactly what they used to be. 😔",
                    ]
                    break;
            }

            console.log([`${message.author.username} (${message.author.id}) : ${message.content}`])
            message.reply(replies[Math.floor(Math.random() * replies.length)].toString())
        }
    } 
}
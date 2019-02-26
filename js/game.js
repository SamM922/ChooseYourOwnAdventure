// NOTE - You must have a level with the name "start".  This is used as the first level in the game.

var game = {
    background_image: "intro-bg.jpg",
    levels: {

        start: {
            message: "You come across a dark cave",
            choices: [
                {
                    text: "Enter the cave",
                    nextLevel: "cave",
                },

                {
                    text: "Keep going",
                    nextLevel: "field",
                },
            ]
        },

        cave: {
            background_image: "fire.gif",
            message: "You died! Not good!",
            choices: [
                {
                    text: "Start over",
                    nextLevel: "start",
                },
            ]
        },

        field: {
            message: "Good choice! You come across another dark cave",
            choices: [
                {
                    text: "Enter this cave",
                    nextLevel: "cave2",
                },
                
                {
                    text: "Keep going again",
                    nextLevel: "boring",
                },
            ]
        },
        
        cave2: {
            message: "It's reaaaaly dark. You sure?",
            choices: [
            {
                text: "Yes!",
                nextLevel: "junction",
            },
            {
                text: "Not really...",
                nextLevel: "boring",
            },
            ]
        },
        
        junction: {
            background_image: "junction.gif",
            message: "Ooh, a junction! Which way?",
            choices: [
            {
                text: "Left",
                nextLevel: "cave",
            },
            {
                text: "Right",
                nextLevel: "win",
            },
            ]
        },
        
        boring: {
            message: "You live boringly ever after!",
            choices: [
                {
                    text: "Continiue",
                    nextLevel: "end2",
                },
            ]
        },
        
        end2: {
            message: "You lived! But did you win?...",
            choices: [
                {
                    text: "Start Over",
                    nextLevel: "start",
                },
            ]
        },
        
        win: {
            background_image: "hacker.png",
            message: "Oh crap, you found me. I guess you win :(",
            choices: [
                {
                    text: "Start Over",
                    nextLevel: "start",
                },
            ]
        },
    }
};
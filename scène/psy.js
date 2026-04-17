import { etat } from "/scène/retard.js";

export{
    init
}

function init(){
    scene('psy', () => {

        add([
            sprite('psy'),
        ]);

        // onButtonPress("space",()=> {loquace.next( )});
        // loquace.script([
        // "p Bonjour, comment ça va depuis la semaine dernière?",
        // "j ça va, mais j'ai encore eu une remarque dans mon agenda...",
        // "p ho, je suis désolé de l'entendre. Je pense que la session d'aujourd'hui pourra t'aider",
        // "p tu te souviens, la semaine passé, nous avons fait un long questionnaire",
        // "j Ha! Oui ! Je me souviens, je croyais qu'il finirait jamais !",
        // "p hahaha, je comprend c'est vrai qu'il est long. Mais, maintenant j'ai une reponse à te donner",
        // "p Le quizz que l'on a fait était pour savoir si tu avais des symptômes du trouble déficit de l'attention avec ou sans hypercativité",
        // "p est ce que tu en as déjà entendu parler",
        // "j Oui ! C'est le Tadaaaah, c'est ma soeur qui l'appelle comme cela, elle trouve cela plus drôle",
        // "j mais, je crois qu'on dit le Té-Dé-A-acH normalement",
        // "p Exactement ! Je te propose que l'on reprenne ensemble les catégories et on va essayé de faire des liens ensembles avec ton quotidien",
        // "p Le TDAH se divise en deux catégories, tu à le trouble de l'attention",
        // "p L'attetion c'est ta capacité à te concentrer sur quelque chose",
        // "p et tu à l'hyperactivité, c'est le fait d'avoir parfois trop d'énergie",
        // ]);


function AH(){

            const boutonA = add([
                rect(250,90),
                pos(150,400),
                color(GREEN),
                area(),
             ]);

            const boutonH = add([
                rect(250,90),
                pos(500,400),
                color(BLUE),
                area(),
             ]);
    
 }
AH()
    });
 function jeuSymptome(){
    let symtpome = 0 
              loquace.start(`sympt${symtpome}`)
  loquace.script({
            'sympt0':[
                "m Clique sur la flèche gauche si tu penses que c'est un syptome d'attention, ou celle de droite si c'est de l'hyperactivité!"
            ],
            'sympt1':[
                "m se perdre dans ses pensées."
            ],
            'sympt1A':[
                "yes c'est juste"
            ],
            'sympt1H':[
                "nope, nope"
            ],
            'sympt2':[
                "m avoir besoin de toujours bouger, se tortiller"
            ],
            'sympt3':[
                "m perdre régulièrement ces affaires."
            ],
            'sympt4':[
                "m coupez la parole aux autres."
                ],
            'sympt5':[
                "m se faire distraire par ce qui nous entour."
            ],
            'sympt6':[
                "m parlez souvent trop"
            ]
        }   );
 }   

}
import { etat } from "/scène/retard.js";

export{
    init
}

function init(){
    scene('psy', () => {

        add([
            sprite('psy'),
        ]);

        onButtonPress("space",()=> {loquace.next( )});
        loquace.script([
        "p Bonjour, comment ça va depuis la semaine dernière?",
        "j ça va, mais j'ai encore eu une remarque dans mon agenda...",
        "p ho, je suis désolé. Je pense que la session d'aujourd'hui pourra t'aider.",
        "p Nous allons faire un questionnaire",
        "p Le quizz concernait le trouble déficit de l'attention avec ou sans hypercativité.",
        "p Tu sais ce que c'est?",
        "j Oui ! C'est le Tadaaaah, c'est ma soeur qui l'appelle comme ça !",
        "j On dit le Té-Dé-A-acH normalement",
        "p Exactement ! On va reprendre ensemble les symptômes.",
        "p Il y'a deux catégories : ",
        "p L'attetion c'est ta capacité à te concentrer sur quelque chose",
        "p et l'hyperactivité, c'est le fait d'avoir trop d'énergie.",
        "m Pour chaque symptôme, clique sur le bouton du trouble qui y correspond !",
        "jeu"
        ]);


    loquace.registerCommand('jeu', () => {
    jeuSymptome()})


    });



function jeuSymptome(){

    const correct = ["a", "h", "a", "h", "a", "h"];

    let réponse = ""
    let symtpome = 0
    let enAttenteReponse = true; 

    loquace.registerCommand('concerta', () => {
        go('chambre2')
    });

    loquace.registerCommand('suite', () => {
        enAttenteReponse = true;
        if(symtpome < correct.length){
            loquace.start(`sympt${symtpome}`);
        } else {
            destroy(boutonA),
            destroy(boutonH),
            loquace.script(["m Bravo, tu as fini le quizz !",
                "p Il y'a beaucoup de symtômes différents.",
                "p D'après les résultats, tu es TDAH",
                "p Ce que nous allons faire maintenant, c'est testé un traitement",
                "p On se revoit dans un mois pour faire le points!",
                "concerta"
            ]);
        }
    })

    loquace.script({
            'sympt0':[
                "m se perdre dans ses pensées."
            ],
            'sympt1':[
                "m avoir besoin de toujours bouger, se tortiller."
            ],
            'sympt2':[
                "m perdre régulièrement ces affaires."
            ],
            'sympt3':[
                "m coupez la parole aux autres."
                ],
            'sympt4':[
                "m se faire distraire par ce qui nous entour."
            ],
            'sympt5':[
                "m parlez souvent trop."
            ]
        }   );

    loquace.start(`sympt${symtpome}`)

// Bouton attention_____________________________________
    const boutonA = add([
        rect(280,90),
        pos(250,450),
        color(GREEN),
        anchor('center'),
        area(),
    ]);

    boutonA.add([
        text('Attention'),
        pos(0,0),  
        anchor('center')
    ])  

    boutonA.onClick(() => {
        console.log("a")
        if(!enAttenteReponse) return;
        enAttenteReponse = false;

        const bonneReponse = correct[symtpome];
        symtpome++

        if("a" === bonneReponse){
            loquace.script(["m Bravo, c'est correct !",
                "suite"
            ])
        }else{
            loquace.script(["m Oups, c'est un symptome d'hyperactivité",
                "suite"
            ])
        }
    })

    // bouton hyperactivité______________
    const boutonH = add([
        rect(280,90),
        pos(600,450),
        anchor('center'),
        color(BLUE),
        area(),
    ]);

    boutonH.add([
        text('Hyperactivité'),
        pos(0,0),  
        anchor('center')
    ])  

    boutonH.onClick(() => {
        if(!enAttenteReponse) return;
        enAttenteReponse = false;

        const bonneReponse = correct[symtpome];
        symtpome++

        if("h" === bonneReponse){
            loquace.script(["m Bravo, c'est correct !",
                "suite"
            ])
        }else{
            loquace.script(["m Oups, c'est un symptome d'attention",
                "suite"
            ])
        }
    })
            
}
}


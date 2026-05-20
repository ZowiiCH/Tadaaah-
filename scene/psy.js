import { etat } from "./retard.js";

export{
    init
}

function init(){
    scene('psy', () => {

        add([
            sprite('psy'),
        ]);

        const music = play("musicPsy",{
            volume: 0.5, 
            speed: 1, 
            loop: true,
        });

        onSceneLeave(() => {
            music.stop()
        });

        onButtonPress("space",()=> {loquace.next( )});
        loquace.script([
            "p Bonjour, comment ça va aujourd'hui?",
            "j Bof... c'était une journée difficile.",
            "p Ho, je suis désolée. Cette session devrait t'aider.",
            "p Nous avons les résultats du questionnaire de la semaine passée",
            "p Le quizz sur le trouble déficit de l'attention avec ou sans hyperactivité.",
            "j Je me souviens, le Tadaaah, ma soeur l'appelle comme ça !",
            "j mais, on dit le Té-Dé-A-acH normalement",
            "p Exactement ! Il y a deux catégories de symptômes.",
            "p L'attetion : c'est ta capacité à te concentrer sur quelque chose.",
            "p et l'hyperactivité : c'est le fait d'avoir trop d'énergie.",
            "u Pour chaque symptôme, clique sur le bouton du trouble qui y correspond !",
            "jeu"
        ]);

        loquace.registerCommand('jeu', () => {
            jeuSymptome()
        })

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
                    "p Il y a beaucoup de symtômes différents.",
                    "p D'après les résultats, tu es TDAH",
                    "p Tu va tester un médicament.",
                    "p On se revoit dans un mois pour faire le point!",
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
                "m perdre régulièrement ses affaires."
            ],
            'sympt3':[
                "m couper la parole aux autres."
                ],
            'sympt4':[
                "m se faire distraire par ce qui nous entoure."
            ],
            'sympt5':[
                "m parler souvent trop."
            ]
        });

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
                play("juste"),
                loquace.script([
                    "m Bravo, c'est correct !",
                    "suite"
                ])
            }else{
                play("faux")
                loquace.script([
                    "m Oups, c'est un symptome d'hyperactivité",
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
        ]); 

        boutonH.onClick(() => {
            if(!enAttenteReponse) return;
            enAttenteReponse = false;

            const bonneReponse = correct[symtpome];
            symtpome++

            if("h" === bonneReponse){
                play("juste"),
                loquace.script([
                    "m Bravo, c'est correct !",
                    "suite"
                ])
            }else{
                play("faux")
                loquace.script([
                    "m Oups, c'est un symptôme du déficit de l'attention.",
                    "suite"
                ])
            };
        });      
    };
};


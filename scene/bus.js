import { etat } from "./retard.js";

export{
    init
}

function init() {
    scene('bus', () => {

        const music = play("musicBus",{
            volume: 1, 
            speed: 1, 
            loop: true,
        });

        onSceneLeave(() => {
            music.stop()
        });

        add([
            sprite('bus'),
        ]);

        loquace.registerCommand('jeu', () => {
            créerPensée()
        });

        loquace.registerCommand('goecole', () => {
            go('ecole')
        });

        onButtonPress("space",()=> {
            loquace.next()
        })
    
        if(etat.retardMaison < 4){
            loquace.script(["j Même pas eu besoin de courir pour prendre le bus !",
                            "j Il faut pas que je rate mon arrêt !.",
                            "m Cliques sur les pensées intrusives pour les faire disparaitre !",
                            "jeu"
            ])
        }else if(etat.retardMaison > 6){
            loquace.script(["j J'ai pris le bus d'après... Je vais être en retard....",
                            "j Il faut pas que je rate mon arrêt !",
                            "m Cliques sur les pensées intrusive pour les faire disparaitre !",
                            "jeu"
        ])
        } else{        
            loquace.script(["j J'ai du courir pour attraper le bus!",
                            "j Il faut pas que je rate mon arrêt !",
                            "m Cliques sur les pensées intrusive pour les faire disparaitre !",
                            "jeu"
            ])};


    //////////////////////////Bulle et variables ///////////////////

        let Pensée = [
            "j'ai bien pris toutes mes affaires?", 
            "Maman sait que je fais pas exprès", 
            "Je me sens coupable...", 
            "J'ai trop aimé le dernier épisode de Boruto",
            "On va faire quoi à l'école aujourd'hui?",
            "Il fait trop beau !",
            "J'aimerais aller jouer dehors",
            "j'ai un peu peur du RDV avec la psychologue",
            "J'espère que le repas de la cantine sera bon",
            "Stylé le manteau de la dame, on dirait Matrix en orange",
            "Mhm... c'est quoi ce batiment?",
            "Je suis dans quel rue?",
            "Ouf, j'ai eu peur d'avoir raté mon arrêt",
            "J'aimerais trop aller au Zoo ce week-end",
            "Comme pour l'anniversaire de Jasmine !",
            "J'aime trop les gâteaux",
            "Je me demande ce que j'ai pour la recré",
            "J'ai toujours pas rangé ma chambre",
            "faut pas que j'oublie ce soir",
            "des fois, j'ai envie, mais je me sens paralisé",
            "c'est comme si y'avait un mur dans ma tête",
            "ça me rend triste et après ça me met colère.",
        ];

        let NPensée = 0
        let score = 0;
        let scoreFinal = 0

        //_______Fonction arrêt de bus_______
        function arretBus(){

            if(scoreFinal <= 10000){
                loquace.script([
                    "j Ha ! C'est mon arrêt !",
                    "goecole"
                ]);
                music.stop();
            }else{
                const BulleRouge = add([ 
                    sprite('bubble', {
                        frame :0 }
                    ),
                    anchor('center'),
                    pos(450,280),
                    area(),
                    scale(2),
                ])

                BulleRouge.add([
                    text("HO NON J'AI RATÉ MON ARRÊT", { size: 20, width: 158 }),
                    color(BLACK),
                    anchor('center'),
                    pos(0, 0), 
                ]);

                BulleRouge.onClick(() => {
                    wait(2, () => {
                        play("bubble"),
                        destroy(BulleRouge),
                        loquace.script([
                            "j Je vais sortir au prochain et marcher",
                            "j le prof va pas être content...",
                            "goecole"
                        ]);
                    })

                });
            }
        }

        //__________Fonction jeu pensée intrusive______
        function créerPensée(){
            if(NPensée >= Pensée.length){return arretBus()}

            const BulleVerte = add([
                sprite('BVerte'),
                pos(rand(150, 700), rand(80, 420)),
                anchor("center"),
                scale(2),
                area(),
                opacity(1),
            ]); 

            const penséeInt = add([
                text(Pensée[NPensée], { size: 16, width: 200 }),
                color(BLACK),
                anchor("center"), 
                pos(
                    BulleVerte.pos
                ), 
            ]);

            BulleVerte.fadeIn(0.5);

            onUpdate(() => {
                score++;
            });

            BulleVerte.onClick(() => {
                destroy(BulleVerte);
                destroy(penséeInt);
                NPensée++;
                scoreFinal = score;
                créerPensée(); 
                console.log(scoreFinal);
                etat.retardBus = scoreFinal;
                play("bubble");
            });
        }
    })
}
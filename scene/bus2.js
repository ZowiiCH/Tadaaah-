import { etat } from "./retard.js";

export{
    init
}

function init() {
    scene('bus2', () => {

        add([
            sprite('bus2'),
        ]);

            const music = play("musicBus",{
            volume: 1, 
            speed:0.9, 
            loop: true,
        });

        onSceneLeave(() => {
            music.stop()
        });
        
        loquace.registerCommand('jeu', () => {
            créerPensée()
        });

        loquace.registerCommand('ecole2', () => {
            go('ecole2')
        });

        onButtonPress("space",()=> {
            loquace.next()
        });

        loquace.script([
            "j Je rate presque plus le bus,",
            "j j'ai moins peur qu'avant d'être en retard",
            "u clique sur les pensées intrusives pour les faire disparaitre !",
            "jeu"       
        ]);

//////////////////////////Bulle///////////////////

        let Pensée = [
            "C'est vrai, je perd moins mes affaires",
            "Jasmine m'a dit que je fais moins de bruit en classe.",
            "Elle dit aussi que je fais moins de blagues...",
            "il m'arrive d'avoir mal à la tête maintenant",
            "ha! Il me reste trois arrêts",
            "Lucas m'a dit que les histoires que j'inventais lui manques",
            "J'ai moins d'idée et je suis plus calme...",
            "c'est plus silencieux, mais plus ennuyant aussi....",
        ];

        let NPensée = 0

        function créerPensée(){
            if(NPensée >= Pensée.length){
                return loquace.script([
                    "j C'est mon arrêt!",
                    "j Yes! Encore un jour sans arrivée tardive ! ",
                    "ecole2"
                ])
            }

            const BulleVerte = add([
                sprite('BVerte'),
                pos(
                    rand(150, 700),
                    rand(80, 420)
                ),
                anchor("center"),
                scale(2),
                area(),
                opacity(1),
            ]); 

            const penséeInt = add([
                    text(Pensée[NPensée], { 
                        size: 16, 
                        width: 200 
                    }),
                    color(BLACK),
                    anchor('center'), 
                    pos(BulleVerte.pos), 
            ]);

            BulleVerte.fadeIn(1.1);

            NPensée++;


            BulleVerte.onClick(() => {
                destroy(BulleVerte);
                destroy(penséeInt);
                créerPensée();
                play("bubble");          
            });
        }
    })
}
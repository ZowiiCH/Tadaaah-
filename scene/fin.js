import { etat } from "./retard.js";

export{
    init
}

function init() {
    scene('fin', ()=> {

        add([
            sprite('fin')
        ])

         const music = play("music",{
            volume: 0.5, 
            speed: 0.9, 
            loop: true, 
        });
            
        onButtonPress("space",()=> {
                loquace.next( )
        });
            
        loquace.script([
            "m Bravo ! Tu as vécu dans la peau d'un enfant Tadaaah!",
            "m Il se manifeste différemment d'un enfant à l'autre",
            "m C'est pour cela qu'il y a beaucoup de symptômes différents!",
            "m C'est aussi une source de créativité et d'énergie !",
            "m J'espère que ce petit jeu t'aura permis de mieux comprendre",
            "m le positif et le négatif du Tadaaah !",
            "rejouer"
        ])

        loquace.registerCommand('rejouer', () => {
            rejouer()
        });

        function rejouer(){
            let rejouer = add([
                rect(200,90),
                pos(580,100),
                color(GREEN),
                anchor('center'),
                area(),
            ]);

            rejouer.add([
                text('Rejouer'),
                pos(0,0),  
                anchor('center')
            ])  
            
            rejouer.onClick(() => {
                go('menu')
                etat.retardMaison = 0
                etat.retardBus = 0
                etat.distrait = 0
                etat.hyperfocal = 0
            });
        }
    }); 
}
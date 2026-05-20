import { etat } from "./retard.js";

export{
    init
}


function init(){
    scene('chambre2', () => {

        add([
            sprite('chambre2'),
        ]);

        let début = 0

        const music = play("chambreJeu",{
            volume: 0.5, 
            speed: 0.9, 
            loop: true, 
        });
        
        onSceneLeave(() => {
            music.stop()
        });

        onButtonPress("space",()=> {
            loquace.next( ), 
            début++, 
            console.log(début)}
        );
        
        loquace.script([
            "e Tu as commencé le traitement depuis un mois. Comment tu te sens?",
            "j Plus calme, c'est plus simple le matin et pour faire mes devoirs.",
            "e C'est vrai,  cela me manque quand tu chantonnais en les faisant.",
            "j Oui c'est vrai, j'ai arrêté de chanter...",
            "e Oui, cela me manque. Tu inventais tous le temps des mélodies.",
            "e Allez c'est l'heure d'aller prendre le bus!",
            "u Prends vite tes affaires !"
        ]);

        //////////////sac///////////////////////
        let sacCliqué = false;

        const sac = add([
                    sprite('sac2', {
                        frame: 1}),
                    pos(65,300),
                    area(),
                    "cligno"   
                ]);

        sac.onHover(() => {if(début >= 7){
            sac.play("cligno");
            loquace.vn("sac d'école")};
        });

        sac.onHoverEnd(() => {
            sac.stop();
            sac.frame = 1;
            music.speed += 0.05
        });

        sac.onClick(() => {if(début >= 7){
            sac.destroy();
            loquace.script([
                "Oups, j'ai pas mis mes devoirs dans mon sac.",
            ]);
            let sacCliqué = true;
        }});

    /////////////////////////DEvoir////////
        const devoir = add([
            sprite('devoir2',  {
                frame: 1}
            ),
            scale(0.8),
            pos(250,70),
            area(),
            "cligno"
        ]);

        devoir.onHover(() =>{if(sacCliqué = true){
            devoir.play("cligno")
            loquace.vn('feuilles')
            }
        });

        devoir.onHoverEnd(() =>{    
            devoir.stop()
            devoir.frame = 1
            music.speed += 0.05
        });

        devoir.onClick(()=>{if(sacCliqué = true){
            destroy(sac)
            devoir.play("trouvé")
            loquace.script([
                "Facile à trouver quand c'est rangé !",
                "bus2",
            ]);
            loquace.registerCommand('bus2', () => {
                go('bus2')
            });
        }});
    });
};

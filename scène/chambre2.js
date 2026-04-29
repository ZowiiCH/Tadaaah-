import { etat } from "/scène/retard.js";

export{
    init
}


function init(){
        scene('chambre2', () => {

        add([
            sprite('chambre2'),
        ]);
    
    let début = 0

    onButtonPress("space",()=> {loquace.next( ), début++, console.log(début)});
        loquace.script([
            "e Ca fait un mois que tu as commencé le traitement. Comment est ce que tu te sens?",
            "j Plus calme, c'est plus simple pour me préparer le matin et faire mes devoirs.",
            "e C'est vrai, mais cela me manque quand tu chantonnais en les faisant.",
            "j Oui c'est vrai, je t'ai fais découvrire plein de mélodies!",
            "e Oui, cela me manque. Tu en inventais tous le temps.",
            "e Allez c'est l'heure d'aller prendre le bus!",
            "m Prends vite tes affaires !"
        ]);

        //////////////sac///////////////////////
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
        //loquace.clear(); // ← efface le message loquace
    });

    sac.onClick(() => {if(début >= 7){
        sac.destroy();
        loquace.script(["Oups, je les ai pas mis dans mon sac.",
           
        ]

        );}
    });

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

    devoir.onHover(() =>{if(début >= 8){
        devoir.play("cligno")
        loquace.vn('feuille')
        }
    });

    devoir.onHoverEnd(() =>{    
        devoir.stop()
        devoir.frame = 1
        //  loquace.clear() <= fait disparaitre les bulles de dialogues aussi....
    });

    devoir.onClick(()=>{if(début >= 8){
        destroy(sac)
        devoir.play("trouvé")
        loquace.script(["Facile à trouver quand c'est rangé",
                "bus2",
        ]);

    loquace.registerCommand('bus2', () => {
        go('bus2')
    });

    }}
)})
}

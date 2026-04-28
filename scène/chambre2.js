import { etat } from "/scène/retard.js";

export{
    init
}


function init(){
        scene('chambre2', () => {

        add([
            sprite('chambre'),
        ]);
    
    let début = 0

    onButtonPress("space",()=> {loquace.next( ), début++, console.log(début)});
        loquace.script([
            "j Cela fait déjà un mois que j'ai commencé mon traitement pour le Tadah.",
            "e Oui, comment est ce que tu te sens?",
            "j Plus calme, c'est plus simple pour me préparer le matin et faire mes devoirs.",
            "e C'est vrai, mais cela me manque quand tu chantonnais en les faisant.",
            "e Tu avais toujours une nouvelle musique dans la tête.",
            "j Hahaha, oui c'est vrai, je t'ai fais découvrire plein de nouvelle chançon comme ça!",
            "e Oui, cela me manque. Allez par contre c'est l'heure d'aller prendre le bus!",
            "j Je vais vite chercher mes affaires !"
        ]);

    const sac = add([
                sprite('sac', {
                    frame: 1}),
                pos(185,220),
                area(),
                "cligno"   
            ]);

    sac.onHover(() => {if(début >= 8){
        sac.play("cligno");
        loquace.vn("sac d'école")};
    });

    sac.onHoverEnd(() => {
        sac.stop();
        sac.frame = 1;
        //loquace.clear(); // ← efface le message loquace
    });

    sac.onClick(() => {if(début >= 8){
        sac.destroy();
        loquace.script(["C'est bon, j'ai déjà tout dans mon sac!",
            "je peux directement aller prendre le bus",
            "bus2"
        ]

        );}
    });

loquace.registerCommand('bus2', () => {
go('bus2')})

})
}


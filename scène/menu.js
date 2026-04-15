export{
    init
}

function init() {
    scene('menu', ()=> {
    add([
        sprite('menu')
    ])

    let début = 0
    onButtonPress("space", () =>{loquace.next(), début ++, console.log(début)});
   
        const bouton = add([
            rect(350,90),
            pos(350,420),
            color(White),
            area(),
        ]);
    
    
        bouton.onClick(() => {
            if(début >= 2) go('chambre');
        });

    loquace.script([" tu peux appuyer sur la bare espace pour faire passé le texte !",
        "et utiliser la souris pour appuyer sur commencer :)"
    ])
    });
    
}
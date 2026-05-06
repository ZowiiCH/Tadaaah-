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
            pos(width()/2, height()/2 - 100),
            pos(305,420),
            opacity(0),
            area(),
        ]);
    
    
        bouton.onClick(() => {
            if(début >= 1) go('chambre');
        });

    loquace.script([" Appuie sur espace pour faire passer le texte !",
        "et utiliser la souris pour cliquer sur commencer :)"
    ])
    });
    
}
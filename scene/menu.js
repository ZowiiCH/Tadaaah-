export{
    init
}


function init() {
    scene('menu', ()=> {
        add([
            sprite('menu')
        ])

        // Il faut appuyé sur l'écran pour que la musique se lance
        // pendant que cela charge
        const music = play("music",{
            volume: 0.5, 
            speed: 1, 
            loop: true, 
        });

        let début = 0

        onButtonPress("space", () =>{
            loquace.next(), 
            début ++, 
            console.log(début)
        });
    
        const bouton = add([
            rect(350,90),
            pos(width()/2, height()/2 - 100),
            pos(305,420),
            opacity(0),
            area(),
        ]);


        bouton.onClick(() => {
            music.stop();
            if(début >= 1) go('chambre');
        });

        loquace.script(["Appuie sur espace pour faire passer le texte !",
            "et la souris pour cliquer sur les éléments ! ",
            "u cliques sur commencer !"
        ]);
    });   
}
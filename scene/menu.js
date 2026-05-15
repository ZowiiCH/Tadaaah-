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

        onButtonPress("space", () =>{
            loquace.next()
        });
        
        loquace.registerCommand('next', () => {
            const bouton = add([
                rect(350,90),
                pos(width()/2, height()/2 - 100),
                pos(305,420),
                opacity(0),
                area(),
            ]);

            bouton.onClick(() => {
                music.stop();
                go('chambre');
            });
        });

        loquace.script(["Appuie sur espace ou clique avec la souris pour faire passer le texte !",
            "et clique sur les éléments pour interagir avec! ",
            "u clique sur commencer !",
            "next"
        ]);

    });   
}
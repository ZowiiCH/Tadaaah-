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
        ])

    });
    
}
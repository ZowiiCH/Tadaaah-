export{
    init
}

function init() {
    scene('fin', ()=> {
    add([
        sprite('menu')
    ])
        onButtonPress("space",()=> {loquace.next( )});
    loquace.script([
        "m Bravo ! Tu as vécu dans la peau d'un enfant Tadaaah!",
        "m Le TDAH est un trouble complexe et très diverses.",
        "m il se manifeste autrement d'un enfant à l'autre",
        "m C'est pour cela qu'il y'a beaucoup de symptômes différents!",
        "m J'espère que ce petit jeu t'auras permis de mieux comprendre",
        "m le positif et le négatif du Tadaaah !",
    ])

    });
    
}
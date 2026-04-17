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
        "m Bravo ! Tu as survécu deux jours dans la peau d'un enfant Tadaaah!",
        "m Le TDAH est un trouble complexe et très diverses.",
        "m il se manifeste aussi différament d'un enfant à l'autre",
        "m C'est pour cela qu'il y'a beaucoup de symptômes différents!",
        "m J'espère que ce petit jeu t'auras permis d'un peu mieux comprendre",
        "m le positif et le négatif du Tadaaah !",
    ])

    });
    
}
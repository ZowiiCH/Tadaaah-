import kaplay from "https://unpkg.com/kaplay@3001.0.19/dist/kaplay.mjs";
kaplay();

//_________________________ SPRITES___________________________
loadSprite('menu', '/assets/menu.png')
loadSprite('bus', '/scène/bus.png');
loadSprite('busPaneau', '/assets/busPaneau.png', {
    sliceX: 1,
    sliceY: 2,
    anims:{
           "cligno": { from: 0, to: 1, loop: true },
        } 
});
loadSprite('chambre','/scène/chambre.png')
loadSprite('sac', '/assets/sac.png', {
    sliceX: 1,
    sliceY: 2,
    anims:{
            "cligno": { from: 0, to: 1, loop: true } 
            } 
})
loadSprite('box', '/assets/box.png', {
    sliceX: 1,
    sliceY: 2,
    anims:{
        "cligno": { from: 0, to: 1, loop: true }
        }
     } 
)
loadSprite('devoir', '/assets/devoir.png', {
    sliceX: 2,
    sliceY: 2,
    anims:{
        "cligno": { from: 0, to: 1, loop: true },
        "trouvé" : { from : 2, to:3, loop: true}
        }
     } 
)
loadSprite('bubble', '/assets/bubble.png',{
    sliceX: 2,
    sliceY: 2,
})
loadSprite('BVerte', 'assets/bulleVerte.png')

// souris
loadSprite("cursor", "/assets/cursor.png");
//__________________________AUTRES____________________
let retardMaison = 0

//_________________________________________MENU_______________________________________________

scene('menu', ()=> {
    add([
        sprite('menu')
    ])

    const bouton = add([
        rect(350,90),
        pos(width()/2, height()/2 - 100),
        pos(305,420),
        opacity(0),
        area(),
    ]);

  bouton.onClick(() => {
        go('chambre');
    });
})


//_________________________________________chambre______________________________
scene('chambre', () => {

    add([
        sprite('chambre'),
    ]);

var nomObj = null

////////////////////////////////SAC//////////////////////
    const sac = add([
        sprite('sac', {
            frame: 1}),
        pos(185,220),
        area(),
        "cligno"   
        // dans les options d'aréa, on peut mettre une shape pour que cela ne soit pas la taille
    ]);

    sac.onHover(() =>{
        sac.play("cligno")
        nomObj = add([  
            text("sac d'école"),
            color(RED),
            scale(0.5),
            pos(cursor.pos),
            anchor('center'),
        ])
    });

    sac.onHoverEnd(() =>{
        sac.stop()
        sac.frame = 1
        if(nomObj)
            {destroy(nomObj); nomObj = null}
    });

    sac.onClick(()=>{
        const msg = add([  
            text('Il n y a pas mes devoir dans mon sac'),
            color(RED),
            scale(0.5),
            pos(width()/2, height()/2),
            anchor('center'),
        ])
        retardMaison += 1,
        console.log(retardMaison)
        wait(3, () => {
            destroy(msg)
        });
        if(nomObj)
            {destroy(nomObj); nomObj = null}
        sac.destroy()

    })
//////////////////////BOX///////////////////
    const box = add([
        sprite('box',  {
        frame: 1}
        ),
        pos(475,90),
        area(),
        "cligno"
    // dans les options d'aréa, on peut mettre une shape pour que cela ne soit pas la taille
    ]);

    box.onHover(() =>{
        box.play("cligno")
        nomObj = add([  
            text("boîte"),
            color(RED),
            scale(0.5),
            pos(cursor.pos),
            anchor('center')
        ])
    });

    box.onHoverEnd(() =>{    
        box.stop()
        box.frame = 1
        if(nomObj)
            {destroy(nomObj); nomObj = null}
    })

     box.onClick(()=>{
            const msg = add([  
            text('Ma boïte est un peu petite pour y mettre mes devoirs....'),
            color(RED),
            scale(0.5),
            pos(width()/2, height()/2),
            anchor('center'),
        ])

        retardMaison += 1,
        console.log(retardMaison)
        wait(3, () => {
            destroy(msg)
        });
        if(nomObj)
            {destroy(nomObj); nomObj = null}
        box.destroy()
    })
/////////////////////////devoir///////////////////
    const devoir = add([
        sprite('devoir',  {
        frame: 1}
        ),
        scale(0.8),
        pos(335,40),
        area(),
        "cligno"
    ])

    devoir.onHover(() =>{
        devoir.play("cligno")
        nomObj = add([  
            text("tas de feuilles"),
            color(RED),
            scale(0.5),
            pos(cursor.pos),
            anchor('center')
        ])
    });

    devoir.onHoverEnd(() =>{    
        devoir.stop()
        box.frame = 0
        if(nomObj)
            {destroy(nomObj); nomObj = null}
    })

     devoir.onClick(()=>{
            const msg = add([  
            text('Enfin ! J avais oublié que maman m avait dit de ranger mon bureau hier'),
            color(RED),
            scale(0.5),
            pos(width()/2, height()/2),
            anchor('center'),
        ])
        destroy(box) // marche pas quand je met les deux en un??
        destroy(sac)
        retardMaison += 1,
        console.log(retardMaison)
        devoir.play("trouvé")

        if(nomObj)
            {destroy(nomObj); nomObj = null}
        wait(3, () => {
            destroy(msg)
        });


    const bouton2 = add([
        rect(440,100),
        pos(width()/2, height()/2 - 100),
        anchor('center'),
        color(RED),
            scale(0.5),
        area(),
    ]);

    bouton2.add([
        text('aller prendre le bus'),
        pos(0, 0),
        anchor('center'),
    ]);

      bouton2.onClick(() => {
        go('bus');
    });
    })

////////////////////////curseur///////////////////
    const cursor = add([
        sprite("cursor"), // sprite
        pos(455,300),
        area(),
        "clickable"   
    ]);

    onUpdate(() => {
        // cursor() renvoie la position du curseur dans l'espace du jeu
        cursor.pos = mousePos();
    });

});


//_______________________________________________BUS________________________________________

scene('bus', () => {

    add([
        sprite('bus'),
    ]);

let nomObj = null;
let retardBus = 0;

if(retardMaison < 2){
    const msg = add([  
        text("Pour une fois, j'ai pas eu besoin de courir pour prendre le bus !"),
        color(RED),
        scale(0.5),
        pos(width()/2, height()/2),
        anchor('center'),
    ])

     wait(3, () => {
        destroy(msg)
    });
}else if(retardMaison == 2){
    const msg = add([  
        text("Ouf j'ai failli raté le bus!"),
        color(RED),
            scale(0.5),
        pos(width()/2, height()/2),
        anchor('center'),
        ])

    wait(3, () => {
        destroy(msg)
        });
}else if(retardMaison > 2){
    const msg = add([  
        text("aie aie aie, j'ai du prendre le bus d'après. Je vais être en retard...."),
        color(RED),
            scale(0.5),
        scale(0.5),
        pos(width()/2, height()/2),
        anchor('center'),
        ])

    wait(3, () => {
        destroy(msg)
    });
}

/////////////////////Paneau/////////////////////////
    const paneauBus = add([
        sprite('busPaneau', {
            frame: 1}),
        pos(375,25),
        area(),
        scale(1),
        "cligno"

    ]);

        paneauBus.onHover(() =>{
        paneauBus.play("cligno")
        nomObj = add([  
            text("paneau"),
            color(RED),
            scale(0.5),
            pos(cursor.pos),
            anchor('center'),
        ])
    });

    paneauBus.onHoverEnd(() =>{
        paneauBus.stop()
        paneauBus.frame = 1
        if(nomObj)
            {destroy(nomObj); nomObj = null}
    });

    paneauBus.onClick(()=>{
        const msg = add([  
            text("C'est bon j'ai le temps avant mon arrêt"),
            color(RED),
            scale(0.5),
            pos(width()/2, height()/2),
            anchor('center'),
        ])

        console.log(retardBus)
        wait(3, () => {
            destroy(msg)
        });
        if(nomObj)
            {destroy(nomObj); nomObj = null}
        paneauBus.destroy()

        créerPensée();

    })

//////////////////////////Bulle///////////////////

let Pensée = ["j'espère que j'ai bien pris toutes mes affaires", 
            "Maman sait que je fais pas exprès", 
            "Je me sens quand même coupable...", 
            "J'ai trop aimé le dernier épisode de Naruto",
            "Je me demande ce qu'on va faire à l'école aujourd'hui",
            "Il fait beau",
            "j'espère que j'aurais le temps d'aller jouer dehors",
            "j'ai un peu peur du rendez-vous aux cabinet de psychologie",
            "J'espère que le repas de la cantine sera bon",
            "Il est trop stylé le manteau de la dame, on dirait Matrix",
            "jpp"
];


// const BulleRouge = add([
//     sprite('bubble',  {
//     frame: 0}
//     ),
//     pos(50,50),
//     area(),
// ])



// const Bulleleu = add([
//     sprite('bubble',  {
//     frame: 2}),
//     pos(rand(0, 700), rand(0, 420)),
//     scale(0.8),
//     area(),
// ])
let NPensée = 0
        // keep track of score
let score = 0;
let scoreFinal = 0

function créerPensée(){
    if(NPensée >= Pensée.length) return;

    const BulleVerte = add([
        sprite('BVerte'),
        pos(rand(0, 700), rand(0, 420)),
        scale(2),
        area(),
    ]); 

    const penséeInt = add([
        text(Pensée[NPensée], { size: 16, width: 250 }),
        color(BLACK),
        anchor('topleft'), // si je met anchor center c'est pire...
        pos(BulleVerte.pos), 
    ]);

    NPensée++;

    const scoreLabel = add([
        text(score.toString()),
        pos(24, 24),
    ]);

    // increment score every frame
    onUpdate(() => {
        score++;
        scoreLabel.text = score.toString();
    });


    BulleVerte.onClick(() => {
        destroy(BulleVerte);
        destroy(penséeInt);
        retardBus++;
        scoreFinal = score;
        console.log(scoreFinal);
        wait(1, () => créerPensée()); // prochaine bulle après 1 seconde
    });
}


// const Bullerose = add([
//     sprite('bubble',  {
//     frame: 3}
//     ),
//     pos(500,300),
//     area(),
// ])


////////////////////////curseur///////////////////
    const cursor = add([
        sprite("cursor"), // sprite
        pos(455,300),
        area(),
        "clickable"   
    ]);

    onUpdate(() => {
        // cursor() renvoie la position du curseur dans l'espace du jeu
        cursor.pos = mousePos();
    });

}),

go('menu')

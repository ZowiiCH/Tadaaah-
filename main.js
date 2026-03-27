import kaplay from "https://unpkg.com/kaplay@3001.0.19/dist/kaplay.mjs";

kaplay();
loadSprite('menu', '/assets/menu.png')
loadSprite('bus', '/scène/bus.jpg');
loadSprite('busfemme', '/assets/busfemme.png', {
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
// souris
loadSprite("cursor", "/assets/cursor.png");




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


scene('chambre', () => {

    add([
        sprite('chambre'),
    ]);
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
    });

    sac.onHoverEnd(() =>{
        sac.stop()
        sac.frame = 1
    });

    sac.onClick(()=>{
        const msg = add([  
            text('Il n y a pas mes devoir dans mon sac'),
            color(BLACK),
            pos(width()/2, height()/2),
            anchor('center'),
        ])

        wait(3, () => {
            destroy(msg)
        });

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
    });

    box.onHoverEnd(() =>{    
        box.stop()
        box.frame = 1
    })

     box.onClick(()=>{
            const msg = add([  
            text('Ma boïte est un peu petite pour y mettre mes devoirs....'),
            color(BLACK),
            pos(width()/2, height()/2),
            anchor('center'),
        ])

        wait(3, () => {
            destroy(msg)
        });

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
    });

    devoir.onHoverEnd(() =>{    
        devoir.stop()
        box.frame = 0
    })

     devoir.onClick(()=>{
            const msg = add([  
            text('Enfin ! J avais oublié que maman m avait dit de ranger mon bureau hier'),
            color(BLACK),
            pos(width()/2, height()/2),
            anchor('center'),
        ])
        devoir.play("trouvé")

        wait(3, () => {
            destroy(msg)
        });


    const bouton2 = add([
        rect(440,100),
        pos(width()/2, height()/2 - 100),
        anchor('center'),
        color(RED),
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
// onMousePress(() => {
//     // Vérifie si le clic a eu lieu sur le sprite "cursor"
//     if (isClicked(cursor)) {
//         console.log("Clic détecté sur le trackpad !");
// };
// });



scene('bus', () => {

    add([
        sprite('bus'),
    ]);

    const femmeBus = add([
        sprite('busfemme'),
        pos(0,0),
        area(),
        // dans les options d'aréa, on peut mettre une shape pour que cela ne soit pas la taille
    ]);


}),

go('menu')

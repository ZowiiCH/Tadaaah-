import { etat } from "/scène/retard.js";

export{
    init
}


function init(){
        scene('chambre', () => {

        add([
            sprite('chambre'),
        ]);
    
    let début = 0

    onButtonPress("space",()=> {loquace.next( ), début++, console.log(début)});
        loquace.script([
            "j Il faut que je me dépèche de partir à l'école.",
            "j Si je prends trop de temps, je vais raté le bus ",
            "j Est ce que j'ai pris mes devoirs ?",
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

sac.onHover(() => {if(début >= 3){
    sac.play("cligno");
    loquace.vn("sac d'école")};
});

sac.onHoverEnd(() => {
    sac.stop();
    sac.frame = 1;
    loquace.clear(); // ← efface le message loquace
});

sac.onClick(() => {if(début >= 3){
    etat.retardMaison += 1;
    console.log(etat.retardMaison);
    sac.destroy();
    loquace.vn("Il n'y a pas mes devoirs dans mon sac");}
});

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

        box.onHover(() =>{if(début >= 3){
            box.play("cligno")
           loquace.vn("Boîte")};
        });

        box.onHoverEnd(() =>{    
            box.stop()
            box.frame = 1
            loquace.clear()
        })

        box.onClick(()=>{if(début >= 3){
            etat.retardMaison += 1;
            console.log(etat.retardMaison);
            loquace.vn('Elle est trop petite pour y mettre ses devoirs...');
            box.destroy();}
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

        devoir.onHover(() =>{if(début >= 3){
            devoir.play("cligno")
           loquace.vn('tas de feuille')
            }
        });

        devoir.onHoverEnd(() =>{    
            devoir.stop()
            devoir.frame = 1
            loquace.clear()
        })

        devoir.onClick(()=>{if(début >= 3){
            destroy(box) // marche pas quand je met les deux en un??
            destroy(sac)
            etat.retardMaison += 1,
            console.log(etat.retardMaison)
            devoir.play("trouvé")
            loquace.pop("Yeah! J'avais oublié que j'avais ''rangé'' mon bureau hier")


        const bouton2 = add([
            rect(440,100),
            pos(width()/2, height()/2 ),
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
        });}
        })
        });
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

    };


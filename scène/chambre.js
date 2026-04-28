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
            "j Il faut que je parte prendre le bus pour l'école.",
            "j  Ou son mes devoirs ?? Vite, j'ai déjà eu des arrivées tardives.",
            "m Clique sur les objets pour chercher tes devoirs !",
        ]);

////////////////////////////////SAC//////////////////////

const sac = add([
    sprite('sac', {
        frame: 1}),
    pos(230,235),
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
    //loquace.clear(); // ← efface le message loquace
});

sac.onClick(() => {if(début >= 3){
    etat.retardMaison += 1;
    console.log(etat.retardMaison);
    sac.destroy();
    loquace.vn("Ca aurait été trop simple...");}
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
    // loquace.clear()
})

box.onClick(()=>{if(début >= 3){
    etat.retardMaison += 1;
    console.log(etat.retardMaison);
    loquace.vn('Elle est trop petite pour y mettre ses devoirs...');
    box.destroy();}
})

//////////////////////Feuille///////////////////
const feuille = add([
    sprite('feuille',  {
    frame: 1}
    ),
    pos(640,390),
    area(),
    "cligno"
// dans les options d'aréa, on peut mettre une shape pour que cela ne soit pas la taille
]);

feuille.onHover(() =>{if(début >= 3){
    feuille.play("cligno")
    loquace.vn("feuilles")};
});

feuille.onHoverEnd(() =>{    
    feuille.stop()
    feuille.frame = 1
    // loquace.clear()
})

feuille.onClick(()=>{if(début >= 3){
    etat.retardMaison += 1;
    console.log(etat.retardMaison);
    loquace.vn('Je devrais jeter mes brouillons');
    feuille.destroy();}
})
//////////////////////Jean///////////////////
const jean = add([
    sprite('jean',  {
    frame: 1}
    ),
    pos(13,365),
    area(),
    "cligno"
// dans les options d'aréa, on peut mettre une shape pour que cela ne soit pas la taille
]);

jean.onHover(() =>{if(début >= 3){
    jean.play("cligno")
    loquace.vn("jean")};
});

jean.onHoverEnd(() =>{    
    jean.stop()
    jean.frame = 1
    // loquace.clear()
})

jean.onClick(()=>{if(début >= 3){
    etat.retardMaison += 1;
    console.log(etat.retardMaison);
    loquace.vn('je devrais mettre mes habits sales à laver');
    jean.destroy();}
})

//////////////////////Oreiller///////////////////
const oreiller = add([
    sprite('oreiller',  {
    frame: 1}
    ),
    pos(680,100),
    area(),
    "cligno"
// dans les options d'aréa, on peut mettre une shape pour que cela ne soit pas la taille
]);

oreiller.onHover(() =>{if(début >= 3){
    oreiller.play("cligno")
    loquace.vn("oreiller")};
});

oreiller.onHoverEnd(() =>{    
    oreiller.stop()
    oreiller.frame = 1
    // loquace.clear()
})

oreiller.onClick(()=>{if(début >= 3){
    etat.retardMaison += 1;
    console.log(etat.retardMaison);
    loquace.vn("Mes fiches d'allemend ! Je les avais perdu");
    oreiller.destroy();}
})

//////////////////////Pull///////////////////
const pull = add([
    sprite('pull',  {
    frame: 1}
    ),
    pos(100 ,105),
    area(),
    "cligno"
// dans les options d'aréa, on peut mettre une shape pour que cela ne soit pas la taille
]);

pull.onHover(() =>{if(début >= 3){
    pull.play("cligno")
    loquace.vn("pull")};
});

pull.onHoverEnd(() =>{    
    pull.stop()
    pull.frame = 1
    // loquace.clear()
})

pull.onClick(()=>{if(début >= 3){
    etat.retardMaison += 1;
    console.log(etat.retardMaison);
    loquace.vn("juste quelques miettes dans les poches...");
    pull.destroy();}
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
    //  loquace.clear() <= fait disparaitre les bulles de dialogues aussi....
})

devoir.onClick(()=>{if(début >= 3){
    destroy(box) // marche pas quand je met les deux en un??
    destroy(sac)
    destroy(feuille)
    destroy(jean)
    destroy(oreiller)
    destroy(pull)
    etat.retardMaison += 1,
    console.log(etat.retardMaison)
    devoir.play("trouvé")
    loquace.script(["Yeah! J'avais oublié que j'avais ''rangé'' mon bureau hier",
        "Vite, faut que j'ai prendre le bus !",
        "bus"
    ])
loquace.registerCommand('bus', () => {
go('bus')})

    }
    })
    });

};


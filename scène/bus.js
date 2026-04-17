import { etat } from "/scène/retard.js";

export{
    init
}

function init() {
    scene('bus', () => {

    add([
        sprite('bus'),
    ]);

    loquace.registerCommand('jeu', () => {
        créerPensée()
    });

loquace.registerCommand('goecole', () => {
    go('ecole')});

    onButtonPress("space",()=> {loquace.next()})
  
    if(etat.retardMaison < 2){
        loquace.script(["j Pour une fois, j'ai pas eu besoin de courir pour prendre le bus !",
                        "j C'est bon j'ai le temps avant mon arrêt",
                        "j mais il ne faut pas que je me fasse distraire !",
                        "m clique sur les pensées intrusive pour les faire disparaitre !",
                        "jeu"
        ])
    }else if(etat.retardMaison == 2){
        loquace.script(["j Ouf j'ai failli raté le bus!",
                        "j C'est bon j'ai le temps avant mon arrêt",
                        "j mais il ne faut pas que je me fasse distraire !",
                        "m clique sur les pensées intrusive pour les faire disparaitre !",
                        "jeu"
        ])
    }else if(etat.retardMaison > 2){
    loquace.script(["j aie aie aie, j'ai du prendre le bus d'après. Je vais être en retard....",
                    "j C'est bon j'ai le temps avant mon arrêt",
                    "j mais il ne faut pas que je me fasse distraire !",
                    "m clique sur les pensées intrusive pour les faire disparaitre !",
                    "jeu"
    ])
    } 



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



let NPensée = 0
let score = 0;
let scoreFinal = 0

function jpp(){


    if(scoreFinal <= 5000){
        loquace.script(["Ha ! C'est mon arrêt !",
                "goecole"
        ])

    }else{

    const BulleRouge = add([ //Marche pas ????
        sprite('bubble', {
            frame :0 }
        ),
        pos(200,180),
        area(),
    ])
       const auSecour = add([
            text("HO NON J'AI RATE MON ARRET"),
            color(BLACK),
            anchor('topleft'), // si je met anchor center c'est pire...
            pos(BulleRouge.pos), 
         ])

    BulleRouge.onClick(() => {
            go('ecole');
        })
    }
}


function créerPensée(){
    if(NPensée >= Pensée.length){return jpp()}

    const BulleVerte = add([
        sprite('BVerte'),
        pos(rand(0, 700), rand(0, 420)),
        scale(2),
        area(),
        opacity(1),
    ]); 

    const penséeInt = add([
            text(Pensée[NPensée], { size: 16, width: 250 }),
            color(BLACK),
            anchor('topleft'), // si je met anchor center c'est pire...
            pos(BulleVerte.pos), 

    ]);

    BulleVerte.fadeIn(1);

    NPensée++;

    onUpdate(() => {
        score++;
    });

    BulleVerte.onClick(() => {
        destroy(BulleVerte);
        destroy(penséeInt);
        scoreFinal = score;
        console.log(scoreFinal);
                etat.retardBus = scoreFinal;
        wait(0.5, () => créerPensée()); // prochaine bulle après 1 seconde
    });
}



////////////////////////curseur///////////////////
const cursor = add([
    sprite("cursor"), // sprite
    pos(455,300),
    area(),
    "clickable"   
]);

onUpdate(() => {

    cursor.pos = mousePos();
});

})
}
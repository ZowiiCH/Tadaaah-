import { etat } from "/scène/retard.js";

export{
    init
}

function init() {
    scene('bus2', () => {

    add([
        sprite('bus2'),
    ]);

    loquace.registerCommand('jeu', () => {
        créerPensée()
    });

    loquace.registerCommand('ecole2', () => {
    go('ecole2')});

    onButtonPress("space",()=> {loquace.next()})

    loquace.script(["j Je n'ai pratiquement plus raté le bus depuis un mois",
                    "j J'ai moins peur qu'avant d'être en retard",
                    "m clique sur les pensées intrusive pour les faire disparaitre !",
                    "jeu"       
    ])



//////////////////////////Bulle///////////////////

let Pensée = ["C'est vrai que je perd moins mes affaires",
    "Jasmine m'a dit que je faisais moins de bruit en classe.",
    "Mais, elle m'a dit que je faisais moins de blagues...",
    "ha, il me reste trois arrêts",
    "Lucas m'a dit que les histoires que j'inventais lui manques",
    "C'est vrai que j'ai moins d'idée qui me viennent en tête",
    "c'est plus silencieux, mais plus ennuyant aussi....",
];

let NPensée = 0

function créerPensée(){
    if(NPensée >= Pensée.length){return loquace.script([
        "j C'est mon arrêt!",
        "j Yes! Encore un jour sans arrivée tardive ! ",
        "ecole2"
]) }

    const BulleVerte = add([
        sprite('BVerte'),
        pos(rand(150, 700), rand(80, 420)),
        anchor("center"),
        scale(2),
        area(),
        opacity(1),
    ]); 

    const penséeInt = add([
            text(Pensée[NPensée], { size: 16, width: 200 }),
            color(BLACK),
            anchor('center'), // si je met anchor center c'est pire...
            pos(BulleVerte.pos), 

    ]);

    BulleVerte.fadeIn(1);

    NPensée++;


    BulleVerte.onClick(() => {
        destroy(BulleVerte);
        destroy(penséeInt);

        wait(0.5, () => créerPensée()); // prochaine bulle après 1 seconde
    });
}
})
}
import { etat } from "/scène/retard.js";

export{
    init
}


function init(){
    scene('ecole2', () => {

    add([
        sprite('ecole'),
    ]);

    onButtonPress("space",()=> {loquace.next( )});

    loquace.script([
        "e Mais bonjour ! C'est la seconde semaine, sans arrivée tardive.",
        "e vous avez même vos devoirs avec,  félicitation !",
        "j Merci Monsieur.",
        "e J'ai remarqué que vous coupiez moins la parole maintenant",
        "e mais, vous participez moins de manière générale.",
        "j Oui, c'est vrai, je sais pas trop pourquoi Monsieur, mais je vous écoutes. Promis !",
        "e Je n'ai pas de doute la dessus. Vous avez souvent de bonne idée, il faut osez les dire",
        "e Allez c'est l'heure, le cours commence.",
        "travail2"
    ]);


    })

loquace.registerCommand('travail2', () => {
    barreConcentration2()
});


function barreConcentration2(){

    let concentration = 50; // commence au milieu
    let maxConcentration = 100;
    let actif = true;
    let difficulté = 0;
    let tombe = -20

    // Zones
    const ZONE_HYPERFOCUS = 95;    // au dessus = hyperfocalisé

    // Vitesse de chute
    let vitessChute = -40;
  
    // ── Fond de la barre ──
    const barFond = add([
        rect(500, 30),
        pos(50, 500),
        color(rgb(50, 50, 50)),
        z(1),
        "barreConcentration"
    ]);

    // Zone normale (verte, milieu)
    barFond.add([
        rect(490, 30),
        pos(0, 0),
        color(GREEN),
        z(2),
    ]);

    // Zone hyperfocus (orange, à droite)
    barFond.add([
        rect(30, 30),
        pos(480, 0),
        color(RED),
        z(2),
    ]);

    // ── Curseur ──
    const curseur = add([
        rect(10, 30),
        pos(50 + (concentration / maxConcentration) * 500, 515),
        color(WHITE),
        z(10),
        anchor("center"),
        "barreConcentration"
    ]);

    // ── Labels ──
    const labelEtat = add([
        text("Concentré", { size: 16 }),
        pos(350, 550),
        color(WHITE),
        z(10),
        "barreConcentration"
    ]);

    // ── Espace = boost de concentration ──
    onKeyPress("c", () => {
        if (!actif) return;
        difficulté -= -15;
        concentration = tombe + difficulté; // chaque appui monte la barre
    });

    onUpdate(() => {
        if (!actif) return;
 
        // La barre descend naturellement
        concentration -= vitessChute * dt();

        // Limites
        concentration = Math.max(0, Math.min(maxConcentration, concentration));

        // Mise à jour visuelle du curseur
        curseur.pos.x = 50 + (concentration / maxConcentration) * 500;

        // Etat du joueur selon la zone
        if(concentration > ZONE_HYPERFOCUS) {
            labelEtat.color = YELLOW;
            etat.hyperfocal ++;
            actif = false;
            get("barreConcentration").forEach(o => destroy(o))
            loquace.start(`hyp${etat.hyperfocal}`)
        } else {
            labelEtat.text = "Concentré";
            labelEtat.color = GREEN;
        }
    });

loquace.registerCommand('psy2', () => {
go('psy2')})

        
        loquace.script({
            'hyp1':[
                    "po C'est cool que tu te fasse moins grondé",
                    "po mais, on rigole beaucoup moins à l'école depuis que tu fais moins de blagues",
                    "j Oui, je sais je trouve aussi que je rigole moins...",
                    "travail2"
                ],
            'hyp2':[
                "po Tiens ça t'arrives encores des fois des te balcer sur ta chaise !",
                "j Oui, ça m'arrive encore de ne plus me rendre compte de ce qui se passe...",
                "travail2"
            ],
            'hyp3':[
                "e Cela fait trois fois que je vous apelle.",
                "j Je suis désolé j'étais trop concentré sur le devoir.",
                "e Je comprends, mais il faut quand même resté à l'écoutes de ce qui se passe.",
                "e le cours est fini, vous pouvez me rendre ce que vous avez fait.",
                "j Oups, je n'ai pas vu l'heure, faudra quand j'en parle à mon rendez-vous pour parler du médicament.",
                "j On va faire le point aujourd'hui !",
                "psy2"
            ]
        }   );



}}
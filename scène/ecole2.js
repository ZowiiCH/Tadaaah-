import { etat } from "/scène/retard.js";

export{
    init
}


function init(){
    scene('ecole2', () => {

    add([
        sprite('ecole2'),
    ]);

    onButtonPress("space",()=> {loquace.next( )});

    loquace.script([
        "e Bonjour ! Seconde semaine, sans arrivée tardive.",
        "e vous avez même vos devoirs,  félicitation !",
        "j Merci Madame.",
        "e Vous coupiez moins la parole maintenant",
        "e mais, vous participez moins en cours.",
        "j Oui, c'est vrai, je sais pas trop pourquoi Madame, mais je vous écoutes. Promis !",
        "e Je n'en doute pas. Vous avez souvent de bonne idée, il faut osez les dire.",
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
                    "po mais, on rigole plus trop depuis que tu fais moins de blagues",
                    "travail2"
                ],
            'hyp2':[
                "po Tiens ça t'arrives encores des fois des te balancer sur ta chaise !",
                "j Oui, je ne suis plus distrait, mais des fois j'ai mal à la tête,",
                "j est ce que je me concentre trop?",
                "travail2"
            ],
            'hyp3':[
                "e Cela fait trois fois que je vous apelle.",
                "j Je suis désolé, je vous ai pas entendu.",
                "e Le cours est fini, vous pouvez me rendre ce que vous avez fait.",
                "j Oups, je n'ai pas vu l'heure, j'en parlerais à ma psy!",
                "j On va faire le point aujourd'hui.",
                "psy2"
            ]
        }   );



}}
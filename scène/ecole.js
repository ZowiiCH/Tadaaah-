import { etat } from "/scène/retard.js";

export{
    init
}


function init(){
        scene('ecole', () => {

        add([
            sprite('ecole'),
        ]);

        let début = 0
        console.log(etat.retardMaison, etat.retardBus);

        if(etat.retardMaison >= 3 && etat.retardBus >=5000){
            onButtonPress("space",()=> {loquace.next( ), début++, console.log(début)});
            loquace.script([
                "e Bonjour, j'ai l'habitude que vous soyez en retard, mais aujourd'hui c'est un reccord",
                "j Bonjour, je suis désolé....",
                "e il va me falloir votre agenda, pour un tel retard, c'est malheureusement une heure d'arrêt.",
                "j Mes parents vont me buté",
                "e Bien, tout le monde à sa table, nous allons commencé le cours",
            ]);
            wait(10, () => {
                loquace.pop("appuie sur espace pour rester concentré !")
                barreConcentration();
            });
        }else if(etat.retardMaison >= 3 && etat.retardBus < 5000 ||etat.retardMaison < 3 && etat.retardBus > 5000){         
            onButtonPress("space",()=> {loquace.next( ), début++, console.log(début)});
            loquace.script([
                "e Bonjour ! encore une arrivée tardive, c'est déjà la deuxième.",
                "j Bonjour, je suis désolé....",
                "e C'est le dernier avertissement, la prochaine fois ce sera l'heure d'arrêt.",
                "j ouf, je l'ai échapé belle, mais je peux plus faire d'erreur....",
                "e Bien, tout le monde à sa table, nous allons commencé le cours",
            ]);
            wait(10, () => {
                loquace.pop("appuie sur espace pour rester concentré !")
                barreConcentration();
            });
        }else{
            onButtonPress("space",()=> {loquace.next( ), début++, console.log(début)});
            loquace.script([
                "e Bonjour ! Cela fait plaisir de vous voir à l'heure.",
                "j Bonjour, merci Monsieur ! J'essaie vraiment de faire des efforts.",
                "e Oui et cela se voit. Continuez ainsi !",
                "j J'ai commencé à bien utilisé mon réveil et mon timer, je suis moins souvent en retard.",
                "e Bien, tout le monde à sa table, nous allons commencé le cours",
            ]);
            wait(10, () => {
                loquace.pop("appuie sur espace pour rester concentré !")
                barreConcentration();
            });
        }


    })



function barreConcentration() {
    
    let concentration = 50; // commence au milieu
    let maxConcentration = 100;
    let actif = true;

    // Zones
    const ZONE_DISTRACTION = 30;   // en dessous = distrait
    const ZONE_HYPERFOCUS = 70;    // au dessus = hyperfocalisé

    // Vitesse de chute qui varie aléatoirement
    let vitessChute = 15;
    let tempsProchainChangement = 0;

    // ── Fond de la barre ──
    const barFond = add([
        rect(500, 30),
        pos(50, 500),
        color(rgb(50, 50, 50)),
        z(1),
        "barreConcentration"
    ]);

    // Zone distraction (rouge, à gauche)
    barFond.add([
        rect(155, 30),
        pos(0, 0),
        color(RED),
        z(2),
    ]);

    // Zone normale (verte, milieu)
    barFond.add([
        rect(250, 30),
        pos(145, 0),
        color(GREEN),
        z(2),
    ]);

    // Zone hyperfocus (orange, à droite)
    barFond.add([
        rect(165, 30),
        pos(345, 0),
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
    onKeyPress("space", () => {
        if (!actif) return;
        concentration += 18; // chaque appui monte la barre
    });

    onUpdate(() => {
        if (!actif) return;
        // Changer la vitesse de chute aléatoirement toutes les X secondes
        tempsProchainChangement -= dt();
        if (tempsProchainChangement <= 0) {
            vitessChute = rand(1, 30); // vitesse aléatoire entre 5 et 20
            tempsProchainChangement = rand(1, 3); // change toutes les 1 à 3 secondes
            console.log("Nouvelle vitesse de chute :", vitessChute.toFixed(1));
        }

        // La barre descend naturellement
        concentration -= vitessChute * dt();

        // Limites
        concentration = Math.max(0, Math.min(maxConcentration, concentration));

        // Mise à jour visuelle du curseur
        curseur.pos.x = 50 + (concentration / maxConcentration) * 500;

        // Etat du joueur selon la zone
        if (concentration < ZONE_DISTRACTION) {
            labelEtat.text = "Distrait...";
            labelEtat.color = RED;
        } else if (concentration > ZONE_HYPERFOCUS) {
            labelEtat.text = "Hyperfocalisé !";
            labelEtat.color = YELLOW;
        } else {
            labelEtat.text = "Concentré";
            labelEtat.color = GREEN;
        }
    });

    // Retourne une fonction pour arrêter la barre depuis l'extérieur
    return {
        stop: () => {
            actif = false;
            get("barreConcentration").forEach(o => destroy(o));
        },
        getEtat: () => {
            if (concentration < ZONE_DISTRACTION) return "distrait";
            if (concentration > ZONE_HYPERFOCUS) return "hyperfocus";
            return "concentré";
        }
    };
}

barreConcentration();


}
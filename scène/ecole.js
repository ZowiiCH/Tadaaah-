import { etat } from "/scène/retard.js";

export{
    init
}


function init(){
        scene('ecole', () => {

        add([
            sprite('ecole'),
        ]);

        console.log(etat.retardMaison, etat.retardBus);

        if(etat.retardMaison >= 3 && etat.retardBus >=5000){
            onButtonPress("space",()=> {loquace.next( )});
            loquace.script([
                "e Bonjour, j'ai l'habitude que vous soyez en retard, mais aujourd'hui c'est un reccord",
                "j Bonjour, je suis désolé....",
                "e il va me falloir votre agenda, pour un tel retard, c'est malheureusement une heure d'arrêt.",
                "j Mes parents vont me buté",
                "e Bien, tout le monde à sa table, nous allons commencé le cours",
                "m appuie sur espace pour rester concontré! ",
                "travail"
            ]);

        }else if(etat.retardMaison >= 3 && etat.retardBus < 5000 ||etat.retardMaison < 3 && etat.retardBus > 5000){         
            onButtonPress("space",()=> {loquace.next( )});
            loquace.script([
                "e Bonjour ! encore une arrivée tardive, c'est déjà la deuxième.",
                "j Bonjour, je suis désolé....",
                "e C'est le dernier avertissement, la prochaine fois ce sera l'heure d'arrêt.",
                "j ouf, je l'ai échapé belle, mais je peux plus faire d'erreur....",
                "e Bien, tout le monde à sa table, nous allons commencé le cours",
                "m appuie sur espace pour rester concontré! ",
                "travail"
            ]);

        }else{
            onButtonPress("space",()=> {loquace.next( )});
            loquace.script([
                "e Bonjour ! Cela fait plaisir de vous voir à l'heure.",
                "j Bonjour, merci Monsieur ! J'essaie vraiment de faire des efforts.",
                "e Oui et cela se voit. Continuez ainsi !",
                "j J'ai commencé à bien utilisé mon réveil et mon timer, je suis moins souvent en retard.",
                "e Bien, tout le monde à sa table, nous allons commencé le cours",
                "m appuie sur la touche 'C' pour rester concontré!",
                "travail"
            ]);

        }

    })

loquace.registerCommand('travail', () => {
    barreConcentration()
});

    


function barreConcentration(){

    let concentration = 50; // commence au milieu
    let maxConcentration = 100;
    let actif = true;

    // Zones
    const ZONE_DISTRACTION = 30;   // en dessous = distrait
    const ZONE_HYPERFOCUS = 70;    // au dessus = hyperfocalisé

    // Vitesse de chute qui varie aléatoirement
    let vitessChute = 30;
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
    onKeyPress("c", () => {
        if (!actif) return;
        concentration += 20; // chaque appui monte la barre
    });

    onUpdate(() => {
        if (!actif) return;
        // Changer la vitesse de chute aléatoirement toutes les X secondes
        tempsProchainChangement -= dt();
        if (tempsProchainChangement <= 0) {
            vitessChute = rand(5, 50); // vitesse aléatoire entre 5 et 20
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
            labelEtat.color = RED;
            etat.distrait ++;
            actif = false;
            get("barreConcentration").forEach(o => destroy(o))
            loquace.start(`distrait${etat.distrait}`)          
        } else if (concentration > ZONE_HYPERFOCUS) {
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

loquace.registerCommand('psy', () => {
go('psy')})

        
        loquace.script({
            'distrait1':[
                    "Cui, cui, cui",
                    "j je me demande qu'elle sorte d'oiseau c'est",
                    "po mhm?",
                    "travail"
            ],
            'distrait2':[
                "Hey! Passe moi la balle ! C'est à mon tours de jouer !",
                "j Hey Jasmine, on jour à la balle au prisionnier après?",
                "po shuuut, j'essaie de travailler....on regarde à la récré!",
                    "travail"
            ],
            'distrait3':[
                "j pff... j'aimerais bien travaillé mais il y'a vraiment trop de bruit aujourd'hui",
                "e Bon, c'est la troisième fois que je vous vois distraire vous camarades, amenez moi votre carnet",
                "j Cela me fatigue, pourant j'essaie....",
                "j j'ai rendez-vous avec la psy après l'école, j'espère qu'elle pourra m'aider",
                "psy"
            ],
            'hyp1':[
                    "e Pour le devoir....",
                    "j Mince, j'ai pas écouté la consigne, j'étais déjà entrain de faire le travail...",
                    "travail"
                ],
            'hyp2':[
                "e Pour la question numéro 2, qui connait la R..",
                "j Ce sont les Koala ! ",
                "e Juste, mais vous m'avez coupé la parole et oublié de levez la main, donc je ne vous l'accord pas",
                "j Mince, des fois j'arrive pas à m'empêcher de parler....",
                "travail"
            ],
            'hyp3':[
                "po Hey, tu es à nouveau entrain de faire tramblé toute la table avec ta jambe!",
                "e On n'entend que vous dans la classe, entre le clique du stylo et la jambe qui tremble...",
                "j Je suis désolé, quand je me concentre, je me rend plus compte de rien des fois...",
                "e C'est bien de se concentré, mais pas au dépend de déranger le reste de la classe ! ",
                "e Amenez moi votre carnet",
                "j Cela me fatigue d'essayé de bien faire...",
                "j j'ai rendez-vous avec la psy après l'école, j'espère qu'elle pourra m'aider",
                "psy"
            ]
        }   );



}}
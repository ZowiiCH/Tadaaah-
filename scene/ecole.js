import { etat } from "./retard.js";

export{
    init
}


function init(){
    scene('ecole', () => {

        add([
            sprite('ecole'),
        ]);

        const music = play("musicEcole",{
            volume: 0.5, 
            speed: 1, 
            loop: true,
        });

        console.log(etat.retardMaison, etat.retardBus);

        loquace.registerCommand('psy', () => {
            go('psy'),
            music.stop() // Marche pas !
        });

        loquace.registerCommand('travail', () => {
            barreConcentration();
            music.stop("ecole");
        });

        ////////////////// Dialogues différenciers suivant le retard //////////////
        if(etat.retardMaison >= 6 && etat.retardBus >=10000){
            onButtonPress("space",()=> {
                loquace.next( )
            });
            loquace.script([
                "e Bonjour, c'est un record pour un retard.",
                "j Bonjour, désolé....",
                "e il va me falloir votre agenda, c'est une heure d'arrêt.",
                "j Mes parents vont me tuer...",
                "m Le cours a commencé, appuies sur 'C' pour rester te concentrer !",
                "travail"
            ]);
        }else if(etat.retardMaison >= 6 && etat.retardBus < 10000 ||etat.retardMaison < 3 && etat.retardBus > 10000){         
            onButtonPress("space",()=> {
                loquace.next( )
            });
            loquace.script([
                "e Bonjour ! Encore une arrivée tardive.",
                "j Bonjour, désolé....",
                "e C'est le dernier avertissement, la prochaine fois c'est l'heure d'arrêt.",
                "j ouf, je l'ai échappé belle, mais je peux plus faire d'erreur....",
                "m Le cours a commencé, appuies sur 'C' pour rester te concentrer ! ",
                "travail"
            ]);
        }else{
            onButtonPress("space",()=> {
                loquace.next( )
            });
            loquace.script([
                "e Bonjour ! Cela fait plaisir de vous voir à l'heure.",
                "j Bonjour, merci Monsieur ! J'essaie vraiment de faire des efforts.",
                "e Oui et cela se voit. Continuez ainsi !",
                "j J'ai commencé à bien utiliser mon réveil et mon timer.",
                "m Le cours a commencé, appuies sur 'C' pour rester te concentrer !",
                "travail"
            ]);
        }

    })

    let musicActif = false



    //___________________ jeu de concentration
    function barreConcentration(){ 

        if(musicActif == false){
            const music = play("ecoleJeu",{
                volume: 0.5, 
                speed: 1.5, 
                loop: true,
            });
            musicActif = true

            onSceneLeave(() => {
                music.stop()
            })
        }

        let concentration = 50; // commence au milieu
        let maxConcentration = 100;
        let actif = true;

        // Zones
        const ZONE_DISTRACTION = 30;   // en dessous = distrait
        const ZONE_HYPERFOCUS = 70;    // au dessus = hyperfocalisé

        // Vitesse de chute qui varie aléatoirement
        let vitessChute = 30;
        let tempsProchainChangement = 0;

        /////// design Bar
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

        // Zone hyperfocus (rouge à droite)
        barFond.add([
        rect(165, 30),
        pos(345, 0),
        color(RED),
        z(2),
        ]);

        const curseur = add([
        rect(10, 30),
        pos(50 + (concentration / maxConcentration) * 500, 515),
        color(WHITE),
        z(10),
        anchor("center"),
        "barreConcentration"
        ]);

        const labelEtat = add([
        text("Concentré", { size: 16 }),
        pos(350, 550),
        color(WHITE),
        z(10),
        "barreConcentration"
        ]);

        // action de concentration
        onKeyPress("c", () => {
            if (!actif) return;
            concentration += 20; // à adapté suivant la difficulté
        });

        onUpdate(() => {
            if (!actif) return;
            tempsProchainChangement -= dt();// Changer la vitesse de chute aléatoirement (aidez par Claude.IA pour dt())
            if(tempsProchainChangement <= 0){
                vitessChute = rand(5, 50); // à adapté suivant la difficulté
                tempsProchainChangement = rand(1, 3); 
                console.log("Nouvelle vitesse de chute :", vitessChute.toFixed(1));
            }

            concentration -= vitessChute * dt();

            concentration = Math.max(0, Math.min(maxConcentration, concentration));

            curseur.pos.x = 50 + (concentration / maxConcentration) * 500; // 

            if (concentration < ZONE_DISTRACTION) {
                etat.distrait ++;
                actif = false;
                get("barreConcentration").forEach(o => destroy(o))
                loquace.start(`distrait${etat.distrait}`)          
            } else if (concentration > ZONE_HYPERFOCUS) {
                etat.hyperfocal ++;
                actif = false;
                get("barreConcentration").forEach(o => destroy(o))
                loquace.start(`hyp${etat.hyperfocal}`)
            } else {
                labelEtat.text = "Concentré";
                labelEtat.color = GREEN;
            }
        });


        loquace.script({
            'distrait1':[
                "Cui, cui, cui !",
                "j Je me demande quelle sorte d'oiseau c'est.",
                "po mhm?",
                "u 'C'oncentres toi !",
                "travail"
            ],
            'distrait2':[
                "Hey! Passes moi la balle ! C'est à mon tours de jouer !",
                "j Hey Jasmine, on joue à la balle aux prisionniers après?",
                "po shuuut, j'essaie de travailler....on regarde à la récré!",
                "u 'C'oncentres toi !",
                "travail"
            ],
            'distrait3':[
                "j pff... il y'a vraiment trop de bruit aujourd'hui.",
                "e C'est la troisième fois que vous distrayez vous camarades, amenez-moi votre carnet.",
                "j Pourant j'essaie de travailler...",
                "j J'ai rendez-vous avec la psy après l'école, j'espère qu'elle pourra m'aider.",
                "psy"
            ],
            'hyp1':[
                "e Pour le devoir....",
                "j J'ai pas écouté la consigne avant de commencer...",
                "u 'C'oncentres toi !",
                "travail"
                ],
            'hyp2':[
                "e Pour la question numéro 2, qui connait la R..",
                "j Ce sont les Koala ! ",
                "e Juste,mais levez la main avant de prendre la parole.",
                "j Mince, des fois j'arrive pas à m'empêcher de parler....",
                "u 'C'oncentres toi !",
                "travail"
            ],
            'hyp3':[
                "po Hey, tu fais trambler toute la table avec ta jambe!",
                "e On n'entend que vous, au fond de la classe!",
                "j Pardon, j'étais concentré, je me rendais pas compte...",
                "e Il faut rester calme pour travailler, amenez-moi votre carnet.",
                "j j'ai rendez-vous avec la psy après l'école, j'espère qu'elle pourra m'aider.",
                "psy"
            ]
        });
    };
};
import { etat } from "./retard.js";

export{
    init
}


function init(){
    scene('ecole2', () => {

        add([
            sprite('ecole2'),
        ]);

        const music = play("musicEcole",{
            volume: 0.5, 
            speed: 1, 
            loop: true,
        });

        onSceneLeave(() => {
            music.stop()
        });
        onButtonPress("space",()=> {
            loquace.next( )
        });

        loquace.script([
            "e Bonjour ! Encore une journée sans arrivée tardive.",
            "e vous avez aussi fait tous vos devoirs, bravo !",
            "j Merci Madame.",
            "e Vous coupez moins la parole",
            "e mais, vous participez moins en classe.",
            "j Oui, c'est vrai...mais, je vous écoutes! Promis !",
            "e Je vous crois. Vous avez souvent de bonne idée, osez les dire!",
            "e Allez c'est l'heure, le cours commence.",
            "u 'C'oncentres toi !",
            "travail2"
        ]);

        loquace.registerCommand('travail2', () => {
            barreConcentration2(),
            music.stop()
        });
    })



    let musicActif = false

    function barreConcentration2(){

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

        let concentration = 50; 
        let maxConcentration = 100;
        let actif = true;
        let difficulté = 0;
        let tombe = -20

        // Zones
        const ZONE_HYPERFOCUS = 95;   

        // Vitesse de chute
        let vitessChute = -40;
    
        //_______bar____
        const barFond = add([
            rect(500, 30),
            pos(50, 500),
            color(rgb(50, 50, 50)),
            z(1),
            "barreConcentration"
        ]);

        // Zone concentré
        barFond.add([
            rect(490, 30),
            pos(0, 0),
            color(GREEN),
            z(2),
        ]);

        // Zone hyperfocus ( une zone ici)
        barFond.add([
            rect(30, 30),
            pos(480, 0),
            color(RED),
            z(2),
        ]);

        // Curseur
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

        //  touche de concentration
        onKeyPress("c", () => {
            if (!actif) return;
            difficulté -= -15;
            concentration = tombe + difficulté; // chaque appui monte la barre
            // oblige le joueur à finir hyperfocus + il appuie
        });

        onUpdate(() => {
            if (!actif) return;
    
            concentration -= vitessChute * dt();

            concentration = Math.max(0, Math.min(maxConcentration, concentration));

            curseur.pos.x = 50 + (concentration / maxConcentration) * 500;

            if(concentration >= ZONE_HYPERFOCUS) {
                etat.hyperfocal ++;
                actif = false;
                get("barreConcentration").forEach(o => destroy(o));
                loquace.start(`hyp${etat.hyperfocal}`)
            } else {
                labelEtat.text = "Concentré";
                labelEtat.color = GREEN;
            }
    });

    loquace.registerCommand('psy2', () => {
        go('psy2')
    })

        
    loquace.script({
        'hyp1':[
                "po C'est cool que tu te fasses moins grondé.",
                "po mais, on rigole plus trop depuis que tu fais moins de blagues.",
                "j C'est vrai, ça me manques aussi !",
                "u 'C'oncentres toi !",
                "travail2"
            ],
        'hyp2':[
            "po Il t'arrives encores des te balancer sur ta chaise !",
            "j Oui, je ne suis plus distrait, mais des fois j'ai mal à la tête,",
            "j est-ce que je me concentre trop?",
            "u 'C'oncentres toi !",
            "travail2"
        ],
        'hyp3':[
            "e Cela fait trois fois que je vous apelle.",
            "j Je suis désolé, je vous ai pas entendu.",
            "e Le cours est fini, rendez-moi ce que vous avez fait.",
            "j Oups, je n'ai pas vu l'heure, j'en parlerais à ma psy!",
            "j On va faire le point aujourd'hui.",
            "psy2"
        ]
    });
}};
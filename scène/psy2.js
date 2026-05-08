import { etat } from "/scène/retard.js";

export{
    init
}

function init(){
    scene('psy2', () => {

        add([
            sprite('psy2'),
        ]);

        const music = play("musicPsy2",{
            volume: 0.5, 
            speed: 1, 
            loop: true,
        });

        onSceneLeave(() => {
            music.stop()
        });

        const self = add([
            sprite('self', {
                frame: 26}
            ),
            pos(167 ,90),
            area(),
        ]);

        loquace.registerCommand('fin', () => {
            go('fin')
        })

        let spriteSelf = 0

        onButtonPress("space",()=> {
            loquace.next( ), 
            spriteSelf++, 
            self.frame = spriteSelf
        });

        loquace.script([
            "p Bonjour ! Nous allons faire le point sur la médication.", //1
            "j J'avais hâte de pouvoir en parler avec vous!",
            "p Expliques-moi ce qui t'arrives.",
            "j bah...ça va mieux avec mes parents et à l'école...",
            "j j'arrive à ranger ma chambre, faire mes devoirs et je rate presque plus le bus!", // 5
            "p C'est génial, mais j'ai l'impression qu'il y'a autre chose...",
            "p Tous n'est pas obligé d'être positif tu sais?",
            "j ...c'est vrai....,j'ai l'impression que j'ai changé.",
            "p Comment cela?",
            "j Bah...mes copains disent que je fais moins de blagues.", //10
            "j J'avais toujours pleins d'histoire, des musiques, qui arrivaient dans ma tête.",
            "j J'en ai plus, ma tête est plus calme, mais cela me manque.",
            "p C'est une des conséquances du médicaments, cela calme le trouble.",
            "p Le TDAH est aussi le moteurs de pleins de choses positives !",
            "j A l'école, cela m'arrive d'être 'trop' concentré.", //15
            "j Des fois, j'ai mal à la tête et j'ai l'impression d'étouffer un peu...",
            "p Cela veux dire que le traitement n'ai pas adapté, on va le changer.",    
            "p Un médicament n'est pas une baguette magique,",
            "p il est important de mettre des stratégies en place pour aller mieux.",
            "p Il y'a des personnes tadah qui ne prennent pas de médicament,", //20
            "p c'est possible lorsque tu as bien mis en place des outils!",
            "j Oui, c'est vrai. Pendant les week-end et les vacances,",
            "j je prends pas de traitement, je vais bien grâce aux outils!",
            "j et mes copains sont toujours contents de me retrouver, avec ou sans médicament!",
            "j ils savent maintent, que je fais pas exprès.", //25
            "fin"
        ]);
    });
};
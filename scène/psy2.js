import { etat } from "/scène/retard.js";

export{
    init
}

function init(){
    scene('psy2', () => {

        add([
            sprite('psy2'),
        ]);

const self = add([
    sprite('self',  {
    frame: 26}
    ),
    pos(167 ,90),
    area(),
]);

loquace.registerCommand('fin', () => {
go('fin')})

let spriteSelf = 0

        onButtonPress("space",()=> {
            loquace.next( ), 
            spriteSelf++, 
            self.frame = spriteSelf
        });

        loquace.script([
        "p Bonjour ! Nous allons faire le point sur la médication.", //1
        "j Bonjour, j'avais hâte de pouvoir en parler avec vous!",
        "p Expliques-moi ce qui t'arrives.",
        "j bah...ça va beaucoup mieux avec mes parents et à l'école...",
        "j je range mieux ma chambre, je fais mes devoirs et je rate presque plus le bus!", // 5
        "p C'est génial tous ça, mais j'ai l'impression qu'il y'a autre chose...",
        "p Tous n'est pas obligé d'être positif tu sais?",
        "j ...c'est vrai....,j'ai l'impression que j'ai changé",
        "p Comment cela?",
        "j bah...mes copains disent que je fais moins de blague", //10
        "j J'avais toujours pleins d'histoire, des fois des musiques, qui arrivaient dans ma tête.",
        "j J'en ai plus trop, ma tête est plus calme, mais des fois cela me manque.",
        "p Oui, c'est une des conséquances du médicaments, cela calme l'hyperactivité.",
        "p L'hyperactivitée, c'est aussi le moteurs de pleins de choses positive !",
        "j A l'école, cela m'arrive plus souvent d'être 'trop' concentré", //15
        "j et des fois j'ai l'impression d'étouffer un peu...",
        "p il est important de trouvé le traitement qu'il te fait, on va l'adapté.",    
        "p le médicament n'est pas une baguette magique,",
        "p il est important de continué à mettre des stratégies en place pour aller mieux.",
        "p Il y'a des personnes TDAH qui ne prennent pas de traitement", //20
        "p c'est aussi possible lorsque tu as bien mis en place des outils!",
        "j Oui, c'est vrai. Pendant les week-end et les vacances,",
        "j je prends pas le traitement, je vais bien aussi grâce aux outils!",
        "j et mes copains sont toujours contents de me retrouvé, avec ou sans médicament!",
        "j ils savent maintent, que je fais pas exprès.", //25
        "fin"
        ])
    })
}
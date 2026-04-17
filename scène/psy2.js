import { etat } from "/scène/retard.js";

export{
    init
}

function init(){
    scene('psy2', () => {

        add([
            sprite('psy'),
        ]);
loquace.registerCommand('fin', () => {
go('fin')})

        onButtonPress("space",()=> {loquace.next( )});
        loquace.script([
        "p Bonjour ! Comment allez-vous? C'est le grand jours, nous allons faire le point sur la médication",
        "j Bonjour, je vais bien merci. Oui, j'avais hâte de pouvoir en parler avec vous!",
        "p ha? Expliques-moi ce qui t'arrives.",
        "j bah...ça va beaucoup mieux avec mes parents et à l'école...",
        "j je range mieux ma chambre, je fais mes devoirs et je rate presque plus le bus!",
        "p ha mais c'est génial tous ça, mais j'ai l'impression qu'il y'a autre chose...",
        "p Tous n'est pas obligé d'être positif tu sais?",
        "j ...c'est vrai....,j'ai l'impression que j'ai changé",
        "p Comment cela?",
        "j bah...mes copains disent que je fais moins de blague",
        "j J'avais toujours pleins d'histoire, des fois des musiques, qui arrivaient dans ma tête.",
        "j Maintenant, j'en ai plus trop, ma tête est plus calme, mais des fois cela me manque.",
        "p Oui, c'est une des conséquances du médicaments, cela calme l'hyperactivité.",
        "p Mais l'hyperactivitée, c'est aussi le moteurs de pleins de choses positive !",
        "p il est important de trouvé le traitement adapté,",
        "p tu as d'autre exemple",
        "j A l'école, cela m'arrive plus souvent d'être 'trop' concontré",
        "j et des fois j'ai l'impression d'étouffer un peu...",
        "p je vois, on va adapté le traitement on conséquances.",
        "p le médicament n'est pas une baguette magique malheureusement,",
        "p il est important de continué à travailler à côté pour aller mieux.",
        "p Il y'a des personnes TDAH qui ne prennent pas de traitement",
        "p c'est aussi possible lorsque tu as bien mis en place des outils!",
        "j Oui, c'est vrai. Je vois que pendant les week-end et les vacances,",
        "j quand je prends pas le traitement, je vais mieux aussi !",
        "j et mes vrais copains sont toujours contents de me retrouvé, avec ou sans médicament!",
        "j ils savent maintent, que je fais pas exprès.",
        "fin"
        ])
    })
}
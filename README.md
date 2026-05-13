# Tadaaah

## Descriptions
Dans Tadaaah, vous incarnez un enfant et l'accompagnez au travers d'une journée banale de son quotidien. Vous expérimentez aux travers de divers petits jeux ses difficultées quotidiennes et en découvrez l'origine. 

Le but de ce jeu est de sensibiliser au trouble du déficite de l'attention avec ou sans hypercativité. 

![alt-text capture d'écran d'une scène du jeu : Salle de classe avec des enfants, barre de concentration pour travailler](https://github.com/ZowiiCH/Tadaaah/main/capture.png)

## Procédure d’installation / de lancement
Allez sur [itch](https://zowiich.itch.io/tadaaah) et cliquez sur "Run Tadaaah" ou téléchargez tous les fichiers du dépôt. Ensuite, il vous faut ouvrir le fichier "index.html" dans VS Code (ou utilisez un serveur local) et ouvrez-le via "go live" de l'extension "live server extension".


## Modules (loquace)(kaplay)

### Loquace
Pour toutes les parties de dialogue, j'ai utilisö le module [Loquace](https://github.com/loiccattani/kaplay-loquace/tree/main)

### Musique
Pour toutes les musiques du jeu [Retro-BGM-Chan](https://pixabay.com/users/retro-bgm-chan-55246343/)

les éventuels modules, librairies ou scripts intégrés ou nécessaires au bon fonctionnement de votre rendu
les éventuels copyrights, informations de licence, et autres références de vos sources et ressources y compris en matière de code récupéré (celui de Gianni Caporizzo)

## Recours aux LLM 
J'ai utilisé les LLM (Claude, sonnet 4.6) dans les cas suivants :

### 1
Comprenre une partie de code qui m'avait été transmis pour mieux comprendre son fonctionnement afin de l'adapter à mon objectif. 

Prompt :
Salut Claude, on m'a passé ce bout de code, d'un autre étudiant qui a fait un système de barre. J'aimerais l'adapté à mon jeu, mais je ne comprend pas bien comment il fonctionne, peux tu me le commenté avec des explications par étapes?

### 2
M'aidez à réaliser techniquement des processus que j'avais en tête, car il m'arrivait de savoir comment conseptuellement réaliser une idée mais, de ne pas avoir la sythaxe exacte.

Prompt : 
Salut claude ! Voici le script pour ma scène chez les psy. J'aimerais faire un quizz avec des boutons. L'objectif est que pour chaque symptômes (symp1 à 6) l'enfant doive validé la bonne réponse a pour un symptome de l'attention et h pour un de l'hyperactivité. J'ai créé une variable correct avec a chaque fois associé les symptomes avec la bonne réponse. J'aimerais faire une condition de réponse qui vérifie lorsque l'enfant clique sur un réponse si c'est la bonne ou non et fasse une réponse avec loquace différente.  Cependant, je ne sais pas comment aller chercher l’élément dans ma variable tableau.

### 3
Dans le sens inverse, lorsque j'avais une hypothèse sur une partie de mon code que je pensais pouvoir simplifier. Demander à un LLM si mon hypothèse est viable afin de ne pas perdre trop de temps à le tester moi-même.

Prompt ( avec le code transmis):
"ici dans ma const correct, j'ai toute la partie question qui ne sert finalement à rien. Est ce que je peux simplifier cette variable et par la même simplifier les comparaison avec la variable bonne réponse et mes condisions if?"

## Contexte
 Ce projet a été développé dans le cadre du cours <Jeu Vidéo 2D > dispensé par loïc Cattani (SLI, Lettres, UNIL).
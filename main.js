import kaplay from "https://unpkg.com/kaplay@3001.0.19/dist/kaplay.mjs";
import * as menu from "./scene/menu.js"; 
import * as chambre from "./scene/chambre.js";
import * as bus from "./scene/bus.js";
import * as ecole from "./scene/ecole.js";
import * as psy from "./scene/psy.js";
import * as chambre2 from "./scene/chambre2.js";
import * as bus2 from "./scene/bus2.js";
import * as ecole2 from "./scene/ecole2.js";
import * as psy2 from "./scene/psy2.js";
import * as fin from "./scene/fin.js";

//__________________________loquace_________________________
import { loquacePlugin , clear } from "./loquace.js";

const k = kaplay({
    buttons: {
        space: {
            keyboard: ["space"],
        },
    },
    plugins: [loquacePlugin],
    width : 960,
    height : 600,
    stretch : true,
    letterbox : true,
});

loquace.init();
menu.init()
chambre.init()
bus.init()
ecole.init()
psy.init()
chambre2.init()
bus2.init()
ecole2.init()
psy2.init()
fin.init()

loquace.characters({
    m : {
        name : 'menu',
        dialogueType : 'pop',
        position : 'center',
        doTween : false,
        dialogOptions :{
            dialogText : {
                color : [0,0,0]
            }
        },
    },
    j : {
        name : 'joueur-euse',
        dialogueType : 'pop',
        position : 'topleft',
        doTween : false,
        dialogOptions :{
            dialogText : {
                color : [111,0,255]
            }},
        },
    e : {
        name : 'enseignant',
        dialogueType : 'vn',
        position : 'topright',
        doTween : false,
        dialogOptions :{
            dialogText : {
                color : [0,128,0]
            }
        },
    },  
    po : {
        name : 'Pote',
        dialogueType : 'vn',
        position : 'topright',
        doTween : false,
        dialogOptions :{
            dialogText : {
                color : [255,0,255]
            }
        },
    },
    p : {
        name : 'PSY',
        dialogueType : 'vn',
        position : 'topright',
        doTween : false,
        dialogOptions :{
            dialogText : {
                color : [0,0,255]
            }
        },
    },
    u : {
        name : 'urgence',
        dialogueType : 'pop',
        position : 'center',
        doTween : false,
        dialogOptions :{
            dialogText : {
                color : [255,0,0]
            }
    },
},
});


//_________________________ SPRITES___________________________

//______Scène
loadSprite('menu', './assets/menu.png');
loadSprite('fin', './assets/fin.png');

loadSprite('chambre','./assets/chambre.png');
loadSprite('chambre2','./assets/chambre2.png');

loadSprite('bus', './assets/bus.png');
loadSprite('bus2', './assets/bus2.png');

loadSprite('ecole','./assets/école.png');
loadSprite('ecole2','./assets/école2.png');

loadSprite('psy','./assets/buro.png');
loadSprite('psy2','./assets/buro2.png');

//_____Autres

loadSprite('self','./assets/self.png',{
    sliceX: 7,
    sliceY: 4,
})
loadSprite('sac', './assets/sac.png', {
    sliceX: 1,
    sliceY: 2,
    anims:{
            "cligno": { from: 0, to: 1, loop: true } 
            } 
})
loadSprite('sac2', './assets/sac2.png', {
    sliceX: 1,
    sliceY: 2,
    anims:{
            "cligno": { from: 0, to: 1, loop: true } 
            } 
})
loadSprite('box', './assets/box.png', {
    sliceX: 1,
    sliceY: 2,
    anims:{
        "cligno": { from: 0, to: 1, loop: true }
        }
     } 
)
loadSprite('devoir', './assets/devoir.png', {
    sliceX: 2,
    sliceY: 2,
    anims:{
        "cligno": { from: 0, to: 1, loop: true },
        "trouvé" : { from : 2, to:3, loop: true}
        }
     } 
)
loadSprite('devoir2', './assets/devoir2.png', {
    sliceX: 2,
    sliceY: 2,
    anims:{
        "cligno": { from: 0, to: 1, loop: true },
        "trouvé" : { from : 2, to:3, loop: true}
        }
     } 
)
loadSprite('feuille', './assets/feuille.png', {
    sliceX: 1,
    sliceY: 2,
    anims:{
            "cligno": { from: 0, to: 1, loop: true } 
            } 
})
loadSprite('jean', './assets/jean.png', {
    sliceX: 1,
    sliceY: 2,
    anims:{
            "cligno": { from: 0, to: 1, loop: true } 
            } 
})
loadSprite('oreiller', './assets/oreiller.png', {
    sliceX: 1,
    sliceY: 2,
    anims:{
            "cligno": { from: 0, to: 1, loop: true } 
            } 
})
loadSprite('pull', './assets/pull.png', {
    sliceX: 1,
    sliceY: 2,
    anims:{
            "cligno": { from: 0, to: 1, loop: true } 
            } 
})
loadSprite('bubble', './assets/bubble.png')
loadSprite('BVerte', './assets/bulleVerte.png')

//____Son
loadSound("music", "./assets/menu.mp3");
loadSound("chambreJeu", "./assets/chambreJeu.mp3");
loadSound("musicBus", "./assets/bus.mp3");
loadSound("musicPsy", "./assets/psy.mp3");
loadSound("musicPsy2", "./assets/psy2.mp3");
loadSound("juste", "./assets/juste.mp3");
loadSound("faux", "./assets/faux.mp3");
loadSound("musicEcole", "./assets/ecole.mp3");
loadSound("ecoleJeu", "./assets/ecoleJeu.mp3");
loadSound("bubble", "./assets/bubble.mp3");

go('menu') 
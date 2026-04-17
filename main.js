import kaplay from "https://unpkg.com/kaplay@3001.0.19/dist/kaplay.mjs";
import * as menu from "/scène/menu.js"; 
import * as chambre from "/scène/chambre.js";
import * as bus from "/scène/bus.js";
import * as ecole from "/scène/ecole.js";
import * as psy from "/scène/psy.js";
import * as chambre2 from "/scène/chambre2.js";
import * as bus2 from "/scène/bus2.js";
import * as ecole2 from "/scène/ecole2.js";

//__________________________loquace_________________________
import { loquacePlugin , clear } from "/loquace.js";

const k = kaplay({
    buttons: {
        space: {
            keyboard: ["space"],
        },
    },
plugins: [loquacePlugin],
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

loquace.characters({
    m : {
        name : 'menu',
        dialogueType : 'pop',
        position : 'center',
        doTween : false,
        dialogText : {
            color : RED
        }},
    j : {
        name : 'Hadat',
        dialogueType : 'pop',
        position : 'topleft',
        doTween : false,
        dialogText : {
            color : RED
        }},
    e : {
        name : 'enseignant',
        dialogueType : 'vn',
        position : 'topright',
        doTween : false,
        dialogText : {
            color : GREEN
        }
    },
    po : {
        name : 'Pote',
        dialogueType : 'vn',
        position : 'topright',
        doTween : false,
        dialogText : {
            color : YELLOW
        }
    },
    p : {
        name : 'PSY',
        dialogueType : 'vn',
        position : 'topright',
        doTween : false,
        dialogText : {
            color : BLUE
        }
    },
    }
);


//_________________________ SPRITES___________________________
loadSprite('menu', '/assets/menu.png')
loadSprite('bus', '/assets/bus.png');
loadSprite('ecole','/assets/ecole.png') 
loadSprite('psy','/assets/buro.png'),
loadSprite('chambre','/assets/chambre.png')
loadSprite('sac', '/assets/sac.png', {
    sliceX: 1,
    sliceY: 2,
    anims:{
            "cligno": { from: 0, to: 1, loop: true } 
            } 
})
loadSprite('box', '/assets/box.png', {
    sliceX: 1,
    sliceY: 2,
    anims:{
        "cligno": { from: 0, to: 1, loop: true }
        }
     } 
)
loadSprite('devoir', '/assets/devoir.png', {
    sliceX: 2,
    sliceY: 2,
    anims:{
        "cligno": { from: 0, to: 1, loop: true },
        "trouvé" : { from : 2, to:3, loop: true}
        }
     } 
)
loadSprite('bubble', '/assets/bubble.png',{
    sliceX: 2,
    sliceY: 2,
})
loadSprite('BVerte', 'assets/bulleVerte.png')

// souris
loadSprite('cursor', '/assets/cursor.png')

go('ecole2')
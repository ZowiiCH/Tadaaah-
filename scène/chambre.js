import { etat } from "/scène/retard.js";

export{
    init
}


function init(){
    scene('chambre', () => {

        add([
            sprite('chambre'),
        ]);
    
    let début = 0
    loquace.registerCommand('trouve', () => {chercher()});
        onButtonPress("space",()=> {loquace.next( ), début++, console.log(début)});
            loquace.script([
                "j Où sont mes devoirs ?? Vite, je vais raté le bus !!",
                "j Je vais encore avoir une arrivée tardive....",
                "m Clique sur les objets pour chercher tes devoirs !",
                "trouve"
            ]);



// sortie de la fonction pour qu'il soit visible directement
// et n'aparaisse pas seulement au début du jeu.
    const feuille = add([
        sprite('feuille',  {
        frame: 1}
        ),
        pos(640,390),
        area(),
        "cligno"
    // dans les options d'aréa, on peut mettre une shape pour que cela ne soit pas la taille
    ]);

////////////////////////////////SAC//////////////////////
    function chercher(){
        
    function pression(){if(etat.retardMaison === 3){
        console.log("retard3")
            wait(1.5, () =>
                loquace.script(["u Je vais devoir courir pour prendre le bus !"
            ]))
        }else if(etat.retardMaison === 6){
                console.log("retard6")
            wait(1.5, () =>
                loquace.script(["u Ho non, j'ai raté le bus...",
            ]))
        }
    };


        const sac = add([
            sprite('sac', {
                frame: 1}),
            pos(230,235),
            area(),
            "cligno"   
            // dans les options d'aréa, on peut mettre une shape pour que cela ne soit pas la taille
        ]);

        sac.onHover(() => {if(début >= 3){
            sac.play("cligno");
            loquace.vn("sac d'école")
        }});

        sac.onHoverEnd(() => {
            sac.stop();
            sac.frame = 1;
        });

        sac.onClick(() => {if(début >= 3){
            etat.retardMaison += 1;
            console.log(etat.retardMaison);
            sac.destroy();
            loquace.script(
                ["j Ca aurait été trop simple..."]
            );
            pression();
        }});

        //////////////////////BOX///////////////////
        const box = add([
            sprite('box',  {
                frame: 1}
            ),
            pos(475,90),
            area(),
            "cligno"
        // dans les options d'aréa, on peut mettre une shape pour que cela ne soit pas la taille
        ]);

        box.onHover(() =>{if(début >= 3){
            box.play("cligno")
            loquace.vn("Boîte")
        }});

        box.onHoverEnd(() =>{    
            box.stop()
            box.frame = 1
        });

        box.onClick(()=>{if(début >= 3){
            etat.retardMaison += 1;
            console.log(etat.retardMaison);
            loquace.script(
                ["j Elle est trop petite pour y mettre ses devoirs..."]
            );
            box.destroy();
        }});

        //////////////////////Feuille///////////////////

        feuille.onHover(() =>{if(début >= 3){
            feuille.play("cligno")
            loquace.vn("feuilles")};
        });

        feuille.onHoverEnd(() =>{    
            feuille.stop()
            feuille.frame = 1
        });

        feuille.onClick(()=>{if(début >= 3){
            etat.retardMaison += 1;
            console.log(etat.retardMaison);
            loquace.script(["j Je devrais jeter mes brouillons"]);
            feuille.destroy();
                        pression();
        }});
    
        //////////////////////Jean///////////////////
        const jean = add([
            sprite('jean',  {
            frame: 1}
            ),
            pos(13,365),
            area(),
            "cligno"
        // dans les options d'aréa, on peut mettre une shape pour que cela ne soit pas la taille
        ]);

        jean.onHover(() =>{if(début >= 3){
            jean.play("cligno")
            loquace.vn("jean")};
        });

        jean.onHoverEnd(() =>{    
            jean.stop()
            jean.frame = 1
            // loquace.clear()
        })

        jean.onClick(()=>{if(début >= 3){
            etat.retardMaison += 1;
            console.log(etat.retardMaison);
            loquace.script(["j il devrait être au linge sale"]);
            jean.destroy();
                        pression();
        }
        })

        //////////////////////Oreiller///////////////////
        const oreiller = add([
            sprite('oreiller',  {
            frame: 1}
            ),
            pos(680,100),
            area(),
            "cligno"
        // dans les options d'aréa, on peut mettre une shape pour que cela ne soit pas la taille
        ]);

        oreiller.onHover(() =>{if(début >= 3){
            oreiller.play("cligno")
            loquace.vn("oreiller")};
        });

        oreiller.onHoverEnd(() =>{    
            oreiller.stop()
            oreiller.frame = 1
            // loquace.clear()
        })

        oreiller.onClick(()=>{if(début >= 3){
            etat.retardMaison += 1;
            console.log(etat.retardMaison);
            loquace.script(["j Mes fiches d'allemend ! Je les avais perdu"]);
            oreiller.destroy();
                    pression();
                }
        })

        //////////////////////Pull///////////////////
        const pull = add([
            sprite('pull',  {
            frame: 1}
            ),
            pos(100 ,105),
            area(),
            "cligno"
        // dans les options d'aréa, on peut mettre une shape pour que cela ne soit pas la taille
        ]);

        pull.onHover(() =>{if(début >= 3){
            pull.play("cligno")
            loquace.vn("pull")};
        });

        pull.onHoverEnd(() =>{    
            pull.stop()
            pull.frame = 1
            // loquace.clear()
        })

        pull.onClick(()=>{if(début >= 3){
            etat.retardMaison += 1;
            console.log(etat.retardMaison);
            loquace.script(["j juste quelques miettes dans les poches..."]);
            pull.destroy();
                    pression();}
        })
        /////////////////////////devoir///////////////////
        const devoir = add([
            sprite('devoir',  {
            frame: 1}
            ),
            scale(0.8),
            pos(335,40),
            area(),
            "cligno"
        ])

        devoir.onHover(() =>{if(début >= 3){
            devoir.play("cligno")
            loquace.vn('tas de feuille')
            }
        });

        devoir.onHoverEnd(() =>{    
            devoir.stop()
            devoir.frame = 1
            //  loquace.clear() <= fait disparaitre les bulles de dialogues aussi....
        })

        devoir.onClick(()=>{if(début >= 3){
            destroy(box) // marche pas quand je met les deux en un??
            destroy(sac)
            destroy(feuille)
            destroy(jean)
            destroy(oreiller)
            destroy(pull)
            etat.retardMaison += 1,
            console.log(etat.retardMaison)
            devoir.play("trouvé")
            loquace.script(["j Trouvé! J'avais oublié que j'avais ''rangé'' mon bureau hier",
                "u Vite, le bus !",
                "bus"
            ])
        loquace.registerCommand('bus', () => {
        go('bus')})

            }
            })
    }
    });

};


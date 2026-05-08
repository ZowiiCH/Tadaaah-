import { etat } from "/scène/retard.js";

export{
    init
}


function init(){
    scene('chambre', () => {

        add([
            sprite('chambre'),
        ]);

        const music = play("chambreJeu",{
            volume: 0.5, 
            speed: 0.9, 
            loop: true, 
        });
        
        onSceneLeave(() => {
            music.stop()
        });
        
        loquace.registerCommand('chercher', () => {chercher()});

        onButtonPress("space",()=> {loquace.next()});
            loquace.script([
                "j Où sont mes devoirs ?? Vite, je vais rater le bus !!",
                "chercher m Cliques sur les objets pour chercher tes devoirs !",

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
        ]);

        //___________Fonction jeu_______
        function chercher(){
            
            //_________Fonction message pression______
            function pression(){if(etat.retardMaison === 3){

                console.log("retard3")
                    wait(1.2, () =>
                        loquace.script(["u Je vais devoir courir pour prendre le bus !"
                    ]))
                }else if(etat.retardMaison === 6){
                        console.log("retard6")
                    wait(1.2, () =>
                        loquace.script(["u Ho non, j'ai raté le bus...",
                    ]))
                }
            };

        //////////////////////////SAC////////////////////////////
            const sac = add([
                sprite('sac', {
                    frame: 1}),
                pos(230,235),
                area(),
                "cligno"   
            ]);

            sac.onHover(() => {
                sac.play("cligno");
                loquace.vn("sac d'école")
            });

            sac.onHoverEnd(() => {
                sac.stop();
                sac.frame = 1;
            });

            sac.onClick(() => {
                etat.retardMaison += 1;
                console.log(etat.retardMaison);
                sac.destroy();
                loquace.script(
                    ["j J'ai pas préparé mon sac hier..."]
                );
                pression();
                music.speed += 0.05
            });

            //////////////////////BOX///////////////////
            const box = add([
                sprite('box',  {
                    frame: 1}
                ),
                pos(475,90),
                area(),
                "cligno"
            ]);

            box.onHover(() =>{
                box.play("cligno")
                loquace.vn("Boîte")
            });

            box.onHoverEnd(() =>{    
                box.stop()
                box.frame = 1
            });

            box.onClick(()=>{
                etat.retardMaison += 1;
                console.log(etat.retardMaison);
                loquace.script(
                    ["j Elle est trop petite pour y mettre mes devoirs..."]
                );
                box.destroy();
                pression();
                music.speed += 0.05
            });

            //////////////////////Feuille///////////////////
            feuille.onHover(() =>{
                feuille.play("cligno")
                loquace.vn("feuilles")
            });

            feuille.onHoverEnd(() =>{    
                feuille.stop()
                feuille.frame = 1
            });

            feuille.onClick(()=>{
                etat.retardMaison += 1;
                console.log(etat.retardMaison);
                loquace.script(
                    ["j Je devrais jeter mes brouillons."]
                );
                feuille.destroy();
                pression();
                music.speed += 0.05
            });
        
            //////////////////////Jean///////////////////
            const jean = add([
                sprite('jean',  {
                frame: 1}
                ),
                pos(13,365),
                area(),
                "cligno"
            ]);

            jean.onHover(() =>{
                jean.play("cligno")
                loquace.vn("jean")
            });

            jean.onHoverEnd(() =>{    
                jean.stop()
                jean.frame = 1
            });

            jean.onClick(()=>{
                etat.retardMaison += 1;
                console.log(etat.retardMaison);
                loquace.script(
                    ["j il devrait être au linge sale."]
                );
                jean.destroy();
                pression();
                music.speed += 0.05
            });

            //////////////////////Oreiller///////////////////
            const oreiller = add([
                sprite('oreiller',  {
                frame: 1}
                ),
                pos(680,100),
                area(),
                "cligno"
            ]);

            oreiller.onHover(() =>{
                oreiller.play("cligno")
                loquace.vn("oreiller")
            });

            oreiller.onHoverEnd(() =>{    
                oreiller.stop()
                oreiller.frame = 1
            });

            oreiller.onClick(()=>{
                etat.retardMaison += 1;
                console.log(etat.retardMaison);
                loquace.script(
                    ["j Mes fiches d'allemand ! Je les avais perdu."]
                );
                oreiller.destroy();
                pression();
                music.speed += 0.05
            })

            //////////////////////Pull///////////////////
            const pull = add([
                sprite('pull',  {
                frame: 1}
                ),
                pos(100 ,105),
                area(),
                "cligno"
            ]);

            pull.onHover(() =>{
                pull.play("cligno")
                loquace.vn("pull")
            });

            pull.onHoverEnd(() =>{    
                pull.stop()
                pull.frame = 1
            });

            pull.onClick(()=>{
                etat.retardMaison += 1;
                console.log(etat.retardMaison);
                loquace.script(
                    ["j juste quelques miettes dans les poches..."]
                );
                pull.destroy();
                pression();
                music.speed += 0.05
            });

            /////////////////////////devoir///////////////////
            const devoir = add([
                sprite('devoir',  {
                frame: 1}
                ),
                scale(0.8),
                pos(335,40),
                area(),
                "cligno"
            ]);

            devoir.onHover(() =>{
                devoir.play("cligno")
                loquace.vn('tas de feuille')
            });

            devoir.onHoverEnd(() =>{    
                devoir.stop()
                devoir.frame = 1
            });

            devoir.onClick(()=>{
                destroy(box) // marche pas quand je met les deux en un??
                destroy(sac)
                destroy(feuille)
                destroy(jean)
                destroy(oreiller)
                destroy(pull)
                etat.retardMaison += 1,
                console.log(etat.retardMaison)
                devoir.play("trouvé")
                loquace.script(
                    ["j Trouvé! J'ai pas vraiment ''rangé'' mon bureau hier",
                    "u Vite, le bus !",
                    "bus"]
                )
                loquace.registerCommand('bus', () => {
                    go('bus')
                })
            });
        };
    });
};


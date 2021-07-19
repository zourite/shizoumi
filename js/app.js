document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("ship1").classList.add('fly');
});

for(var i = 0; i < main.length; i++){

     shifumi.push(main[i].dataset.player);

}

function hideImg(img) {

    img.forEach((userItem) => {

            userItem.style.display = 'none';

    });

}

function showImg(img, choix) {

    img.forEach((userItem) => {

        if (userItem.dataset.elem == choix) {

            userItem.style.display = 'block';

        }

    });
}

function play(e) {

    // document.getElementById('intro').style.display = 'none';

    hideImg(playerImg)
    hideImg(ordiImg)

    setTimeout(function() {

        showImg(playerImg,joueur)
        showImg(ordiImg, choixO)
    
    }, (0,5 * 1));

    let joueur = e.dataset.player;
    let choixO = shifumi[Math.floor(Math.random()*shifumi.length)];

    if(manche == 3 && regles[choixO][joueur] > regles[joueur][choixO] ) {

        document.getElementById("ship3").classList.add('fly');

    }

    if(manche == 2 && regles[choixO][joueur] > regles[joueur][choixO] ) {

        document.getElementById("ship2").classList.add('fly2');

    }

    if(manche == 1 && regles[choixO][joueur] > regles[joueur][choixO] ) {

        document.getElementById("ship4").classList.add('fly2');

    }

    manche--;

    if(manche == 0) {

        document.getElementById('new-game').classList.remove('disabled')
        document.getElementById('new-game').style.display = "block";

        main.forEach(function(button) {

            button.disabled = true; 
            button.style.display = "none";
        });
    }

    if(manche >= 0) {

        compare(joueur,choixO);
        
    } 
    
    
}

function compare(joueur, choixO) {

    totalU += regles[joueur][choixO];

    totalO += regles[choixO][joueur];

    ega = regles[joueur][choixO] + regles[choixO][joueur];

    if(ega == 0) {

        nul++;

    }

    if(regles[joueur][choixO] < regles[choixO][joueur] && ega > 0) {
 
        info.innerHTML = "Les aliens nous envahissent ils ont choisi, &nbsp;" + choixO + " et tu as choisi &nbsp;" + joueur;
    
    } else if(regles[joueur][choixO] > regles[choixO][joueur] && ega > 0) {

        info.innerHTML = "vous avez choisi &nbsp;" + joueur + " l'alien à choisi &nbsp;" + choixO;
        
    } 
    
    else {

        info.innerHTML =  "Vous avez choisi &nbsp;" + joueur + " et &nbsp;" + choixO + ". Égalité !"

    }

    jpt.innerHTML = totalU;
    opt.innerHTML = totalO;

   

    if(manche == 0) {

        if(totalU > totalO) {

        info.innerHTML = info.innerHTML + " <br> la partie est terminé ! Vous avez gagné";
        
        } else if (totalU < totalO) {

            ships.forEach(ship => { 
                
                if(!ship.matches( '[class*=fly]')) {
                   
                   var number = ship.id.substr(ship.id.length - 1)

                    if(number%2 == 0) {

                        document.getElementById('ship'+number).classList.add('fly2')

                    }  else {
                        
                        document.getElementById('ship'+number).classList.add('fly')
                    }
                }
            })
            info.innerHTML = info.innerHTML + "<br> la partie est terminé les aliens ont gagné";

        } else {

            info.innerHTML = info.innerHTML + "<br> la partie est terminé. Les humains et les aliens vivent en harmonie";
        }
    }
}

function newgame() {

    ships.forEach(ship => { 
                
        if(!ship.matches( '[class*=fly]')) {
           
           var number = ship.id.substr(ship.id.length - 1)

           console.log('toto');

            if(number%2 == 0) {

                document.getElementById('ship'+number).classList.remove('fly2')
                console.log('tato');
            }  else {
                
                document.getElementById('ship'+number).classList.remove('fly')
                console.log('tota');
            }

            if(ship.id == "ship1") {

                document.getElementById('ship1').classList.add('fly')

            }
        }
    })
    
    document.getElementById('new-game').classList.add('disabled')
    document.getElementById('new-game').style.display = "none";

    totalU = 0;
    totalO = 0;
    manche = 3;
    
    hideImg(playerImg)
    hideImg(ordiImg)

    main.forEach(function(button) {

        button.disabled = false; 
        button.style.display = "block";
    });
}
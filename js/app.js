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

    hideImg(playerImg)
    hideImg(ordiImg)

    setTimeout(function() {

        showImg(playerImg,joueur)
        showImg(ordiImg, choixO)
    
    }, (0,5 * 1));

    let joueur = e.dataset.player;
    let choixO = shifumi[Math.floor(Math.random()*shifumi.length)];

    manche--;

    if(manche == 0) {

        document.getElementById('new-game').classList.remove('disabled')

        main.forEach(function(button) {

            button.disabled = true; 
   
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
 
        info.innerHTML = "Bots control the world he choose &nbsp;" + choixO + " and you choose &nbsp;" + joueur;
    
    } else if(regles[joueur][choixO] > regles[choixO][joueur] && ega > 0) {

        info.innerHTML = "vous avez choisi &nbsp;" + joueur + " vous avez gagné le bot à choisi &nbsp;" + choixO;
        
    } 
    
    else {

        info.innerHTML =  "Human choose &nbsp;" + joueur + " and bot &nbsp;" + choixO + " we live in harmony"

    }

    res.innerHTML = "Bot " + totalO + " / Humain " + totalU + " / nul " + nul;


    if(manche == 0) {

        if(totalU > totalO) {

        info.innerHTML = info.innerHTML + " <br> la partie est terminé vous avez gagné";
        
        } else if (totalU < totalO) {

            info.innerHTML = info.innerHTML + "<br> la partie est terminé le bot à gagné";

        } else {

            info.innerHTML = info.innerHTML + "<br> la partie est terminé humans and bots live in harmony";
        }
    }
}

function newgame() {
    
    document.getElementById('new-game').classList.add('disabled')
    
    manche = 3;
    
    hideImg(playerImg)
    hideImg(ordiImg)

    main.forEach(function(button) {

        button.disabled = false; 

    });
}
var totalU = 0;
var totalO = 0;
var manche = 3;
var nul = 0;
var shifumi = [];
var main = document.querySelectorAll(".play");
var playerImg = document.querySelectorAll('.player-img');
var ordiImg = document.querySelectorAll('.ordi-img');
var info = document.getElementById('info');
var res  = document.getElementById('resultat');

var regles = {"ciseaux" : { 

    "ciseaux" : 0,
    "pierre" : 0,
    "feuille" : 1

},

"pierre" : {

    "ciseaux" : 1,
    "pierre" : 0,
    "feuille" : 0

},

"feuille" : {

    "ciseaux" : 0,
    "pierre" : 1,
    "feuille" : 0

}}

for(var i = 0; i < main.length; i++){

     shifumi.push(main[i].dataset.player);

}

function showImg(img, choix) {

    img.forEach((userItem) => {

            userItem.style.display = 'none';

            if (userItem.dataset.elem == choix) {

                userItem.style.display = 'block';

            }
        });
}

function hideImg(img) {

    img.forEach((userItem) => {

            userItem.style.display = 'none';

        });

}

function play(e) {

    let joueur = e.dataset.player;
   
    showImg(playerImg,joueur)

    manche--;

    if(manche >= 0) {

        compare(joueur);
        
    } else {

        document.getElementById('new-game').classList.remove('disabled')

        main.forEach(function(button) {

            button.disabled = true; 
   
        });
    }
}

function compare(joueur) {

    var choixO = shifumi[Math.floor(Math.random()*shifumi.length)];

    showImg(ordiImg, choixO)
    
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
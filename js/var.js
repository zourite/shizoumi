var totalU = 0;
var totalO = 0;
var manche = 3;
var nul = 0;
var shifumi = [];
var main = document.querySelectorAll(".play");
var playerImg = document.querySelectorAll('.player-img');
var ordiImg = document.querySelectorAll('.ordi-img');
var info = document.getElementById('info');
var jpt  = document.getElementById('jpt');
var opt  = document.getElementById('cpt');
var ships = document.querySelectorAll("[id*=ship]");
var regles =  {
    "ciseaux" : 
    { 

        "ciseaux" : 0,
        "pierre" : 0,
        "feuille" : 1

    },

    "pierre" : 
    
    {

        "ciseaux" : 1,
        "pierre" : 0,
        "feuille" : 0

    },

    "feuille" : 
    {

        "ciseaux" : 0,
        "pierre" : 1,
        "feuille" : 0
    }
}



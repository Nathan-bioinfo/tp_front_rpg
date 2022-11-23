import { Personage, Warrior, Mage, Tank, Demon, Monster, Wizard  } from './Personage.js';
import { Spell } from './Spell.js';
import { Div_manager } from './Div_manager.js';

let menu_div = new Div_manager("menu_div");
let game_div = new Div_manager("game_div");

let btn_mage_selection = document.getElementById("Mage_selection");
let btn_warrior_selection = document.getElementById("Warior_selection");
let btn_tank_selection = document.getElementById("Tank_selection");

// ** instancier des ennemis
let ennemis = [new Demon(), new Monster(), new Wizard()];

// ** choisir un ennemi aléatoirement dans la liste d'ennemis
let ennemi = ennemis[(Math.floor(Math.random() * (((ennemis.length)-1) + 1)))];

// ** créer élément HTML de l'ennemi
let section_ennemi = document.getElementById("ennemi");
let div_ennemi = create_player_div(ennemi);
section_ennemi.append(div_ennemi);

// ** instancier des personnages
let mage = new Mage();
let warrior = new Warrior();
let tank = new Tank();

let personnage;


btn_mage_selection.addEventListener("click", function(){
    console.log("you choosed mage!");

    menu_div.hide();
    game_div.show();

    make_perso(mage);
    let section_personnage = document.getElementById("personnage");
    let div_personnage = create_player_div(personnage);
    section_personnage.append(div_personnage);
}, false);

btn_warrior_selection.addEventListener("click", function(){
    console.log("you choosed warrior!");
    
    menu_div.hide();
    game_div.show();

    make_perso(warrior);
    let section_personnage = document.getElementById("personnage");
    let div_personnage = create_player_div(personnage);
    section_personnage.append(div_personnage);
}, false);

btn_tank_selection.addEventListener("click", function(){
    console.log("you choosed tabk!");
    // ** instancier un tank pour le joueur
    menu_div.hide();
    game_div.show();

    make_perso(tank);
    let section_personnage = document.getElementById("personnage");
    let div_personnage = create_player_div(personnage);
    section_personnage.append(div_personnage);
}, false);




function create_player_div(player) {
    let div = document.createElement("div");
    div.innerHTML=`<div id="${player.name}">
                    <img src="img/warrior.png" alt="a warrior">
                    <p id ="name_${player.name}">${player.name}</p>
                    <p id ="hp_${player.name}">${player.hp}</p>
                    <p id ="strength_${player.name}">${player.strength}</p>
                    <p id ="stamina_${player.name}">${player.stamina}</p>
                    </div>`;
    return div;
};

function make_perso(type) {
    personnage = type;
};

// ** attaque aléatoire de l'ennemi
// ennemi.play_turn((Math.floor(Math.random() * (((ennemi.attacks.length)-1) + 1))), personnage);

let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");
let btn7 = document.getElementById("btn7");
let btn8 = document.getElementById("btn8");
let btn9 = document.getElementById("btn9");
let btn10 = document.getElementById("btn10");



// btn1.addEventListener("click", function(){
//     personnage.hello();
// }, false);

// btn2.addEventListener("click", function(){
//     personnage.give_dmg(ennemi);
// }, false);

// btn3.addEventListener("click", function(){
//     personnage.play_turn(0,ennemi);  
// }, false);

// btn4.addEventListener("click", function(){
//     personnage.play_turn(0,ennemi);  
// }, false);

// btn5.addEventListener("click", function(){
//     personnage.play_turn(0,ennemi);  
// }, false);






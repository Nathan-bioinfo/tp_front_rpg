import { Personage } from './Personage.js';
import { Spell } from './Spell.js';
import { Div_manager } from './Div_manager.js';

let menu_div = new Div_manager("menu_div");
let game_div = new Div_manager("game_div");

let btn_mage_selection = document.getElementById("Mage_selection");
let btn_warrior_selection = document.getElementById("Warior_selection");
let btn_tank_selection = document.getElementById("Tank_selection");


btn_mage_selection.addEventListener("click", function(){
    console.log("you choosed mage!");

    menu_div.hide();
    game_div.show();
    // ** instancier un mage pour le joueur
    let personnage = new Personage("Mage",100,10,150);
    // ** créer élément HTML du perso du joueur
    let section_personnage = document.getElementById("personnage");
    let div_personnage = create_player_div(personnage);
    section_personnage.append(div_personnage);
}, false);

btn_warrior_selection.addEventListener("click", function(){
    console.log("you choosed warrior!");
    // ** instancier un warrior pour le joueur
    let personnage = new Personage("Warrior",100,10,150);
    menu_div.hide();
    game_div.show();
    // ** créer élément HTML du perso du joueur
    let section_personnage = document.getElementById("personnage");
    let div_personnage = create_player_div(personnage);
    section_personnage.append(div_personnage);
}, false);

btn_tank_selection.addEventListener("click", function(){
    console.log("you choosed tabk!");
    // ** instancier un tank pour le joueur
    let personnage = new Personage("Tank",100,10,150);
    menu_div.hide();
    game_div.show();
    // ** créer élément HTML du perso du joueur
    let section_personnage = document.getElementById("personnage");
    let div_personnage = create_player_div(personnage);
    section_personnage.append(div_personnage);
}, false);

// ** instancier des ennemis
let ennemis = [new Personage("Demon",100,10,150), new Personage("Monstre", 100, 10, 25), new Personage("Sorcier", 100, 10, 25)];
console.log(ennemis);

// ** choisir un ennemi aléatoirement dans la liste d'ennemis
let ennemi = ennemis[(Math.floor(Math.random() * (((ennemis.length)-1) + 1)))];
console.log(ennemi);

// ** créer élément HTML de l'ennemi
let section_ennemi = document.getElementById("ennemi");
let div_ennemi = create_player_div(ennemi);
section_ennemi.append(div_ennemi);

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



let fireball = new Spell("fireball",50,10,() => console.log("*** fireball ***"));
let firewall = new Spell("firewall",40,4,() => console.log("*** firewall ***"));
let firesword = new Spell("firesword",150,80, () => console.log("*** firesword ***"));

let iceball = new Spell("iceball",50,10,() => console.log("*** iceball ***"));
let icewall = new Spell("icewall",40,4,() => console.log("*** icewall ***"));
let icesword = new Spell("icesword",150,80,() => console.log("*** icesword ***"));




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






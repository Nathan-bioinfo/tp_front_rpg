import { Personage, Warrior, Mage, Tank, Demon, Monster, Wizard  } from './Personage.js';
import { Spell } from './Spell.js';
import { Div_manager } from './Div_manager.js';

let menu_div = new Div_manager("menu_div");
let game_div = new Div_manager("game_div");

let btn_mage_selection = document.getElementById("Mage_selection");
let btn_warrior_selection = document.getElementById("Warior_selection");
let btn_tank_selection = document.getElementById("Tank_selection");

let fireball = new Spell("fireball",50,10,() => console.log("*** fireball ***"));
let firewall = new Spell("firewall",40,4,() => console.log("*** firewall ***"));
let firesword = new Spell("firesword",150,80, () => console.log("*** firesword ***"));

let iceball = new Spell("iceball",50,10,() => console.log("*** iceball ***"));
let icewall = new Spell("icewall",40,4,() => console.log("*** icewall ***"));
let icesword = new Spell("icesword",150,80,() => console.log("*** icesword ***"));

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

// ** instancier des personnages
let mage = new Mage();
let warrior = new Warrior();
let tank = new Tank();

let personnage;

btn_leave_game.addEventListener("click", function(){
    menu_div.show();
    game_div.hide();
}, false);

btn_mage_selection.addEventListener("click", function(){
    console.log("you choosed mage!");

    menu_div.hide();
    game_div.show();
    
    make_perso(mage);
    let section_personnage = document.getElementById("personnage");
    let div_personnage = create_player_div(personnage);
    section_personnage.append(div_personnage);
    /**Print spell buttons */
    personnage.printButtons(ennemi);
}, false);

btn_warrior_selection.addEventListener("click", function(){
    console.log("you choosed warrior!");
    
    menu_div.hide();
    game_div.show();

    make_perso(warrior);
    let section_personnage = document.getElementById("personnage");
    let div_personnage = create_player_div(personnage);
    section_personnage.append(div_personnage);
    /**Print spell buttons */
    personnage.printButtons(ennemi);
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
    /**Print spell buttons */
    personnage.printButtons(ennemi);
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
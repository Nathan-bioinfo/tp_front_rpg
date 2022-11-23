import { Personage } from './Personage.js';
import { Spell } from './Spell.js';


let Jeanjean = new Personage("Jeanjean",100,10,150);
let Michemuche = new Personage("Michemuche",120,15,300);
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


Jeanjean.add_attack(fireball);
Jeanjean.add_attack(firewall);
Jeanjean.add_attack(firesword);

Michemuche.add_attack(iceball);
Michemuche.add_attack(icewall);
Michemuche.add_attack(icesword);

btn1.addEventListener("click", function(){
    Jeanjean.hello();
}, false);

btn2.addEventListener("click", function(){
    Jeanjean.give_dmg(Michemuche);
}, false);

btn3.addEventListener("click", function(){
    Jeanjean.play_turn(0,Michemuche);  
}, false);

btn4.addEventListener("click", function(){
    Jeanjean.play_turn(1,Michemuche);  
}, false);

btn5.addEventListener("click", function(){
    Jeanjean.play_turn(2,Michemuche);  
}, false);

btn6.addEventListener("click", function(){
    Michemuche.hello();
}, false);

btn7.addEventListener("click", function(){
    Michemuche.give_dmg(Jeanjean);
}, false);

btn8.addEventListener("click", function(){
    Michemuche.play_turn(0,Jeanjean);  
}, false);

btn9.addEventListener("click", function(){
    Michemuche.play_turn(1,Jeanjean);  
}, false);

btn10.addEventListener("click", function(){
    Michemuche.play_turn(2,Jeanjean);  
}, false);
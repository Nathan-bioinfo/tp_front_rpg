import { Spell } from './Spell.js';

export class SpellButton {
  constructor(p_spell, p_personnage)
  {
    this.spell = p_spell;
    this.name = this.spell.getName();
    this.personnage = p_personnage;
    this.btn = document.createElement("button");
    this.setButton();
  }

  getPersonnage() {
    return(this.personnage);
  }

  getName() {
    return(this.name);
  }

  /**
   * adds the text to the button and the button to the document body
   * adds an eventListener
   */
  setButton() {
    this.btn.addEventListener("click", function(){
        this.spell.cast(this.p_personnage, ennemi);
    }, false);
  }

}



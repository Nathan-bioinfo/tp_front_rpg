import { Spell } from './Spell.js';

export class SpellButton {
  constructor(p_spell, p_personnage)
  {
    this.spell = p_spell;
    this.name = this.spell.getName();
    this.personnage = p_personnage;
    this.btn = "btn_${this.name}";
  }

  getSpell() {
    return(this.spell);
  }

  getPersonnage() {
    return(this.personnage);
  }

  getName() {
    return(this.name);
  }


}




export class SpellButton {
  constructor(p_spell, p_personnage)
  {
    this.spell = p_spell;
    this.personnage = p_personnage;
    this.btn = document.createElement("button");
    setButton();
  }

  getPersonnage() {
    return(this.personnage);
  }

  getName() {
    return(this.name);
  }

  getText() {
    return(this.text);
  }

  /**
   * adds the text to the button and the button to the document body
   * adds an eventListener
   */
  setButton() {
    this.btn.innerHTML = this.text;
    document.body.appendChild(this.btn);

    this.btn.addEventListener("click", function(){
        this.spell.cast(p_personnage, ennemi);
    }, false);
  }

}



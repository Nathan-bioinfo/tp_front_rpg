
export class Button {
  constructor(p_name,p_text, p_personnage, p_attack_index)
  {
    this.name = p_name;
    this.text = p_text;
    this.personnage = p_personnage;
    this.attack_index = p_attack_index;
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
        this.personnage.getAttacks()[this.attack_index];
    }, false);
  }

}



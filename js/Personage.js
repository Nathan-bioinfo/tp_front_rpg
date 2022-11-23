import { Spell } from './Spell.js';

export { Personage, Warrior, Mage, Tank, Demon, Monster, Wizard };
class Personage
{
  constructor()
  {
    this.name = "Joueur";
    this.hp = 100;
    this.strength = 10;
    this.stamina = 25;
    this.opponent = null;
  }

  play_turn(p_index,p_target)
  {
    this.attacks[p_index].cast(this,p_target);
  }

  add_attack(p_spell)
  {
    this.attacks.push(p_spell);
  }

  get_name()
  {
    return(this.name);
  }

  set_name(p_name)
  {
    this.name = p_name;
  }

  get_strength()
  {
    return(this.strength);
  }

  set_strength(p_strength)
  {
    this.strength = p_strength;
    change_value_by_name("strength_"+ this.name, p_strength);
  }

  get_hp()
  {
    return(this.hp);
  }

  set_hp(p_hp)
  {
    this.hp = p_hp;
    change_value_by_name("hp_"+ this.name, p_hp);
  }

  get_stamina()
  {
    return(this.stamina);
  }

  set_stamina(p_stamina)
  {
    this.stamina = p_stamina;
    change_value_by_name("stamina_"+ this.name, p_stamina);
  }

  take_dmg(p_amount)
  {
    this.hp -= p_amount;
    change_value_by_name("hp_"+ this.name, this.hp);
  }

  give_dmg(p_target,p_attack)
  {
    p_target.take_dmg(this.strength);
    this.stamina -= 2;
    change_value_by_name("stamina_"+ this.name, this.stamina);
  }

  hello()
  {
    console.log("Hello my name is " + this.name + ", i have " + this.hp + " hp, " + this.strength + " strength and " + this.stamina + " stamina")
  }
}

function change_value_by_name(name, value)
{
  document.getElementById(name).innerHTML = value;
}


class Mage extends Personage {
  constructor()
  {
    super();
    this.attacks = [];

    this.add_attack(new Spell("fireball",50,10,() => console.log("*** fireball ***")));
  }
}

class Warrior extends Personage {
  constructor()
  {
    super();
    this.attacks = [];

    this.add_attack(new Spell("firesword",150,80, () => console.log("*** firesword ***")));
  }
}

class Tank extends Personage {
  constructor()
  {
    super();
    this.attacks = [];

    this.add_attack(new Spell("firewall",40,4,() => console.log("*** firewall ***")));
  }
}

class Demon extends Personage {
  constructor()
  {
    super();
    this.name = "Demon";
    this.attacks = [];

    this.add_attack(new Spell("icesword",150,80,() => console.log("*** icesword ***")));
  }
}

class Monster extends Personage {
  constructor()
  {
    super();
    this.name = "Monstre";
    this.attacks = [];

    this.add_attack(new Spell("icewall",40,4,() => console.log("*** icewall ***")));
  }
}

class Wizard extends Personage {
  constructor()
  {
    super();
    this.name = "Sorcier";
    this.attacks = [];

    this.add_attack(new Spell("iceball",50,10,() => console.log("*** iceball ***")));
  }
}

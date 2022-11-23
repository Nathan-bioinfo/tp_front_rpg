import { Spell } from './Spell.js';
export class Personage
{
  constructor(p_name,p_hp,p_strength,p_stamina)
  {
    this.name = p_name;
    this.hp = p_hp;
    this.strength = p_strength;
    this.stamina = p_stamina;
    this.opponent = null;
    this.attacks = [];

    // change_value_by_name("name_"+ this.name, p_name);
    // change_value_by_name("strength_"+ this.name, p_strength);
    // change_value_by_name("hp_"+ this.name, p_hp);
    // change_value_by_name("stamina_"+ this.name, p_stamina);

    this.add_attack(new Spell("fireball",50,10,() => console.log("*** fireball ***")));

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

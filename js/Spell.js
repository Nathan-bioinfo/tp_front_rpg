export class Spell
{
  constructor(p_name,p_damage,p_cost,p_callback)
  {
    this.name = p_name;
    this.damage = p_damage;
    this.cost = p_cost;
    this.callback = p_callback;
  }

  getName() {
    return(this.name);
  }

  cast(p_caster, p_target)
  {
    let stamina = p_caster.get_stamina();
    stamina -= this.cost;
    p_caster.set_stamina(stamina);
    
    let hp = p_target.get_hp();
    hp -= this.damage;
    p_target.set_hp(hp);
    this.callback()
  }
}

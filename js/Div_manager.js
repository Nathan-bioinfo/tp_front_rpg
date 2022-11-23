export class Div_manager
{
  constructor(p_div)
  {
    this.div =  document.getElementById(p_div);
  }
  hide()
  {
    this.div.style.visibility = "hidden";
  }
  show()
  {
    this.div.style.visibility = "visible";
  }
}

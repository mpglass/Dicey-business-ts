class Dice {
  static collection: Dice[] = [];
  static counter: number = 0; 
 

  value: number;
  div: JQuery<HTMLDivElement>;
  text: number;
  id: number; 


  constructor() {
    this.value = Math.floor(Math.random() * 6 + 1);
    this.div = $(`<div class="dice shadow">${this.value}</div>`);
    this.id = Dice.counter; 
    this.render();
    Dice.collection.push(this);

    this.div.click(() => this.reRoll());

    this.div.dblclick(() => {
      this.div.remove(); 
      let i:number = this.id; 
      Dice.collection.splice(i, 1);
    });
  }


  render() {
    $("#dice-container").append(this.div);
    Dice.counter++; 
  }

  reRoll(): void {
    this.value = Math.floor(Math.random() * 6 + 1);
    this.div.text(this.value);
  }
}

$("#add-dice").click(() => new Dice());
$("#roll-dice").click(() => Dice.collection.forEach((dice) => dice.reRoll()));
$('#sum-dice').click(() => {
    let sum: number = Dice.collection.reduce((total, dice) => {
        return total += dice.value; 
    }, 0); 
    console.log(sum); 
});
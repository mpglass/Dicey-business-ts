class Dice {

    static genRoll: number = Math.floor((Math.random() * 6) + 1); 
    static collection: Dice[] = [];

  value: number;
  div: JQuery<HTMLDivElement>;
  text: number;

  constructor() {
    this.value = Dice.genRoll;
    this.div = $(`<div class="dice shadow">${this.value}</div>`);
    this.render();
    Dice.collection.push(this);

    this.div.click(() => {
        this.value = Math.floor((Math.random() * 6) + 1);
        this.div.text(this.value);
    })

    this.div.dblclick(() => {
        Dice.collection.pop();
        let i = Dice.collection.indexOf(this);
        Dice.collection.splice(i, 1);
    })
  }



  render() {
    $("#dice-container").append(this.div);
    
  }
}

$("#add-dice").click(() => new Dice());


        
        


        


   
    // reRoll() {
    //     this.value = Math.floor((Math.random() * 6) + 1);
    //     this.div.text(this.value);
    // };



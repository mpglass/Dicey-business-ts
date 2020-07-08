var Dice = /** @class */ (function () {
    function Dice() {
        var _this = this;
        this.value = Dice.genRoll;
        this.div = $("<div class=\"dice shadow\">" + this.value + "</div>");
        this.render();
        Dice.collection.push(this);
        this.div.click(function () {
            _this.value = Math.floor((Math.random() * 6) + 1);
            _this.div.text(_this.value);
        });
        this.div.dblclick(function () {
            Dice.collection.pop();
            var i = Dice.collection.indexOf(_this);
            Dice.collection.splice(i, 1);
        });
    }
    Dice.prototype.render = function () {
        $("#dice-container").append(this.div);
    };
    Dice.genRoll = Math.floor((Math.random() * 6) + 1);
    Dice.collection = [];
    return Dice;
}());
$("#add-dice").click(function () { return new Dice(); });
// reRoll() {
//     this.value = Math.floor((Math.random() * 6) + 1);
//     this.div.text(this.value);
// };

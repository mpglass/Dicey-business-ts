var Dice = /** @class */ (function () {
    function Dice() {
        var _this = this;
        this.value = Math.floor(Math.random() * 6 + 1);
        this.div = $("<div class=\"dice shadow\">" + this.value + "</div>");
        this.id = Dice.counter;
        this.render();
        Dice.collection.push(this);
        this.div.click(function () { return _this.reRoll(); });
        this.div.dblclick(function () {
            console.log('before', Dice.collection);
            _this.div.remove();
            var i = _this.id;
            Dice.collection.splice(i, 1);
            console.log('after', Dice.collection);
        });
    }
    Dice.prototype.render = function () {
        $("#dice-container").append(this.div);
        Dice.counter++;
    };
    Dice.prototype.reRoll = function () {
        this.value = Math.floor(Math.random() * 6 + 1);
        this.div.text(this.value);
    };
    Dice.collection = [];
    Dice.counter = 0;
    return Dice;
}());
$("#add-dice").click(function () { return new Dice(); });
$("#roll-dice").click(function () { return Dice.collection.forEach(function (dice) { return dice.reRoll(); }); });
$('#sum-dice').click(function () {
    var sum = Dice.collection.reduce(function (total, dice) {
        return total += dice.value;
    }, 0);
    console.log(sum);
});

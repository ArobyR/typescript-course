var Car = /** @class */ (function () {
    function Car(carType_, mark_, weight_, doorsNumber_, color_) {
        this.carType = carType_;
        this.mark = mark_;
        this.weight = weight_;
        this.doorsNumber = doorsNumber_;
        this.color = color_;
        console.log(this, '\nThis Object');
    }
    Car.prototype.running = function () {
        return;
    };
    return Car;
}());
var tesla = new Car('Electric', 'Tesla', 1900, 2, 'Red');

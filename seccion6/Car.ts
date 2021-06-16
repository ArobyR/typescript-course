class Car {
  mark: string;
  weight: number;
  doorsNumber: number;
  color: string;
  carType: string;

  constructor(
    carType_: string,
    mark_: string,
    weight_: number,
    doorsNumber_: number,
    color_: string
  ) {
    this.carType = carType_;
    this.mark = mark_;
    this.weight = weight_;
    this.doorsNumber = doorsNumber_;
    this.color = color_;
    console.log(this, "\nThis Object");
  }

  running(): void {
    return;
  }
}

const tesla = new Car("Electric", "Tesla", 1900, 2, "Red");

class Vehicle {
  // color: string;

  // constructor(color: string) {
  //   this.color = color;
  // }

  // we can use the modifier in fn parameter 
  // as a shortcut to the code written before 
  // to avoid repetition
  constructor(public color: string) {}

  protected drive(): void {
    console.log("beep");
  }

  protected honk(): void {
    console.log("honk");
  }
}

const vehicle = new Vehicle('red');
console.log(vehicle.color);

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }

  drive(): void {
    console.log("vroom");
  }
  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }  
}

const car = new Car(4, 'red');
car.startDrivingProcess();
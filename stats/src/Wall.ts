interface Shape {
  area(): number;
}

export class Wall {
  color: string;
  shape: Shape;

  constructor(color: string, shape: Shape) {
    this.color = color;
    this.shape = shape;
  }

  area() {
    return this.shape.area();
  }
}

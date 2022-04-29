export class Circle {
  ray: number;
  pi: number = 3.14;

  constructor(ray: number) {
    this.ray = ray;
  }

  area() {
    return this.ray * this.ray * this.pi;
  }
}

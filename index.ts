interface Point {
  x: number;
  y: number;
}

const p1: Point = {
  x: 5,
  y: 4,
};

const p2 = {
  x: 5,
  y: 3,
  z: 3,
};

const example: Point[] = [];

example.push(p1);
example.push(p2);

example.map((point) => point.x);

const exampleFunction = (element: T) => element;

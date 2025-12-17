export default function identity(...points) {
  return points;
}

export function dist(a, b) {
  const [x1, y1] = a;
  const [x2, y2] = b;

  return Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
}

export function sin(x) {
  return Math.sin(x);
}

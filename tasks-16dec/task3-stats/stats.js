export default function identity(...args) {
  return args;
}

export function mean(items) {
  let sum = 0;
  const n = items.length;

  if (n === 0) {
    return 0;
  }

  for (const x of items) {
    sum += x;
  }

  return sum / n;
}

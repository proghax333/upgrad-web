export const add = (a, b) => a + b;
export const sub = (a, b) => a - b;
export const mul = (a, b) => a * b;
export const div = (a, b) => a / b;

// redundant template literal
export const formatted = (num, toFixed) => `${num.toFixed(toFixed)}`;

export const printFormatted = (num, toFixed) => {
  return console.log(`Num = ${formatted(num, toFixed)}`);
};

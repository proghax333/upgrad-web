/*
  1. You have an array of objects representing
    people with their names and ages. You need to
    create an array of just the names.
*/
function extractNames(items) {
  return items.map((item) => item.name);
}

const items1 = [
  {
    name: "John Doe",
    age: 30,
  },
  {
    name: "Jane Doe",
    age: 30,
  },
];

console.log("1. Names = ", extractNames(items1));

/*
  2. Use the map function to create an
    array of names from the people array.
*/
function getAdults(people) {
  return people.filter((p) => p.age >= 18);
}

{
  const people = [
    {
      name: "John Doe",
      age: 12,
    },
    {
      name: "Jane Doe",
      age: 10,
    },
    {
      name: "Joette Doe",
      age: 35,
    },
  ];

  console.log("2. Adults = ", getAdults(people));
}

/*
  3. Implement a function `findMax`
    that returns the maximum number in
    an array using the `reduce` method.
*/
function findMax(items) {
  return items.reduce((a, n) => Math.max(a, n), Number.MIN_VALUE);
}

{
  const nums = [1, 2, 3, 4, 5, 4, 3];

  console.log("3. findMax: ", findMax(nums));
}

/*
  4. Create a function `doubleNumbers` that
    takes an array of numbers and returns a
    new array with each number doubled.
*/
function doubleNumbers(items) {
  return items.map((x) => x * 2);
}

{
  const nums = [1, 2, 3, 4];
  console.log("4. doubleNumbers: ", doubleNumbers(nums));
}

/*
  5. Create a function `removeDuplicates` that takes
    an array and returns a new array with duplicate
    values removed.
*/
function removeDuplicates(items) {
  return items.reduce(
    ({ visited, result }, v) => {
      if (!visited.includes(v)) {
        return {
          visited: visited.concat(v),
          result: result.concat(v),
        };
      }

      return { visited, result };
    },
    { visited: [], result: [] }
  ).result;
}

{
  const nums = [1, 2, 3, 1, 2, 1, 4, 5, 5, 0];
  console.log("5. removeDuplicates: ", removeDuplicates(nums));
}

/*
  6. Write a function `mergeObjects` that takes
    an array of objects and merges them into a
    single object. If the same key appears in multiple
    objects, the value from the last object with that
    key should be used.
*/
function mergeObjects(objects) {
  return objects.reduce((a, v) => {
    Object.assign(a, v);
    return a;
  }, {});
}

{
  const a = {
    a: 1,
  };

  const b = {
    b: 2,
  };

  const c = {
    c: 3,
  };

  const ad = {
    a: 100,
    d: 300,
  };

  console.log("6. mergeObjects: ", mergeObjects([a, b, c, ad]));
}

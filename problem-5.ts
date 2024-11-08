/**
 *  **Problem 5:**
 *  > Write a generic function getProperty that takes an object and a property name as arguments and returns
 *  the property value. Add a constraint to ensure the property name exists on the object.
 * ---
 *  - Sample Input 1: `const person = { name: "Alice", age: 30 }
 *       console.log(getProperty(person, "name"))`
 * ---
 *  - Sample Output 1: `Alice`
 * ---
 *
 */

const getProperty = <X, Y extends keyof X>(obj: X, key: Y) => {
  return obj[key];
};

const person = { name: "Alice", age: 30 };
console.log(getProperty(person, "name"));

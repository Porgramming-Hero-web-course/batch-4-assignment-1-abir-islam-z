/**
 *  **Problem 8:**
 * > Create a function validateKeys(obj: T, keys: (keyof T)[]) that takes an object obj and an
 * array of keys. The function should return true if all of the specified keys exist in the object;
 * otherwise, it should return false.
 * ---
 *  - Sample Input 1: `const person = { name: "Alice", age: 25, email: "alice@example.com" }
 *    console.log(validateKeys(person, ["name", "age"]))`
 * ---
 *  - Sample Output 1: `true`
 * ---
 *
 */

const validateKeys = <T, Q extends keyof T>(obj: T, keys: Q[]): obj is T => {
  if (obj && typeof obj === "object") {
    return keys.every((key) => key in obj);
  }
  return false;
};

const person = { name: "Alice", age: 25, email: "alice@example.com" };
console.log(validateKeys(person, ["name", "age"]));

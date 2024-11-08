/**
 *  **Problem 7:**
 * > Create a TypeScript class Car with properties make, model, and year. Include a method getCarAge that
 * returns the car's age based on the current year.
 * ---
 *  - Sample Input 1: `const car = new Car("Honda", "Civic", 2018)
 *    car.getCarAge()`
 * ---
 *  - Sample Output 1: `6 (assuming current year is 2024)`
 * ---
 *
 */

class Car {
  protected make: string;
  protected model: string;
  protected year: number;

  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  getCarAge() {
    const age = new Date().getFullYear() - this.year;
    console.log(age);
  }
}

const car = new Car("Honda", "Civic", 2018);

car.getCarAge();

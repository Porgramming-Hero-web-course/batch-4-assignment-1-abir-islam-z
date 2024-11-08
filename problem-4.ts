/**
 *  **Problem 4:**
 *  > Define a union type Circle and Rectangle, where each type has a unique shape property.
 *  Create a function calculateShapeArea that uses type guards to calculate the area based on the shape type.
 *
 * ---
 *  - Sample Input 1: `const circleArea = calculateShapeArea({ shape: "circle", radius: 5 })`
 * ---
 *  - Sample Output 1: `78.54`
 * ---
 * - Sample Input 2: `const rectangleArea = calculateShapeArea({ shape: "rectangle", width: 4, height: 6,})`
 * ---
 * - Sample Output 2: `24`
 * ---
 */

type Rectangle = {
  shape: "rectangle";
  width: number;
  height: number;
};

type Circle = {
  shape: "circle";
  radius: number;
};

const calculateShapeArea = (
  shapeItem: Rectangle | Circle
): number | undefined => {
  if ("shape" in shapeItem && shapeItem.shape === "rectangle") {
    const area: number = shapeItem.width * shapeItem.height;
    return area;
  } else if (shapeItem.shape === "circle") {
    const pi: number = 3.1416;
    const area = pi * shapeItem.radius * shapeItem.radius;
    return area;
  } 
};

console.log(calculateShapeArea({ shape: "circle", radius: 5 }));
console.log(calculateShapeArea({ shape: "rectangle", width: 4, height: 6 }));

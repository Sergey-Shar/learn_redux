
// Rounds a number to two decimal places
/**
 * Rounds a number to two decimal places
 * @param {number} number - The number to be rounded
 * @returns {number} The rounded number
 */
export function round(number) {
  // Multiply the number by 100 and round to the nearest integer
  const rounded = Math.round(number * 100);

  // Divide the rounded number by 100 to get the number rounded to two decimal places
  return rounded / 100;
}

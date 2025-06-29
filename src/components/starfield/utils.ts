/**
 * Utility function for generating random integers within a range
 * @param a - Length of side A
 * @param y - Length of side B
 */
export const randomIntFromInterval = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

/**
 * Utility function to calculate the diagonal (distance from origin) given two sides
 * @param a - Length of side A
 * @param y - Length of side B
 */
export const calcDiagonal = (a: number, b: number): number => {
  return Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
};

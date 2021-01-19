/**
 * Factorial
 * @param {number} n
 * @returns {number}
 */
function factorial(n) {
  if(typeof n !== 'number' || n < 0) {
    console.log('Введите целое неотрицательное число.');
    return;
  }

  if(n === 0) return 1;

  let result = n;
  for (let i = n - 1; i >= 1; i--) {
    result *= i;
  }
  return result;
}

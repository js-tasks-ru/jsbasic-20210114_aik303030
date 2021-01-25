/**
 * Складываем зарплаты
 * @param {Object} salaries - объект зарплат
 * @returns {Number}
 */

function sumSalary(salaries) {
  let sum = 0;
  for (let prop in salaries) {
    if (typeof salaries[prop] === 'number' && !isNaN(salaries[prop]) && Math.abs(salaries[prop]) !== Infinity) {
      sum += salaries[prop];
    }
  }
  return sum;
}

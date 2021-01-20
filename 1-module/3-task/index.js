/**
 * ucFirst
 * @param {string} str
 * @returns {string}
 */
function ucFirst(str) {
  if(typeof str != 'string') {
    console.log('Неправильный тип данных, введите строку.');
    return;
  }
  if(str === '') return '';
  return str[0].toUpperCase() + str.slice(1);
}
/**
 * checkSpam
 * @param {string} str base
 * @returns {boolean}
 */
function checkSpam(str) {
  if(typeof str != 'string') {
    console.log('Неправильное значение: введите строку.');
    return;
  }
  const string = str.toLowerCase();
  if(string.includes('1xbet') || string.includes('xxx')) return true;
  return false;
}
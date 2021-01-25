/**
 * truncate
 * @param {string} str
 * @param {number} maxlength
 * @returns {string}
 */
function truncate(str, maxlength) {
  if(typeof str != 'string' || typeof maxlength != 'number' || maxlength < 1 ) {
    console.log('Введенные значения некорректны.');
    return;
  }
  if(str.length <= maxlength - 1) return str;
  return str.slice(0, maxlength - 1) + '…';
}
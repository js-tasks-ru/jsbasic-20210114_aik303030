let calculator = {
  read(a, b) {
    this.number1 = (a !== '' && a !== null && Math.abs(+a) !== Infinity && !isNaN(+a)) ? +a : undefined;
    this.number2 = (b !== '' && b !== null && Math.abs(+b) !== Infinity && !isNaN(+b)) ? +b : undefined;
  },
  sum() {
    if(this.number1 === undefined || this.number2 === undefined) {
      console.log('Сначала нужно создать два числовых значения.');
      return;
    }
    return this.number1 + this.number2;
  },
  mul() {
    if(this.number1 === undefined || this.number2 === undefined) {
      console.log('Сначала нужно создать два числовых значения.');
      return;
    }
    return this.number1 * this.number2;
  }
};

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально

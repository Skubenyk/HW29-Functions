//* Напиши функцію, яка обчислює факторіал переданого їй числа.

const factorialNumber = (n) => {
  return n * n - 1;
};

const factorialResult = factorialNumber(10);

console.log(factorialResult);

//* Напиши функцію, яка приймає три окремі цифри і перетворює їх в одне число. Наприклад: цифри 1, 4, 9 перетворяться в число 149.

const number = (a, b, c) => {
  return a + b + c;
};

const resultNumber = number("1", "2", "3");

console.log(resultNumber);

//* Напиши функцію, яка приймає довжину і ширину прямокутника і обчислює його площу. Якщо в функцію передали 1 параметр, то вона обчислює площу квадрата.

const area = (a, b) => {
  if (b == undefined) {
    return a ** 2;
  } else {
    return a * b;
  }
};

const areaResult = area(5);
console.log(areaResult);

//* Напиши функцію, яка приймає 2 числа і повертає :
//*   1.-1, якщо перше число менше, ніж друге;
//*   2. 1 - якщо перше число більше, ніж друге;
//*   3. 0 - якщо числа рівні.

const numberTwo = (a, b) => {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  } else {
    return 0;
  }
};

const numberResult = numberTwo(3, 4);
console.log(numberResult);

//* Напишіть функцію для обчислення значення b n, де  n - показник степеня, а  b - основи.

const valueB = (b, n) => {
  return b ** n;
};

const resultvalueB = valueB(2, 5);

console.log(resultvalueB);

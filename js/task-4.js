/*Задание 4
Задание 4
Напиши функцию countTotalSalary(employees) принимающую объект зарплат. Функция считает общую сумму запрплаты работников и 
возращает ее. Каждое поле объекта, передаваемого в функцию, имеет вид "имя":"зарплата".

const countTotalSalary = function(employees) {
  // твой код
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 
console.log(countTotalSalary({})); // 0

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  }),
); // 330

console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150,
  }),
); // 400*/

console.log('------------------task4 start-------------------');

const countTotalSalary = function(employees) {
  const salaries = Object.values(employees);
  let allSalaries = 0;
  for (const salary of salaries) {
    allSalaries += salary;
  }
  return allSalaries;
};

console.log(countTotalSalary({})); // 0

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  }),
); // 330

console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150,
  }),
); // 400

console.log('------------------task4 end---------------------');
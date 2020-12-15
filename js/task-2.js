/* Задание 2
Напиши функцию countProps(obj), считающую кол-во свойств в объекте. Функция возвращает число - количество свойств.

const countProps = function(obj) {
  // твой код
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 
console.log(countProps({})); // 0

console.log(countProps({ name: 'Mango', age: 2 })); // 2

console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3*/

console.log('------------------task2 start-------------------');

const countProps = function(obj) {
  const keys = Object.keys(obj);
  return keys.length;
};

console.log(countProps({})); // 0

console.log(countProps({ name: 'Mango', age: 2 })); // 2

console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 }));

console.log('------------------task2 end---------------------');
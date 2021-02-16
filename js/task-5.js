/*Задание 5
Напиши функцию getAllPropValues(arr, prop), которая получает массив объектов и имя свойства. Возвращает массив значений 
определенного свойства prop из каждого объекта в массиве.

const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 2 },
];

const getAllPropValues = function(arr, prop) {
  // твой код
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 
console.log(getAllPropValues(products, 'name')); // ['Радар', 'Сканер', 'Дроид', 'Захват']

console.log(getAllPropValues(products, 'quantity')); // [4, 3, 7, 2]

console.log(getAllPropValues(products, 'category')); // [] */

console.log('------------------task5 start-------------------');

const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 2 },
];

const getAllPropValues = function(arr, prop) {
    const resultArr = [];
    for (const obj of arr) {
      if (obj[prop]) {  // это проверка на null или undefined, почему вы отметили как ошибку? Если убрать как вы показали в скриншоте, то в 
                        // последней проверке будет массив из четырех undefined, что не есть пустой массив
                        // а в моем случае аутпут правильный, и в массив ничего не кладется.
                        // Вопрос: это в задании неточность? 
            resultArr.push(obj[prop]);
        }
    }
    return resultArr;
};

console.log(getAllPropValues(products, 'name')); // ['Радар', 'Сканер', 'Дроид', 'Захват']

console.log(getAllPropValues(products, 'quantity')); // [4, 3, 7, 2]

console.log(getAllPropValues(products, 'category')); // [] 

console.log('------------------task5 end---------------------');
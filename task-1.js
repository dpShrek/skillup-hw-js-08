//Используя rest оператор и деструктуризацию, создать функцию, которая принимает любое количество аргументов и возвращает объект,
//содержащий первый аргумент и массив из остатка:

// func(‘a’, ‘b’, ‘c’, ‘d’) →
// {
//   first: ‘a’,
//   other: [‘b’, ‘c’, ‘d’]
// }

console.log('Задача № 1');



function takeFirst(first, ...arg) {
    let newObj = {
      first: first,
      other: arg,
    };
    return newObj;
  }
  
  console.log(takeFirst("a", "b", "c", 33));
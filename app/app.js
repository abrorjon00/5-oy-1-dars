// Foreach oid masalalr
// 1-misol
// let arr = [1, 2, 3 ,5 ,6]
// arr.forEach(function(value) {
//         console.log(value);
              
// })

// 2-misol
// let arr = [1, 2, 3 ,5 ,6]
// arr.forEach(function(value) {
//         console.log(value + 5);
              
// })

// 3-misol
// let arr = [1, 2, 3 ,5 ,6]
// arr.forEach(function(value) {
//     if (value % 2 == 1) {
//         console.log(value);
//     }
// })



// 4-misol
// let arr = [1, 2, 3 ,5 ,6]
// let coun = 0;
// arr.forEach(function(value) {
//     coun++
   
   
// })
// console.log(coun);


// 5-misol
// let arr = [1, 2, 3, 2, 7, 1]
// let coun = [];
// arr.forEach(function(value) {
//     coun.push(value)
     
// })
// console.log(coun);



// map oid masalalr
// 1-masala
// let arr = [1, 2, 3, 2, 7, 1]
// let coun = [];
// arr.map(function(value) {
//     coun.push(value * 2)
     
// })
// console.log(coun);


// 2-masala
// let arr = [1, 2, 3, 2, 7, 1]
// let coun = [];
// arr.map(function(value) {
//     coun.push(value ** 2)
     
// })
// console.log(coun);


// 4-misol
// let massiv = [1, -3, 5, 8, -2, 0]; 

// let yangiMassiv = massiv.map(function(value) {
//     return -value;
// });

// console.log(yangiMassiv)


// 5-misol
// let arr = [1, 2, 3, 2, 7, 1]
// let coun = [];
// arr.map(function(value) {
//     coun.push(value  + 3)
     
// })
// console.log(coun);



// Filter
// 1-misol
// let arr = [1, 2, 3, 2, 7, 8]

// let res = arr.filter(function(value) {
//     if (value % 2 == 1) {
//         return  value
//     }
// })
// console.log(res);



// 2-misol
// let arr = [1, 2, -3, -2, 7, 8]

// let res = arr.filter(function(value) {
//     if (value > 0) {
//         return  value
//     }
// })
// console.log(res);


// 3-misol
// let arr = ['olma', 'banana', 'kiwi', 'mandarin']
// let res = arr.filter(function(v) {
//    return v.length > 5
// });
// console.log(res);



// 4-misol
// let arr = [19, 12, 11, 20, 32]
// let res = arr.filter(function(v) {
//    return v > 18
// });
// console.log(res);


// 5-misol
// let arr = [9, 1, 11, 5, 2]
// let res = arr.filter(function(v) {
//    return v < 10
// });
// console.log(res);

// Find
// 1-misol
// let arr = [9, 1, 11, 1]
// let res = arr.find(function(v) {
//    return v > 10
// });
// console.log(res);


// 2-misol
// let arr = [-9, -1, -11, 1]
// let res = arr.find(function(v) {
//    return v > 0
// });
// console.log(res);


// 3-misol
// let arr = ['olma', 'banana', 'nok', 'kiwi']
// let res = arr.find(function(v) {
//    return v.length > 5
// });
// console.log(res);


// 4-misol
// let arr = [-9, -1, -11, 6]
// let res = arr.find(function(v) {
//    return v % 2 == 0
// });
// console.log(res);

// 5-misol
// let arr = [-9, -1, -11, 6]
// let res = arr.find(function(v) {
//    return v > 0
// });
// console.log(res);



// Every and some
// some
// 1-misol
// let arr = [-1, -2, -3, -3, -5]
// let res = arr.some(function(v) {
//     return v < 0
// })
// console.log(res);


// 2-misol
// let arr = [1, 2, 3, 3, 5]
// let res = arr.some(function(v) {
//     return v % 2 == 0
// })
// console.log(res);


// 3-misol
// let arr = ['apple', 'nokia', 'kia']
// let res = arr.some(function(v) {
//     return v == 'apple'
// })
// console.log(res);

// Every
// 4-misol
// let arr = [1, 2, 3 ,4 ,6]
// let res = arr.every(function(v) {
//     return v > 0
// })
// console.log(res);


// 5-misol
// let arr = ['aplle', 'kia', 'banan']
// let res = arr.every(function(v) {
//     return typeof v == 'string'
// })
// console.log(res);

// 6-misol
// let arr = [1, 2, 3 ,4 ,6]
// let res = arr.every(function(v) {
//     return v < 100
// })
// console.log(res);
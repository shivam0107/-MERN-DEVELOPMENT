// console.log(Math.random());
// primitive string 
let lastName = 'shivam';
// // object string
// let firstName = new String('love');

// let message  =
//  `this is
//   shivam 
//   ${lastName}, //place holder
//   singh
//   message`;

// console.log(message);

// let date = new Date();

// let date1 = new Date('june 20 1998 07:13');


// console.log(date1);

// let number = [1,4,2,3];

// console.log(number);


// number.push(9);
  // insertion at end
// console.log(number)
 
//  [1, 4, 2, 3, 9]

// number.unshift(8)
  // insertion at start

// console.log(number)
 
//  [8, 1, 4, 2, 3, 9]

// number.splice(2,0, 'a' , '3' , '9')
  // insertion at middle

// console.log(number)
 
//  [8, 1, 'a', '3', '9', 4, 2, 3, 9]


// console.log(number);

// console.log(number.indexOf('a')); //2

/// in case of absent it prints -1


// if(number.indexOf(4) != -1){
  // console.log('present');
// }


 
let courses = [
  {no:1 , naam : 'shivam'},
  {no:2 , naam:'rahul'}
];

// console.log(courses);


// console.log(courses.includes({no:1 ,naam:'shivam'}));

// let course  = courses.find(function(courses){
//   return courses.naam == 'shivam';
// })


let course  = courses.find(course =>courses.naam == 'shivam');

// console.log(course);


// let arr = [1,4,3,2,5];


// arr.pop();//remove from end 5 

// arr.shift();//remove from begining 1

// arr.splice(3,1);//remove from middle 2


// let arr1 = arr;
// arr = [];

// arr.length = 0;

// arr.splice(0 , arr.length);



// console.log(arr1);
// console.log(arr);

// let first = [1,2,3];

// let second = [4,5,6];

// let combine = first.concat(second);

// console.log(combine);


// let sliced = combine.slice(2,3);// 3

// console.log(sliced);


// spread operator
// let first = [1,2,3];
// let second = [4,5,6];

// // let combined  = [...first,...second];
// let combined  = [...first ,'a',...second ,'b',true];
// console.log(combined);

// let another = [...combined];
// console.log(another);


// iterating an array

let arr = [10,20,30,40];

// for(let value of arr){
//   console.log(value);
// }
 

// arr.forEach(function(numbbers){
//   console.log(numbbers);
// });

// arr.forEach(numbbers => console.log(numbbers));


// joining of an array

// let numbers = [10,20,30,40,50];

// const join = numbers.join(',');
// console.log(join);


// spliting a string

// let message  = 'this is my string';

// let parts  =  message.split(' ');
// console.log(parts);

// let joined = parts.join('_');

// console.log(joined);


// filtering of array

// let numbers = [1,2,-3,-4];

// let filtered = numbers.filter(function(value){
//   return value >=0;

// });

// console.log(filtered);

//mapping of array

let numbers  = [7,8,9,10];

let items = numbers.map(function(value){
    return 'student_no' + value;
});

console.log(items);

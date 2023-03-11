console.log('kya haal bhai');


//function declaration
function run() {

    console.log('running');


}


// function call invoked
// run();

// function assignment

// stand();// hoisting works with function declaration not with 
//function assignment


// nemed funtion assignment
// let stand =  function walk()  {
//     console.log('walking');

// };

// anonymous function declaration 

// let stand2 =  function ()  {
//     console.log('walking');

// };

// stand();
// stand2();

// wlak();// walk is not defined

// let jump = stand();


// let x= 1;
// x ='a';

// console.log(x);



// function sum() {
    // console.log(arguments); is an special object

//     let total = 0;
//     for(value of arguments){
//         total = total+value;
//     }
//     return total;

// }


// console.log(sum(1,2));
// console.log(sum(1));
// console.log(sum(1,2,3,4));
// console.log(total);


//rest parameter
// function sum(num,value,...args){
//     console.log(args);

// }

// sum(1,2,3,4,5,6);


function intrest(p,r=5,y=9){
    return p*r*y/100;

}
// console.log(intrest(1000,10,5));

// let person = {
//     fname  : 'love',
//     lname :'babber',
//     get fullName(){
//         return `${person.fname} ${person.lname}`;
//     } ,

//     set fullName(value){

//         if(typeof value !== String){
//             throw new Error('you have not sent a string');
//         }

//         let parts = value.split(' ');
//         this.fname = parts[0];
//         this.lname = parts[1];


//     }

// };





// // getter--> access properties
// // setter --> change or mutate properties 
// // console.log(person);

// // person.fullName  = 'rahul kumar';


// try{
// person.fullName  = 1 ;

// }
// catch(e){
//     alert(e);
// }
// console.log(person.fullName);

// {
//     var a  = 5;
//     console.log(a);
// }
// console.log(a);


// function walk(){
//     var a =5;

// }

// console.log(a);


let arr = [1,2,3,4,5];

// let total = 0;
// for(let value of arr){
//     total = total + value;
// }

// console.log(total);


let totalSum =  arr.reduce((accumulator , currentValue) => accumulator + currentValue,0);
console.log(totalSum);

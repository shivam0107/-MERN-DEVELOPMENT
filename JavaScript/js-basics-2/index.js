
console.log('shivam singh');



// let rectangle1 = {
//     length : 1,
//     breath  :2,



//     draw:function() {
//         console.log('draw');
//     }
// };

// console.log(rectangle);


//factory function

// function createRectangle(len , bre){
    
//     let rectangle = {
//         length : len,
//         breath  :bre,   //poarameter

//         // length,
//         // breath,



//         draw:function() {
//             console.log('draw');
//         }
//     };

//   return rectangle;
// }


// let rectangleObj1 = createRectangle(5,4);




//construction function  -> Pascal Notation -->first letter of every word is capital


//construction function --> Prop/method ->initialize/define


// function Rectangle(len , bre)
// {
//     this.length =len;
//     this.braeth = bre;
//     this.draw = function(){
//         console.log('draw');
//     };
//  }


 //object creation using construction


//  let rectangleObject = new Rectangle(4,6);
//   rectangleObject.color = 'yellow';

//   console.log(rectangleObject);


//   delete rectangleObject.color;
//   console.log(rectangleObject);


// let Rectangle1  = new Function(

//     `length`, `breath`,` 
//     this.length =length;
//     this.braeth = breath;
//     this.draw = function(){
//         console.log('draw');
//     }`
// );

// let  rect = new Rectangle1(2,3);

// rect.length;

// console.log(rect);


// let a = 10;
// let b = a;

// a++;

// console.log(a);
// console.log(b);


// let a = {

//     value:10
// };


// let b = a;
// a.value++;

// console.log(a);
// console.log(b);


// let a =10;

// function inc(a){
//     a++;
// }

// inc(a);

// // console.log(a)


// let a = { value:10};

// function inc(a){
//     a.value++;

// }

// inc(a);

// console.log(a.value);

/// for- in loop


let rectangle ={
    length:2,
    breath:1

};

// for(let key in rectangle){
//     console.log(key,rectangle[key]);

// }


// for(let key of Object.entries(rectangle)){   //keys
//     console.log(key);

// // }

// if('length' in rectangle ){
//     console.log('preset');

// }
// else{
//     console.log('not present');
// }



//cloning 1
let src = {
    a:10,
    b:20,
    c:30
};


// let dest = {

// };

// for(let key in src){
//     dest[key] = src[key];

// }

// console.log(dest);


//Cloning-2

let src2 = {  value :25};

// let dest = Object.assign({},src,src2);

// console.log(dest);

// src.a++;
// console.log(dest);
// console.log(src);


// Cloning-3

let dest = {...src}

console.log(dest);

src.a++;

console.log(dest);

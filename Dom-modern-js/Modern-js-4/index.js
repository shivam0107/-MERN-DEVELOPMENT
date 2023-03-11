// console.log('babber');
// function sync(){
//     console.log('first');

// }

// sync();

// console.log('second');


// setTimeout(function(){
//     console.log('third');

// },10000);

// console.log('babber');
// function sync(){
//     console.log('first');

// }

// sync();

// console.log('second');










// PROMISE




// let  merapromise1 =  new Promise(function(resolve,reject){
//     // console.log('i am inside promise');
//     // resolve(1998);


//     setTimeout(function(){
//         console.log('i am inside the promise ');

//     },5000);

        

//     // resolve(2233);
//     reject(new Error('bhaishab error aaye hai'));
// });

// merapromise1.then((value) => { console.log(value)} , (error) => { console.log('recieved an error' )});
// merapromise1.catch();

// let  merapromise2 =  new Promise(function(resolve,reject){
//     // console.log('i am inside promise');
//     // resolve(1998);


//     setTimeout(function(){
//         console.log('i am inside the promise ');

//     },3000);

//     // resolve(2233);
//     // reject(new Error('bhaishab error aaye hai'));
// });





// console.log('pehla');

/// multiple promise are connected to each other

// let pehlaPromise = new Promise(function(resolve, reject){
//     setTimeout(() => {
//         console.log('setTimeout1 started');

//     },2000 );

//     resolve(true);

// });


// let output = pehlaPromise.then(() => {
//     let dusraPromise = new Promise(function(resolve,reject){
//         setTimeout(() => {
//             console.log('setTimeout2 started');
    
//         },3000 );

//         resolve('dusra promise resolve');

//     });

//     return dusraPromise;
// });


// output.then((value) => console.log(value));




//  ASYNC function  AWAIT 


// async function abcd() {

//     return 7;

// }



// interdependend promise 


// async function utility(){



// let delhiMausam  =  new Promise((resolve , reject) => {
//     setTimeout(()  => {
//         resolve('delhi me bahut garmi hai');

//     } ,10000);
// });

// let hydMausam  =  new Promise((resolve , reject) => {
//     setTimeout(()  => {
//         resolve('hyderabaad is cool');

//     } ,20000);
// });


// let dM = await delhiMausam;
// let hM = await hydMausam;

// return [dM ,hM];



// }

// async function utility(){

// let content = await fetch('https://jsonplaceholder.typicode.com/posts/1');
//     let output  = await content.json();

    
    
//     console.log(output);


// }

// utility();

// async function  helper()
// {
//         let options = {
//             method: 'POST',
//             body: JSON.stringify({
//             title: 'shivam',
//             body: 'Tagdi Body',
//             userId: 1998,
//             weight: 90,
//             }),
//             headers: {
//             'Content-type': 'application/json; charset=UTF-8',
//             },
//         };


//         let content   = await fetch('https://jsonplaceholder.typicode.com/posts',options);
//         let response = content.json();
//         return response;

//  }


// async function utility() {

//     let ans =  await helper();
//     console.log(ans);
// }


// utility();


// CLOSURES


function init() {
    let name = "Mozilla"; // name is a local variable created by init
    function displayName() {
      // displayName() is the inner function, that forms the closure
      console.log(name); // use variable declared in the parent function
    }
    return displayName;
  }
   let a  =  init();


   a();
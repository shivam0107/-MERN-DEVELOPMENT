
// // adding 100 para
// const t1  = performance.now();

// for(let i=1; i<=100; i++)
// {

//     let newElement = document.createElement('p');
//     newElement.textContent = 'This is Para' + i;

//     document.body.appendChild(newElement);


// }

// const t2  = performance.now();

// console.log('this took ' + (t2-t1) +'ms');
// //optising a bit

// const t3 = performance.now();

// let  myDiv = document.createElement('div');


// for(let i=1; i<=100; i++){
//     let element = document.createElement('p');
//     element.textContent = 'this is para'  + i;


//     myDiv.appendChild(element);


// }

// document.body.appendChild(myDiv);

// const t4  = performance.now();

// console.log('this took next ' + (t4-t3) +'ms');

// // DOCUMENT FRAGMENT
 
// let fragment = document.createDocumentFragment();

// for(let i=1; i<=100; i++)
// {

//     let newElement = document.createElement('p');
//     newElement.textContent = 'This is Para' + i;

//     document.body.appendChild(newElement);


// }

// document.body.appendChild(fragment);// 1 reflow 1 repaint




//EVENT LOOP
// //PHILIP ROBERT - LOUPE TOOOL

// function addaPara(){
//     let para = document.createElement('p');

//     para.textContent = 'js is single';
//     document.body.appendChild(para);

// }

// function appendNewMessage() {
//     let para = document.createElement('p');
//     para.textContent = 'kya haal chaal';
//     document.body.appendChild(para);

// }

// addaPara();
// appendNewMessage();

// document.addEventListener('click' , function(){
//     console.log('hello bhaoya');
// });





// function eventFunction(){
//     console.log('I have Clicked on document');

// }

// document.addEventListener("click" ,eventFunction);
// document.removeEventListener("click" ,eventFunction);
//it will remove the eventListener because it refers to the
//same object

// but-----------------

// document.addEventListener('click',function(){
//     console.log('I have Clicked on document');

// } );


// document.removeEventListener('click',function(){
//     console.log('I have Clicked on document');
// });



// const  content = document.querySelector('#wrapper');

// content.addEventListener('click' , function(event){
//     console.log(event);
// });




// the default action
// prevent event action

// let links = document.querySelectorAll('a');

// let thirdLink = links[2];

// thirdLink.addEventListener('click' , function(event){
//     event.preventDefault();
//     console.log('maja aaya accha laga');
// });




//  EVENT LOOP
// let myDiv = document.createElement('div');

// function paraStatus(event){
//     console.log('para' + event.target.textContent);
   
// }

// myDiv.addEventListener('click' , paraStatus);


// for(let i=1; i<=100; i++){
//     let newElement = document.createElement('p');
//     newElement.textContent  = 'this is para'+ i;

//     myDiv.appendChild(newElement);
// }
// document.body.appendChild(myDiv);





let element = document.querySelector('#wrapper');

element.addEventListener('click' , function(event){

    if(event.target.nodeName === 'SPAN'){
        console.log('para' + event.target.textContent);

    }

    // console.log('span pr click kiya hai' + event.target.textContent);
});
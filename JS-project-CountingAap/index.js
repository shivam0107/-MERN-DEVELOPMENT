let countMinus = document.querySelector('#negetive');
let countPlus = document.querySelector('#positive');
let countValue = document.querySelector('#counter');



// USING BUTTON ONCLIC PROPERTY

// const increment = () =>{

//     // get the value from UI
//     let value  = parseInt(countValue.innerText);

//     //update the Value
//     value = value+1;

//     // set the value on to UI
//     countValue.innerText = value;

// };


// const decrement = () =>{
//         // get the value from UI
//         let value  = parseInt(countValue.innerText);

//         //update the Value
//         value = value-1;

//         // set the value on to UI
//         countValue.innerText = value;

// };



// USING ADD EVENTLISTENER

countPlus.addEventListener('click' , function(){
    //get the value from UI
    let value  = parseInt(countValue.innerText);

    //update the Value
    value = value+1;

    // set the value on to UI
    countValue.innerText = value;

});


countMinus.addEventListener('click' , function(){
    //get the value from UI
    let value  = parseInt(countValue.innerText);

    //update the Value
    value = value-1;

    // set the value on to UI
    countValue.innerText = value;
    
});
//synchronus nature

// console.log("shivam singh");
// console.log("one");
// console.log("software engineer");

// // asynchronus nature

// // async function

// setTimeout(() => {
//     console.log("set time out");
// }, 3000);


// call back concept

function getChees(callback) {
    setTimeout(() => {
        const chees = '🧀';
        console.log("here is chees",chees);
        // return chees;

        callback(chees);

    }, 3000);
}

function makeDough(chees , callback) {
    setTimeout(() => {

        const dough = chees + '🍩';
        console.log('here is the dough' , dough);

        callback(dough);


    }, 3000);
}

function bakePizza(dough , callback) {
    setTimeout(() => {

        const pizza = '🍕';
        console.log('here is the pizza' , pizza);

        callback(pizza);


    }, 3000);
}




// console.log(getChees());

getChees((chees) => {
        console.log('got my chees' , chees);
    
    makeDough(chees, (dough) => {
        console.log('got my dough' , dough);

        bakePizza(dough, (pizza) => {
            console.log('got my pizza' , pizza);

            // this nesting becomes the callback hell it cause readability and debugging 
            // to avoid thid we came with the concept promises and async await
            
        })

    })

});


// 
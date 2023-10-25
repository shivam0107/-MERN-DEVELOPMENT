// promises

//in javascript  a promise is a good way to handle
//asynchronus operation.it is used to find out if the asynchronus operation
// successfully completed or not
//

// promise may have three type

// 1 - Pending
// 2 - fulfilled
// 3 - rejected

// function getChees() {
//     setTimeout(() => {
//         const chees = '🧀';

//     }, 3000)
// }


//creation of promise

// const ticket = new Promise(function (resolv, reject) {
//     const isBoarded = false;
//     if (isBoarded) {
//         resolv('you are not in the flight');
//     }
//     else {
//         reject('your flight has been cancelled');
//     }
// })


// ticket.then((data) => {
//     console.log('whoo');

// }).catch((data) => {
//     console.log('oh no -> ',data);

// }).finally(() => {
//     console.log('it will always executed');
// });


//some method using in promise

// then() method

// method is used with the callback when the promise is
// successfully fullfilled or resolve


// catch() method

// the catch() method is used with the callback when the promise id rejected
// or if an error occurs

// finally() method

// the finally() method gets executed when the promise is either
// resolved successfully or rejected




// chalo pizza banate hai

function getChees() {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
        const chees = '🧀';
        console.log("here is chees",chees);
            // resolve(chees);
            reject('bad chees');
        }, 3000);
        

    })
    
}



function makeDough(chees) {
     return new Promise((resolve, reject) => {

        setTimeout(() => {
        const dough = chees + '🍩';
        console.log("here is dough",dough);
            resolve(dough);
        }, 3000);
        

    })
}



function makePizza(dough) {
     return new Promise((resolve, reject) => {

        setTimeout(() => {
        const pizza = dough + '🍕';
        console.log("here is pizza",pizza);
            resolve(pizza);
        }, 3000);
        

    })
}

// makeDough(chees).then((dough) => {
    //     console.log("here is dough",dough);
            
    //     makePizza(dough).then((pizza) => {
    //     console.log("here is pizza",pizza);
                
    // })
    
    

    // })

getChees()
    .then((chees) => {
        console.log("here is chees", chees);
        return makeDough(chees);
    })
    .then((dough) => {
        console.log("here is dough", dough);
        return makePizza(dough);
    })
    .then((pizza) => {
        console.log("here is pizza", pizza);

    })
    .catch((data) => {
        console.log('error ocuured' , data);
    })
    .finally((data) => {
        console.log('mai to chalega hi...');
    })
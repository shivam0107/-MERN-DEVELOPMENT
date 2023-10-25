

// chalo pizza banate hai

function getChees() {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
        const chees = '🧀';
        console.log("here is chees",chees);
            resolve(chees);
            // reject('bad chees');
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


async function orderPizza(){
    try {
        const chees = await getChees();
        console.log(chees);
        const dough = await makeDough();
        console.log(dough);
        const pizza = await makePizza();
        console.log(pizza);
    }
    catch (data) {
        console.log('kuch to galat hai check karo',data);
    }
}


orderPizza();
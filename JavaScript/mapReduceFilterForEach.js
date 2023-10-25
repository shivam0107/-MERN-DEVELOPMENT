
//forEach------------------------------------------>

// const coding = ["js", "shivam", "c++", "java"];

// const code = coding.forEach((code) => {
//     console.log(code);
    
//     return code;//for each does not return anything
// })

// console.log(code);


//filter------------------------------------------------------>

const nums = [1, 2, 3];

// const num = nums.filter((num) => {
//    return  num>4
// });

// console.log(num);

// const newNums = [];

// nums.forEach((num) => {
//     if (num > 4) {
//         newNums.push(num);
//     }
   
// })

// console.log(newNums);


//map ----------------------------------->


// const num = nums.map((num) => num + 10)


// chaining in map --------------------------------------------->

// const num = nums
//     .map((num) => num * 10)
//     .map((num) => num + 1)
//     .filter((num) => num>30)

// console.log(num);



// reduce ------------------------------------>

const myTotal = nums.reduce(function (acc, curVal) {
   console.log(`acc: ${acc} and curVal: ${curVal}`);
   
    return acc + curVal
}, 0)

console.log(myTotal);
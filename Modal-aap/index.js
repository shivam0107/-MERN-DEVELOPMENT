// const modal = document.querySelector(".modal");
// const overlay = document.querySelector(".overlay");

// let openModal = document.querySelector("#openModal");
// let closeModal = document.querySelector("#closeModal");


const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

//   Modal open function
const openModal = () => {
  console.log("Modal is Open");
  modal.classList.add("active");
  overlay.classList.add("overlayactive");
};

// Modal close function
const closeModal = () => {
  modal.classList.remove("active");
  overlay.classList.remove("overlayactive");
};

// openModal.addEventListener('click' , function(){
//     console.log("Modal is Open");
//         modal.classList.add("active");
    
//          overlay.classList.add("overlayactive");

// });

// closeModal.addEventListener('click' , function(){
//     // console.log("Modal is Open");
//         modal.classList.remove("active");
    
//          overlay.classList.remove("overlayactive");

// });




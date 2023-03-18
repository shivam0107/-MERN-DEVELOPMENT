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


var typeData = new Typed(".role",{
  strings: [
      "Full Stack developer",
      "Web Developer",
      "React-Developer",
      "Backend Developer",
      "Coder",

  ],
  loop:true,
  typeSpeed:100,
  backSpeed:80,
  backDelay:1000,
}

);
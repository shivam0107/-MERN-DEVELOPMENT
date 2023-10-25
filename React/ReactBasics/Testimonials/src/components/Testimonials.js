import { useState } from "react";
import Cards from "./Cards";
import { VscChevronLeft, VscChevronRight } from "react-icons/vsc";


function Testimonials(props) {

    let reviews = props.reviews;
    const [index, setIndex] = useState(0);


    function leftShiftHandler() {
        if (index - 1 < 0) {
            setIndex(reviews.length - 1);
        }
        else {
            setIndex(index - 1);
        }
        
    }

    function rightShiftHandler() {
        if (index + 1 >= reviews.length) {
          setIndex(0);
        } else {
          setIndex(index+1);
        }

    }

    function surpriseHandler() {
        let randomIndex = Math.floor(Math.random() * reviews.length);
        setIndex(randomIndex);
    }


    return (
        <div className="w-[85vw] bg-white md:w-[700px] flex flex-col justify-center 
       transition-all duration-700 items-center p-10 mt-10 rounded-md hover:shadow-xl ">
        <Cards reviews={reviews[index]} />

        <div className="flex justify-center text-3xl mt-5 gap-3 text-violet-400 font-bold">
          <button
            onClick={leftShiftHandler}
            className="cursor-pointer hover:text-violet-500"
          >
            <VscChevronLeft />
          </button>
          <button
            onClick={rightShiftHandler}
            className="cursor-pointer hover:text-violet-500"
          >
            <VscChevronRight />
          </button>
        </div>

        <div>
          <button
            onClick={surpriseHandler}
            className="bg-violet-400 hover:bg-violet-500 transition-all duration-200 cursor-pointer px-10 py-2 rounded-md 
        font-bold text-lg text-white mt-4 "
          >
            Surprise Me
          </button>
        </div>
      </div>
    );
}




export default Testimonials;
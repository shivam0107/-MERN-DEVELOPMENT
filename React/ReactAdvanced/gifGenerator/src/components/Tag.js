import { useEffect, useState } from "react";
import axios from "axios";
import { Spinner } from "./Spinner";
import useGif from "../hooks/useGif";

  const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

export default function Tag() {



  const [tag , setTag] = useState('car')

 

  
  const { gif, loading, fetchData } = useGif(tag);

  function clickHandler() {
    fetchData(tag);
  }

  function changeHandler(event) {
    setTag(event.target.value)
  }

  return (
    <div
      className="w-1/2  flex flex-col items-center
    gap-y-5 mt-[15px]  bg-blue-400 border border-black rounded-lg"
    >
      <h1 className=" mt-[15px] text-2xl underline font-semibold">
        RANDOM {tag} GIF
      </h1>
      {loading ? <Spinner /> : <img src={gif} width="450" />}

      <input
        className="text-black font-semibold py-2 text-center rounded-md hover:bg-red-200 bg-rose-100 w-10/12 mb-[20px] "
        onChange={changeHandler}
        value={tag}

      />

      <button
        onClick={clickHandler}
        className="text-black font-semibold  rounded-md hover:bg-red-200 bg-rose-100 w-10/12 mb-[20px] "
      >
        GENERATE
      </button>
    </div>
  );
}

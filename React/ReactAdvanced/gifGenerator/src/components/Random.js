import react  from "react";
import { Spinner } from "./Spinner";
import useGif from "../hooks/useGif";


export default function Random() {

  const {gif, loading, fetchData } = useGif();




  return (
    <div
      className="w-1/2  flex flex-col items-center
    gap-y-5 mt-[15px]  bg-green-400 border border-black rounded-lg"
    >
      <h1 className=" mt-[15px] text-2xl underline font-semibold">
        A RANDOM GIF
      </h1>
      {loading ? <Spinner /> : <img src={gif} width="450" />}

      <button
        onClick={() => fetchData()}
        className="text-black font-semibold  rounded-md hover:bg-red-200 bg-rose-100 w-10/12 mb-[20px] "
      >
        GENERATE
      </button>
    </div>
  );
}

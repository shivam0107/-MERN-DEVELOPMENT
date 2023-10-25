import Random from "./components/Random";
import Tag from "./components/Tag";

export default function App() {
  return (
    <div className=" flex flex-col  items-center
     relative background">
      <h1
        className="bg-white mt-4 py-2 px-10 text-center text-3xl font-bold 
       w-11/12  rounded-md ">
        Random GIF
      </h1>
      <div className="flex flex-col w-full items-center gap-y-10 mt-5 ">
        <Random />
        <Tag />
      </div>
    </div>
  );
  
}

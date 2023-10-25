import { useState } from "react";
import "./App.css";

function App() {

     const [count, setCount] = useState(0);
    

  function decreaseHandler() {
      
    setCount(count - 1);
    
    }

  const increaseHandler = () => {
    
        setCount(count + 1);

        
    }

  function resetHandler() {
       setCount(0);
  }



  return (
    
     <section className="bg-[#344151] h-[100vh] w-full flex justify-center items-center">
       
         

            <div className="flex flex-col gap-5">
                <div className="heading">
                    <h2 className="text-cyan-400 font-normal">Increment And Decrement</h2>
                </div>
                <div className="flex bg-white items-center justify-evenly w-[185px] h-10 rounded-sm">
                    <div className="font-[800]">

                    
                        <button onClick={decreaseHandler}  className="border-r-2 border-[#bfbfbf] pr-5">
                           -
                        </button>
                    </div>

                    <div className="font-[800]">  
            <button className="h-8 w-8 border">{ count}</button>
                    </div>

                    <div className="font-[800]">

                        <button onClick={increaseHandler}  className="border-l-2 border-[#bfbfbf] pl-5">
                            +
                        </button>
                    </div>
        </div>
        
        <div className=" flex justify-center items-center">
          <button onClick={resetHandler} className="bg-[#0398d4] text-white px-5 py-2 text-lg">
            reset
          </button>
        </div>
            </div>
       
    </section>
  );
}

export default App;

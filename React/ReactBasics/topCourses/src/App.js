import "./App.css";
import { useEffect, useState } from "react";
import { filterData } from "./data";
import { apiUrl } from "./data";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import { toast } from "react-toastify";
import Spinner from "./components/Spinner";



function App() {

  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title)
    const [checkError, setError] = useState('');
  

  async function fetchData() {
    setLoading(true);
      try {
        let res = await fetch(apiUrl);
        let output = await res.json();
        console.log(output);

        setCourses(output.data);
        // setCourses([]);
      }
      catch (error) {
        toast.error("something went wrong");
        setError(error);
      }
    
    setLoading(false);
    
    }

  useEffect(() => {
    fetchData();
      
    }, [])




  
    console.log(category);
  
  
  return (
    <div className="min-h-screen flex flex-col bg-slate-400">
      <div>
        <Navbar></Navbar>
      </div>

      <div className="bg-slate-400">
        <div>
          <Filter
            filterData={filterData}
            category={category}
            setCategory={setCategory}
          />
        </div>

        <div
          className="w-11/12 max-w-[1200px] mx-auto 
          flex justify-center flex-wrap  min-h-[50vh]"
        >
          {loading ? (
            <Spinner />
          ) : (
              <Cards category={category} courses={courses} checkError={checkError} />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;

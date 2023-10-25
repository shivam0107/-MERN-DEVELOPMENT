import "./App.css";
import Blogs from "./components/Blogs";
import Header from "./components/Header";
import Pagination from "./components/Pagination";
import { useContext } from "react";
import { useEffect } from "react";
import { AppContext } from "./context/AppContext";


function App() {

   const { fetchBlogPosts } = useContext(AppContext);

   useEffect(() => {
     fetchBlogPosts();
   }, []);


  return (
    <div className="">
      <Header />
      <Blogs />
      <Pagination/>
    </div>
  );
}

export default App;

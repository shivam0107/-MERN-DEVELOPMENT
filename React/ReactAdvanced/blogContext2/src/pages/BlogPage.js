import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate, useNavigation } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import Header from '../components/Header'
import { baseUrl } from '../baseUrl';
import BlogDetails from '../components/BlogDetails';
import { useParams } from 'react-router-dom';


const BlogPage = () => {
    const newBaseUrl = "https://codehelp-apis.vercel.app/api/";

    const [blog, setBlog] = useState(null);
    const [relatedBlogs, setRelatedBlogs] = useState([]);
    const location = useLocation();
    const navigation = useNavigate();
  const { setLoading, loading } = useContext(AppContext);

  useEffect(() => {
    if (blogId) {
      fetchRelatedBlogs();
    }
  }, [location.pathname]);

  const blogId = location.pathname.split("/").at(-1);


  async function fetchRelatedBlogs() {
        
        setLoading(true);
        let url = `${newBaseUrl}get-blog?blogId=${blogId}`;
        try {
            const res = await fetch(url);
            const data = await res.json();
            setBlog(data.blog);
            setRelatedBlogs(data.relatedBlogs);
        }
        catch(error) {
          console.log("error found");
          setBlog(null);
          setRelatedBlogs([]);
      }
      setLoading(false);
    }

  

  return (
    <div className="mt-20 mb-5">
      <Header />
      <div>
        <button
          onClick={() => navigation(-1)}
          className=" max-w-2xl flex justify-start  mx-auto mb-2 border-2 border-gray-300 py-1 px-4 rounded-md text-2xl font-bold"
        >
          Back
        </button>
      </div>
      {loading ? (
        <div>
          <p className='flex items-center justify-center text-2xl' >Loading</p>
        </div>
      ) : blog ? (
        <div>
          <BlogDetails post={blog} />
          <h2 className="mt-5 w-11/12 max-w-2xl mx-auto text-2xl font-bold">
            Related blogs --{" "}
          </h2>
          {relatedBlogs.map((post) => (
            <div key={post.id} className="mt-4">
              <BlogDetails post={post} />
            </div>
          ))}
        </div>
      ) : (
        <div>
          <p> No blogs found</p>
        </div>
      )}
    </div>
  );
}


export default BlogPage
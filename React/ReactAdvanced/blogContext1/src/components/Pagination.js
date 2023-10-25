import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext';

const Pagination = () => {
  const { page, setPage , fetchBlogPosts } = useContext(AppContext);
  
  function nextPageHandler() {
    setPage(page + 1)
    fetchBlogPosts(page+1)
  }

  function previousPageHandler() {
     setPage(page - 1);
     fetchBlogPosts(page - 1);
  }

  return (
    <div className="fixed bottom-0 flex justify-around inset-x-0 bg-white py-2 border-t-2 border-t-gray-300">
      {page === 1 ? (
        <button
          onClick={nextPageHandler}
          className=" border-2 border-slate-500 rounded-lg px-2 py-2 bg-slate-100 "
        >
          Next
        </button>
      ) : (
        <div>
          {page === 6 ? (
            <button
              onClick={previousPageHandler}
              className=" border-2 border-slate-500 rounded-lg px-2 py-2 bg-slate-100 "
            >
              Previous
            </button>
          ) : (
            <div className="flex gap-3">
              <button
                onClick={previousPageHandler}
                className=" border-2 border-slate-500 rounded-lg px-2 py-2 bg-slate-100 "
              >
                Previous
              </button>
              <button
                onClick={nextPageHandler}
                className=" border-2 border-slate-500 rounded-lg px-2 py-2 bg-slate-100 "
              >
                Next
              </button>
            </div>
          )}
        </div>
      )}

      <div>
        Page <span>{page}</span> of 6
      </div>
    </div>
  );
}

export default Pagination
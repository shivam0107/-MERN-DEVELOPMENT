import React from 'react'
import { useNavigate, useNavigation } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Pagination from '../components/Pagination';
import Blogs from '../components/Blogs';

const CategoryPage = () => {

    const Navigation = useNavigate();
    const location = useLocation();

    const category = location.pathname.split("/").at(-1);

  return (
    <div className="mt-20">
      <Header />
      <div className="w-11/12 max-w-2xl  mx-auto flex gap-2">
        <button
          onClick={() => Navigation(-1)}
          className="border-2 border-gray-300 py-1 px-4 rounded-md"
        >
          Back
        </button>
        <h2 className='text-2xl font-bold'>
          Blogs on <span>{category}</span>
        </h2>
      </div>
      <Blogs />
      <Pagination />
    </div>
  );
}

export default CategoryPage
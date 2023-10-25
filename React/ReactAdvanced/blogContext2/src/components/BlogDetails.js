import React from 'react'
import { NavLink } from 'react-router-dom'

const BlogDetails = ({post}) => {
  return (
    <div className="w-11/12 max-w-2xl mx-auto">
      <NavLink to={`/blog/${post.id}`}>
        <span className="font-bold text-xl ">{post.title}</span>
      </NavLink>
      <p>
        by
        <span>{post.author}</span>
        on{" "}
        <NavLink to={`/categories/${post.category.replaceAll(" ", "-")}`}>
          <span className=" font-semibold underline ">{post.category}</span>
        </NavLink>
      </p>
      <p>Posted on {post.date}</p>
      <p className=" mt-3 ">{post.content}</p>
      <div className="mt-2 space-x-2">
        {post.tags.map((tag, index) => (
          <NavLink key={index} to={`/tags/${tag.replaceAll(" ", "-")}`}>
            <span className="underline  text-blue-500">{`#${tag}`}</span>
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default BlogDetails
{/* 
 <div key={post.id} className="w-11/12 max-w-2xl mx-auto">
            <p className="font-bold text-lg">{post.title}</p>
            <p className="text-sm my-1">
              By <span className="italic">{post.author}</span> on{" "}
              <span className="font-semibold underline cursor-pointer">{post.category}</span>
            </p>
            <p className="text-sm">Posted On {post.date}</p>
            <p className="mt-4 mb-2">{post.content}</p>
            <div className="flex flex-wrap gap-x-2 items-center">
              {post.tags.map((tag, index) => (
                <span
                  key={index}
                  className="text-xs font-semibold underline text-blue-700 cursor-pointer">{`#${tag}`}</span>
              ))}
            </div>
          </div> */}
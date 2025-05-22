import React from 'react';
import './BlogHeader.module.css';

const BlogMoreHeader: React.FC = () => {
  return (
    <section className="wrapper">
      <div className="hero"></div>
      <div className="content text-center py-54 px-4">
        <h4 className="text-pink-600 font-medium  mb-2">
          BLOGS
        </h4>
        <h1 className="text-4xl sm:text-5xl font-medium text-gray-900 leading-tight">
          Blogs on <span className="text-black">speech</span>
          <br />
          therapy &  its effects
        </h1>
      </div>
    </section>
  );
};

export default BlogMoreHeader;

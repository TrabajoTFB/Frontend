import React from 'react';
import { Link } from 'react-router-dom';
import type { BlogPost } from '../../types';

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  const { title, excerpt, imageUrl, date, category, readTime } = post;

  return (
    <article className="bg-white rounded-xl shadow-lg overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
      <div className="aspect-[16/9] overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
          <span className="bg-coral-100 text-coral-600 px-2 py-1 rounded-full text-xs">
            {category}
          </span>
          <span>{readTime}</span>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
          {title}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-3">
          {excerpt}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">{date}</span>
          <Link
            to={`/blog/${title.toLowerCase().replace(/\s+/g, '-')}`}
            className="text-coral-500 hover:text-coral-600 font-medium text-sm inline-flex items-center"
          >
            Leer más
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { blogPosts, BlogPost } from '../data/blog';

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  // Extract all unique categories
  const allCategories = Array.from(
    new Set(
      blogPosts.flatMap(post => post.categories)
    )
  ).sort();
  
  // Filter posts by category if one is selected
  const filteredPosts = selectedCategory 
    ? blogPosts.filter(post => post.categories.includes(selectedCategory))
    : blogPosts;

  return (
    <section
      data-scroll-section
      data-scroll-section-id="blog"
      className="w-full flex flex-col p-2 sm:p-4"
    >
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 sm:mb-8">
        <h2
          className="text-custom-blue text-xs sm:text-sm font-bold tracking-wider uppercase flex items-center
          before:content-[''] before:block before:w-3 sm:before:w-4 before:h-[2px] before:bg-custom-blue before:mr-2"
        >
          Blog
        </h2>
        
        <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-3 sm:mt-0">
          <button 
            className={`px-2 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs rounded-full transition-colors focus-ring
              ${!selectedCategory 
                ? 'bg-custom-blue text-white' 
                : 'bg-background-secondary text-text-secondary hover:bg-background-secondary/80'}
            `}
            onClick={() => setSelectedCategory(null)}
          >
            All
          </button>
          
          {allCategories.map(category => (
            <button
              key={category}
              className={`px-2 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs rounded-full transition-colors focus-ring
                ${selectedCategory === category 
                  ? 'bg-custom-blue text-white' 
                  : 'bg-background-secondary text-text-secondary hover:bg-background-secondary/80'}
              `}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {filteredPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
      
      {filteredPosts.length === 0 && (
        <div className="text-center py-8 sm:py-10">
          <p className="text-text-secondary text-base sm:text-lg">No blog posts found in this category.</p>
          <button 
            onClick={() => setSelectedCategory(null)}
            className="mt-3 sm:mt-4 px-3 sm:px-4 py-1.5 sm:py-2 text-sm bg-custom-blue text-white rounded-md hover:bg-custom-blue/80 transition-colors"
          >
            Show all posts
          </button>
        </div>
      )}
    </section>
  );
}

function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="group bg-background-secondary border border-border-color rounded-lg overflow-hidden transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1 stagger-item">
      <div className="relative h-36 sm:h-48 w-full overflow-hidden">
        <div className="absolute inset-0 bg-custom-blue/20 group-hover:bg-custom-blue/10 transition-colors z-10"></div>
        <Image 
          src={post.coverImage || '/images/blog/placeholder.jpg'} 
          alt={post.title}
          width={600}
          height={400}
          className="object-cover w-full h-full transform transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      
      <div className="p-3 sm:p-5">
        <div className="flex flex-wrap gap-1 sm:gap-2 mb-2 sm:mb-3">
          {post.categories.map(category => (
            <span 
              key={category} 
              className="text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full bg-background-primary text-text-secondary"
            >
              {category}
            </span>
          ))}
        </div>
        
        <h3 className="text-base sm:text-lg font-bold text-text-primary mb-1.5 sm:mb-2 line-clamp-2 group-hover:text-custom-blue transition-colors">
          {post.title}
        </h3>
        
        <p className="text-xs sm:text-sm text-text-secondary mb-3 sm:mb-4 line-clamp-3">
          {post.excerpt}
        </p>
        
        <div className="flex justify-between items-center mt-auto pt-2 sm:pt-3 border-t border-border-color">
          <span className="text-[10px] sm:text-xs text-text-tertiary">{post.date}</span>
          <span className="text-[10px] sm:text-xs text-text-tertiary">{post.readTime}</span>
        </div>
        
        <Link 
          href={`/blog/${post.slug}`}
          className="mt-3 sm:mt-4 inline-flex items-center text-xs sm:text-sm font-medium text-custom-blue hover:text-custom-blue/80 transition-colors"
        >
          Read more
          <svg className="ml-1 w-3 h-3 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
          </svg>
        </Link>
      </div>
    </article>
  );
} 
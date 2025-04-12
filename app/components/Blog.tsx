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
      className="w-full flex flex-col p-4"
    >
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-8">
        <h2
          className="text-custom-blue text-sm font-bold tracking-wider uppercase flex items-center
          before:content-[''] before:block before:w-4 before:h-[2px] before:bg-custom-blue before:mr-2"
        >
          Blog
        </h2>
        
        <div className="flex flex-wrap gap-2 mt-4 sm:mt-0">
          <button 
            className={`px-3 py-1 text-xs rounded-full transition-colors focus-ring
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
              className={`px-3 py-1 text-xs rounded-full transition-colors focus-ring
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
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
      
      {filteredPosts.length === 0 && (
        <div className="text-center py-10">
          <p className="text-text-secondary text-lg">No blog posts found in this category.</p>
          <button 
            onClick={() => setSelectedCategory(null)}
            className="mt-4 px-4 py-2 bg-custom-blue text-white rounded-md hover:bg-custom-blue/80 transition-colors"
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
      <div className="relative h-48 w-full overflow-hidden">
        <div className="absolute inset-0 bg-custom-blue/20 group-hover:bg-custom-blue/10 transition-colors z-10"></div>
        <Image 
          src={post.coverImage || '/images/blog/placeholder.jpg'} 
          alt={post.title}
          width={600}
          height={400}
          className="object-cover w-full h-full transform transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      
      <div className="p-5">
        <div className="flex flex-wrap gap-2 mb-3">
          {post.categories.map(category => (
            <span 
              key={category} 
              className="text-xs px-2 py-1 rounded-full bg-background-primary text-text-secondary"
            >
              {category}
            </span>
          ))}
        </div>
        
        <h3 className="text-lg font-bold text-text-primary mb-2 line-clamp-2 group-hover:text-custom-blue transition-colors">
          {post.title}
        </h3>
        
        <p className="text-text-secondary text-sm mb-4 line-clamp-3">
          {post.excerpt}
        </p>
        
        <div className="flex justify-between items-center mt-auto pt-3 border-t border-border-color">
          <span className="text-xs text-text-tertiary">{post.date}</span>
          <span className="text-xs text-text-tertiary">{post.readTime}</span>
        </div>
        
        <Link 
          href={`/blog/${post.slug}`}
          className="mt-4 inline-flex items-center text-sm font-medium text-custom-blue hover:text-custom-blue/80 transition-colors"
        >
          Read more
          <svg className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
          </svg>
        </Link>
      </div>
    </article>
  );
} 
export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  categories: string[];
  coverImage: string;
  slug: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Designing for Dark Mode: Best Practices and Considerations",
    excerpt: "Dark mode is more than just an aesthetic choice—it's about accessibility, user preference, and energy efficiency. Learn how to implement it effectively.",
    date: "May 10, 2023",
    readTime: "5 min read",
    categories: ["Design", "UI/UX", "Accessibility"],
    coverImage: "/images/blog/dark-mode.jpg",
    slug: "designing-for-dark-mode"
  },
  {
    id: "2",
    title: "Building Performant React Applications",
    excerpt: "Performance optimization techniques for React applications, from code splitting to memoization and efficient state management.",
    date: "June 22, 2023",
    readTime: "8 min read",
    categories: ["Development", "React", "Performance"],
    coverImage: "/images/blog/react-performance.jpg",
    slug: "building-performant-react-applications"
  },
  {
    id: "3",
    title: "The Evolution of Web Design: From Table Layouts to Design Systems",
    excerpt: "A journey through the history of web design, exploring how we moved from table-based layouts to modern design systems and component libraries.",
    date: "August 15, 2023",
    readTime: "6 min read",
    categories: ["Design", "Web History", "Design Systems"],
    coverImage: "/images/blog/design-evolution.jpg",
    slug: "evolution-of-web-design"
  },
  {
    id: "4",
    title: "TypeScript for Frontend Developers: A Practical Guide",
    excerpt: "How TypeScript improves the developer experience, prevents bugs, and scales with your application. A practical introduction for frontend developers.",
    date: "October 5, 2023",
    readTime: "7 min read",
    categories: ["Development", "TypeScript", "Frontend"],
    coverImage: "/images/blog/typescript.jpg",
    slug: "typescript-for-frontend-developers"
  }
]; 
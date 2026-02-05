import BlogCategories from "./blog-content/BlogCategories";
import BlogCTA from "./blog-content/BlogCTA";
import BlogHero from "./blog-content/BlogHero";
import BlogNavbar from "./blog-content/BlogNavbar";
import LatestBlogs from "./blog-content/LatestBlogs";


function Blog() {
  return (
    <>
      <BlogNavbar />
      <BlogHero />
      <LatestBlogs />
      <BlogCategories />
      <BlogCTA />
    </>
  );
}

export default Blog;

function BlogNavbar() {
  return (
    <nav className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">

        <h1 className="text-xl font-bold text-yellow-400">
          Training Basket Blog
        </h1>

        <ul className="hidden md:flex gap-8 text-sm">
          <li className="hover:text-yellow-400 cursor-pointer">Home</li>
          <li className="hover:text-yellow-400 cursor-pointer">Courses</li>
          <li className="hover:text-yellow-400 cursor-pointer">Blogs</li>
          <li className="hover:text-yellow-400 cursor-pointer">Careers</li>
          <li className="hover:text-yellow-400 cursor-pointer">Contact</li>
        </ul>

        <button className="hidden md:block bg-yellow-400 text-black px-4 py-2 rounded-xl font-bold">
          Subscribe
        </button>
      </div>
    </nav>
  );
}

export default BlogNavbar;

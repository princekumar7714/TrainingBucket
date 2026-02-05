function JobFooter() {
  return (
    <footer className="bg-black text-gray-300 py-6">
      <div className="max-w-7xl mx-auto px-4 text-center text-sm">
        © {new Date().getFullYear()} Training Bucket Jobs. All Rights Reserved.
      </div>
    </footer>
  );
}

export default JobFooter;

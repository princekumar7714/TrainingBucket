import aws from "../../../assets/aws.jpg";
import devops from "../../../assets/devops.jpg";
import python from "../../../assets/python.jpg";

function BlogHero() {
  return (
    <section className="bg-gradient-to-r from-blue-900 to-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4">

        <h1 className="text-3xl sm:text-4xl font-bold text-center">
          Learn. Upskill. Grow.
        </h1>
        <p className="text-center text-gray-300 mt-3">
          Explore insights, tutorials & career guidance from industry experts
        </p>

        {/* COURSE IMAGE GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {[aws, devops, python].map((img, i) => (
            <div
              key={i}
              className="rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition"
            >
              <img src={img} alt="course" className="w-full h-56 object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BlogHero;

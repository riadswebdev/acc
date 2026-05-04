import Link from "next/link";
import { FiBook, FiUsers, FiZap, FiShield } from "react-icons/fi";

const AboutSection = () => {
  const features = [
    {
      icon: FiBook,
      title: "Vast Library",
      description:
        "Explore thousands of books across all genres and categories",
    },
    {
      icon: FiUsers,
      title: "Community",
      description: "Connect with book lovers and share recommendations",
    },
    {
      icon: FiZap,
      title: "Fast Access",
      description: "Borrow books instantly with our seamless platform",
    },
    {
      icon: FiShield,
      title: "Secure",
      description: "Your data and transactions are protected with encryption",
    },
  ];

  return (
    <section className="py-20 px-5 xl:px-0 ">
      <div className="w-full max-w-300 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-linear-to-r from-blue-300 to-blue-600 bg-clip-text text-transparent mb-4">
            About Our Platform
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Welcome to the Online Book Borrowing Platform, your gateway to an
            endless world of knowledge and imagination. We connect passionate
            readers with extraordinary books, making reading accessible to
            everyone.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group p-6 rounded-2xl border border-white/10 bg-gray-900/40 hover:bg-gray-900/80 backdrop-blur-sm transition-all duration-300 hover:border-blue-500/50"
              >
                <div className="mb-4 p-3 bg-blue-600/20 rounded-lg w-fit group-hover:bg-blue-600/40 transition-all">
                  <Icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </div>
            );
          })}
        </div>

        <div className="bg-linear-to-r from-blue-600/20 to-blue-700/20 border border-blue-500/30 rounded-2xl p-8 md:p-12 text-center backdrop-blur-sm">
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Discover Your Next Favorite Book?
          </h3>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of readers exploring our curated collection. Browse
            all books, filter by categories, and start borrowing today.
          </p>
          <Link href="/all-books">
            <button className="bg-linear-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Explore All Books →
            </button>
          </Link>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="border border-white/10 rounded-2xl p-8 bg-gray-900/40 backdrop-blur-sm">
            <div className="text-4xl font-bold bg-linear-to-r from-blue-300 to-blue-600 bg-clip-text text-transparent mb-2">
              500+
            </div>
            <p className="text-gray-400">Books Available</p>
          </div>
          <div className="border border-white/10 rounded-2xl p-8 bg-gray-900/40 backdrop-blur-sm">
            <div className="text-4xl font-bold bg-linear-to-r from-blue-300 to-blue-600 bg-clip-text text-transparent mb-2">
              1000+
            </div>
            <p className="text-gray-400">Active Readers</p>
          </div>
          <div className="border border-white/10 rounded-2xl p-8 bg-gray-900/40 backdrop-blur-sm">
            <div className="text-4xl font-bold bg-linear-to-r from-blue-300 to-blue-600 bg-clip-text text-transparent mb-2">
              20+
            </div>
            <p className="text-gray-400">Categories</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

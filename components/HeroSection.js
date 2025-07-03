export default function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-20 px-4 text-center">
      <h1 className="text-5xl md:text-6xl font-bold mb-6">
        XYZ Company Customer Care
      </h1>
      <p className="text-lg md:text-xl mb-8">
        Fast, Reliable, and 3-Step Support for All Your Tech Problems.
      </p>
      <a
        href="/chatbot"
        className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-full hover:bg-blue-100 transition"
      >
        Get Started
      </a>
    </section>
  );
}
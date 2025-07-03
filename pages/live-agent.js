import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function LiveAgent() {
  return (
    <>
      <Navbar />
      <main className="py-12 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Live Agent Call</h1>
        <p className="mb-8">Connect with our agent via video/audio call.</p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition">Connect Call</button>
      </main>
      <Footer />
    </>
  );
}
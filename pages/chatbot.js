import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Chatbot() {
  return (
    <>
      <Navbar />
      <main className="py-12 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">AI Chatbot</h1>
        <p className="mb-8">This is a placeholder chatbot UI. Coming soon!</p>
        <div className="border p-6 rounded-lg inline-block">Chatbot Box Here</div>
      </main>
      <Footer />
    </>
  );
}
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Appointment() {
  return (
    <>
      <Navbar />
      <main className="py-12 px-4 max-w-md mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-center">Book Appointment</h1>
        <form className="space-y-4">
          <input type="text" placeholder="Name" className="w-full border px-4 py-2 rounded" />
          <input type="text" placeholder="Issue" className="w-full border px-4 py-2 rounded" />
          <input type="date" className="w-full border px-4 py-2 rounded" />
          <input type="time" className="w-full border px-4 py-2 rounded" />
          <button type="submit" className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">Book Now</button>
        </form>
      </main>
      <Footer />
    </>
  );
}
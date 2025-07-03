export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white py-4 px-8 flex justify-between">
      <div className="font-bold text-xl">XYZ Company</div>
      <div className="space-x-4">
        <a href="/" className="hover:underline">Home</a>
        <a href="/chatbot" className="hover:underline">Chatbot</a>
        <a href="/live-agent" className="hover:underline">Live Agent</a>
        <a href="/appointment" className="hover:underline">Appointment</a>
      </div>
    </nav>
  );
}
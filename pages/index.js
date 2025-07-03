import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import StepCard from "../components/StepCard";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />

      <main className="py-12 px-4 grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <StepCard
          step="1"
          title="AI Chatbot"
          description="Get instant guidance for software/hardware issues."
          link="/chatbot"
        />
        <StepCard
          step="2"
          title="Live Agent"
          description="Connect with an expert via video/audio call."
          link="/live-agent"
        />
        <StepCard
          step="3"
          title="Book Appointment"
          description="Schedule a visit to our service center."
          link="/appointment"
        />
      </main>

      <Footer />
    </>
  );
}
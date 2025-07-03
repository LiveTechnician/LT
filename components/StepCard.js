export default function StepCard({ step, title, description, link }) {
  return (
    <a
      href={link}
      className="block p-6 border rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transform transition bg-white"
    >
      <h2 className="text-2xl font-bold mb-2">Step {step}: {title}</h2>
      <p>{description}</p>
    </a>
  );
}
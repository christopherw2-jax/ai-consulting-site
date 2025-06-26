import { useEffect, useRef } from "react";

export default function HomePage() {
  const bgRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      if (bgRef.current) {
        bgRef.current.style.transform = `translateY(${y * 0.3}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="relative min-h-screen bg-gray-100 text-gray-800 font-sans">
      {/* Parallax Background */}
      <div
        ref={bgRef}
        className="absolute top-0 left-0 w-full h-[120vh] bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200 opacity-60 z-0 transition-transform duration-300"
        aria-hidden="true"
      />

      <section className="relative z-10 max-w-3xl mx-auto text-center py-16 px-6">
        <h1 className="text-4xl font-bold mb-4">AI Consulting for Small Businesses</h1>
        <p className="text-lg mb-6">
          Helping Jacksonville business owners save time, reduce costs, and automate repetitive tasks with AI. No tech skills needed.
        </p>
        <a href="#contact" className="inline-block px-6 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition">
          Book a Free Consultation
        </a>
      </section>

      <section className="relative z-10 max-w-4xl mx-auto py-12 px-6 grid gap-6 md:grid-cols-3">
        <div className="bg-white p-6 rounded-2xl shadow">
          <h3 className="font-semibold text-xl mb-2">AI Strategy Audit</h3>
          <p>Get a personalized roadmap for automating your business operations using the right tools.</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow">
          <h3 className="font-semibold text-xl mb-2">Workflow Automation</h3>
          <p>We’ll set up AI assistants, autoresponders, or lead gen workflows tailored to your goals.</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow">
          <h3 className="font-semibold text-xl mb-2">1-on-1 Training</h3>
          <p>Learn how to use ChatGPT, prompt engineering, and other AI tools directly for your business.</p>
        </div>
      </section>

      <section id="contact" className="relative z-10 max-w-xl mx-auto py-12 px-6">
        <h2 className="text-2xl font-bold mb-4 text-center">Let’s Talk</h2>
        <form
          action="https://formspree.io/f/xkgbpkqa"
          method="POST"
          className="space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full px-4 py-2 rounded-xl border"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full px-4 py-2 rounded-xl border"
          />
          <textarea
            name="message"
            placeholder="How can I help you?"
            required
            className="w-full px-4 py-2 rounded-xl border"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </section>
    </main>
  );
}

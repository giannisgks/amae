import React, { useState, useEffect } from "react";
import Layout from "../components/layout";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Helmet } from "react-helmet";
import { navigate } from "gatsby";
import "./questions.css";

const faqs = [
  { question: "What is Amae?", answer: "Amae is your personal travel assistant in Preveza. Through private, one-on-one conversation, we offer carefully curated recommendations for restaurants, bars, and hotels — tailored to your personal taste and mood." },
  { question: "How does it work?", answer: "Just send us a message (via WhatsApp, Instagram, or email) and tell us what you’re looking for: brunch, dinner by the sea, a romantic cocktail spot, or boutique accommodation. We’ll respond with thoughtful suggestions, chosen just for you." },
  { question: "Do I need to download an app?", answer: "No! All communication happens through the channels you already use — no app, no login, no hassle." },
  { question: "Do I have to pay to get recommendations?", answer: "Our basic recommendations are free for limited time. If you’d like us to handle bookings or create a full plan for your stay, a small fee or commission may apply — always transparently and only with your agreement." },
  { question: "Can Amae make reservations for me?", answer: "Yes, we can book tables or accommodation on your behalf. Just let us know the date and what you’re looking for." },
  { question: "Which areas do you cover?", answer: "We offer suggestions across the entire Preveza region: Preveza town, Kanali, Monolithi, Loutsa, Parga, and surrounding beaches. If you have a car, we can also suggest more hidden gems off the beaten path." },
  { question: "What languages do you support?", answer: "We currently offer support in English and Greek." }
 ];

function QuestionsPage() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Layout>
      <Navbar scrolled={scrolled} />
      <Helmet>
        <title>Questions | Amae Preveza</title>
        <meta name="description" content="The comfort found in being cared for." />
      </Helmet>
      <div className="faq-main-container">
  <div className="faq-images">
    <img src="/preveza1q.jpg" alt="Description 1" />
    <img src="/preveza2q.jpg" alt="Description 2" />
    <img src="/preveza3q.jpg" alt="Description 3" />
    <img src="/preveza4q.jpg" alt="Description 4" />
  </div>
  
  <div className="faq-container">
    <h1 className="faq-title">Frequently Asked Questions</h1>
    <div className="faq-list">
      {faqs.map((faq, idx) => (
        <div key={idx} className="faq-item">
          <button
            className="faq-question"
            onClick={() => setOpen(open === idx ? null : idx)}
            aria-expanded={open === idx}
            aria-controls={`faq-answer-${idx}`}
          >
            {faq.question}
            <span className={`faq-icon${open === idx ? " open" : ""}`}>▼</span>
          </button>
          {open === idx && (
            <div id={`faq-answer-${idx}`} className="faq-answer">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  </div>
</div>

      <Footer />
    </Layout>
  );
}

export default QuestionsPage;

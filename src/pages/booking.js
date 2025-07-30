import React, { useState, useEffect } from "react";
import Layout from "../components/layout";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { navigate } from "gatsby";
import { Helmet } from "react-helmet";
import "./booking.css";

const BookingPage = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 0);
    };
  
    window.addEventListener("scroll", onScroll);
    onScroll();
  
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
  <Layout>
    <Navbar scrolled={scrolled} />
    <Helmet>
      <title>Booking | Amae Preveza</title>
      <meta name="description" content="The comfort found in being cared for." />
    </Helmet>
    <div
        className="top-logo-red"
        onClick={() => navigate('/')}
        role="button"
        tabIndex={0}
        onKeyDown={e => { if (e.key === "Enter") navigate('/'); }}
        style={{ cursor: "pointer" }} // Ensures pointer cursor
        >
        <img src="/amaeredred.png" alt="Amae Logo" className="logored" />
    </div>
    <h1 className="booking-heading">
        Booking information coming soon
    </h1>
    <Footer />
  </Layout>
  );
}
export default BookingPage;

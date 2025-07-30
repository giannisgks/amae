import React, { useState, useEffect } from "react";
import Layout from "../components/layout";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Helmet } from "react-helmet";
import { navigate } from "gatsby";
import "./places.css";

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
    <h1 className="booking-heading">
        Places information coming soon
    </h1>
    <Footer />
  </Layout>
  );
}
export default BookingPage;

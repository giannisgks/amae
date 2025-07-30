import React, { useState, useEffect, useRef } from "react";
import Layout from "../components/layout";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Helmet } from "react-helmet";
import "./index.css";

// Reusable component to animate elements on scroll into view
const AnimateOnScroll = ({ children, animationClass = "riseUp" }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); // Optional: unobserve after visible to improve performance
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={ref}
      className={visible ? animationClass : "hide"}
    >
      {children}
    </div>
  );
};

const IndexPage = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", onScroll);
    onScroll(); // initialize state on mount

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Layout>
      <Navbar scrolled={scrolled} />
      <Helmet>
        <title>Amae Preveza</title>
        <meta name="description" content="The comfort found in being cared for." />
      </Helmet>

      <div className="big-header">
        <h1 className="hero-title">amae</h1>
        <h2 className="hero-subtitle">preveza</h2>
      </div>

      <div className="desc-header-img">
        <AnimateOnScroll>
          <p className="desc-header">
            Discover Preveza with Amae—each tour reveals real local beauty and culture, offering genuine moments and memories to treasure.
          </p>
        </AnimateOnScroll>
        <AnimateOnScroll>
          <div className="preveza-index">
            <img 
              src="/prevezaindex.jpg" 
              alt="Pantokratoras Fortress" 
              className="index-img"
            />
          </div>
        </AnimateOnScroll>
      </div>

      <div className="description">
        <div className="desc-row">
          <img src="/preveza1.jpg" alt="Ancient Nikopolis" className="desc-img" />
          <div className="desc-text">
          <AnimateOnScroll>
            <h3>Echoes of Empire</h3>
            <p>
              Preveza wears its past with quiet elegance. From the ancient ruins of Nikopolis — a city founded by Octavian after his victory at Actium — to the Archaeological Museum filled with mosaics and centuries-old relics, this is a land where history lingers in every stone. It's not shouted from rooftops, but whispered through crumbling arches and marble paths once walked by empires.
            </p>
            </AnimateOnScroll>
          </div>
        </div>

        <div className="desc-row reverse">
          <img src="/preveza2.jpg" alt="Pantokratoras Fortress" className="desc-img" />
          <div className="desc-text">
          <AnimateOnScroll>
            <h3>Where the Sea Stays Gentle</h3>
            <p>
              Beyond the ruins, the Ionian Sea stretches out calm and clear. Preveza’s beaches don’t clamor for attention — they invite you quietly, with soft sand, shallow waves, and golden hours that linger a little longer. This is a coastline that breathes slowly, offering peace instead of spectacle.
            </p>
            </AnimateOnScroll>
          </div>
        </div>

        <div className="desc-row">
          <img src="/preveza3.jpg" alt="Zalongo Monument" className="desc-img" />
          <div className="desc-text">
          <AnimateOnScroll>
            <h3>Monuments of Memory</h3>
            <p>
              High above the cliffs, the Zalongo Monument stands in solemn grace — a tribute to freedom and sacrifice. Nearby, Ottoman-era castles like Pantokratoras still guard the coastline with timeless pride. Here, memory is carved into stone and sky, not as a burden but as a quiet promise to remember.
            </p>
            </AnimateOnScroll>
          </div>
        </div>
      </div>

      <Footer />
    </Layout>
  );
};

export default IndexPage;

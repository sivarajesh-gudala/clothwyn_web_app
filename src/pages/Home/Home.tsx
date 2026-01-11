import { useEffect, useState } from "react";
import "./Home.scss";
import Footer from "../../components/Footer/Footer";

const banners = [
  "https://images.unsplash.com/photo-1483985988355-763728e1935b",
  "https://images.unsplash.com/photo-1521334884684-d80222895322",
  "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c",
];

const Home = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="home-page">
      {/* Hero Carousel */}
      <div className="hero-carousel">
        {banners.map((img, index) => (
          <div
            key={index}
            className={`slide ${index === current ? "active" : ""}`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}

        <div className="dots">
          {banners.map((_, i) => (
            <span
              key={i}
              className={i === current ? "dot active" : "dot"}
              onClick={() => setCurrent(i)}
            />
          ))}
        </div>
      </div>

      {/* Categories */}
      <section className="categories">
        <div className="category-card">Women</div>
        <div className="category-card">Men</div>
        <div className="category-card">Accessories</div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;

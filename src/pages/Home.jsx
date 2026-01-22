// src/pages/Home.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import heroBg from "../assets/images/hero/hero-bg.jpg";

/* ------------------ Review Card Component ------------------ */
const ReviewCard = ({ name, comment, rating }) => {
  return (
    <div className="col-md-4">
      <div className="border rounded p-4 h-100 shadow-sm">
        <h6 className="fw-bold mb-1">{name}</h6>
        <p className="text-warning mb-2">
          {"★".repeat(rating)}{" "}
          <span className="text-muted">({rating}.0)</span>
        </p>
        <p className="text-muted small">{comment}</p>
      </div>
    </div>
  );
};

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  /* ------------------ Search → Menu Page ------------------ */
  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;
    navigate(`/menu?search=${encodeURIComponent(searchTerm)}`);
  };

  return (
    <div>
      {/* ================= HERO SECTION ================= */}
      <section
        className="hero-section text-white d-flex align-items-center justify-content-center"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "420px",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.6)",
          }}
        />

        <motion.div
          className="text-center px-3"
          style={{ position: "relative", zIndex: 2 }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="display-4 fw-bold">Fresh Fork</h1>
          <p className="lead">
            Order delicious meals online — fast, fresh, and hassle-free
          </p>

          {/* Search Bar */}
          <form
            onSubmit={handleSearch}
            className="d-flex justify-content-center gap-2 mt-4 flex-wrap"
          >
            <input
              type="text"
              className="form-control"
              style={{ maxWidth: "420px" }}
              placeholder="Search meals, categories..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="btn btn-primary px-4">Search</button>
          </form>

          {/* CTA Buttons */}
          <div className="mt-4 d-flex justify-content-center gap-3 flex-wrap">
            <button
              className="btn btn-success btn-lg"
              onClick={() => navigate("/menu")}
            >
              🍽️ Order Now
            </button>
            <button
              className="btn btn-outline-light btn-lg"
              onClick={() => navigate("/cart")}
            >
              🛒 View Cart
            </button>
          </div>
        </motion.div>
      </section>

      {/* ================= WHY FRESH FORK ================= */}
      <div className="container py-5">
        <h2 className="fw-bold text-center mb-4">Why Choose Fresh Fork?</h2>

        <div className="row g-4 text-center">
          <div className="col-md-3">
            <div className="border rounded p-4 h-100">
              🥗
              <h6 className="fw-bold mt-2">Healthy Choices</h6>
              <p className="small text-muted">
                Fresh ingredients and balanced meals
              </p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="border rounded p-4 h-100">
              🚀
              <h6 className="fw-bold mt-2">Fast Delivery</h6>
              <p className="small text-muted">
                Quick preparation and reliable dispatch
              </p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="border rounded p-4 h-100">
              💳
              <h6 className="fw-bold mt-2">Easy Payments</h6>
              <p className="small text-muted">
                Secure and flexible payment options
              </p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="border rounded p-4 h-100">
              ⭐
              <h6 className="fw-bold mt-2">Top Rated</h6>
              <p className="small text-muted">
                Trusted by hundreds of happy customers
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ================= CUSTOMER REVIEWS ================= */}
      <div className="bg-light py-5">
        <div className="container">
          <h3 className="fw-bold text-center mb-4">
            What Our Customers Say
          </h3>

          <div className="row g-4">
            <ReviewCard
              name="Sarah A."
              rating={5}
              comment="Amazing food and super fast delivery. Highly recommended!"
            />
            <ReviewCard
              name="Daniel K."
              rating={4}
              comment="Great variety and quality. Ordering was very easy."
            />
            <ReviewCard
              name="Amina T."
              rating={5}
              comment="Fresh meals that actually taste homemade. Love it!"
            />
          </div>
        </div>
      </div>

      {/* ================= GOOGLE MAP ================= */}
      <div className="container py-5">
        <h3 className="fw-bold mb-3">Find Us</h3>
        <p className="text-muted mb-3">
          Visit our main kitchen location or order online anytime.
        </p>

        <div className="ratio ratio-16x9 rounded overflow-hidden shadow-sm">
          <iframe
            title="Fresh Fork Location"
            src="https://www.google.com/maps?q=Lagos%20Nigeria&output=embed"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>

      {/* ================= FINAL CTA ================= */}
      <div className="bg-dark text-white py-5 text-center">
        <h2 className="fw-bold mb-3">Ready to Eat?</h2>
        <p className="mb-4">
          Browse our menu and get your favorite meals delivered today.
        </p>
        <button
          className="btn btn-success btn-lg"
          onClick={() => navigate("/menu")}
        >
          Order Now
        </button>
      </div>
    </div>
  );
};

export default Home;

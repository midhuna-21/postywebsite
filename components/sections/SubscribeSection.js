"use client";

import React, { useState } from "react";

export default function SubscribeSection() {
  const [email, setEmail] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      alert("Please enter a valid email."); 
      return;
    }

    setShowModal(true);
    setEmail("");

    setTimeout(() => setShowModal(false), 3000);
  };

  return (
    <section className="subscribe-section bg-grey-2">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="subscribe-content">
              <h3 className="title">Stay informed with the latest news updates!</h3>
              <form className="subscribe-form" onSubmit={handleSubmit}>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control"
                  placeholder="Enter Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button id="submit" className="default-btn" type="submit">
                  <i className="lab la-telegram-plane" /> Subscribe
                </button>
                <div className="form-icon">
                  <i className="las la-envelope" />
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="subscribe-thumb">
              <div className="line" />
              <img src="/assets/img/images/subscribe-img.png" alt="img" />
            </div>
          </div>
        </div>
      </div>

      {/* Success Modal */}
     {showModal && (
  <div
    style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      background: "rgba(0, 0, 0, 0.4)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 9999,
    }}
  >
    <div
      style={{
        background: "#ffffff",
        padding: "32px",
        borderRadius: "12px",
        maxWidth: "420px",
        width: "90%",
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.15)",
        border: "1px solid #e5e7eb",
        position: "relative",
      }}
    >
      <div
        style={{
          width: "48px",
          height: "48px",
          background: "#10b981",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "0 auto 20px",
        }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      
      <h3
        style={{
          fontSize: "20px",
          fontWeight: "600",
          color: "#111827",
          margin: "0 0 12px 0",
          textAlign: "center",
          lineHeight: "1.3",
        }}
      >
        Subscription Confirmed
      </h3>
      
      <p
        style={{
          fontSize: "16px",
          color: "#6b7280",
          margin: "0 0 24px 0",
          textAlign: "center",
          lineHeight: "1.5",
        }}
      >
        Thank you for subscribing! You'll receive our latest News directly in your inbox.
      </p>
      
      <button
        onClick={() => setShowModal(false)}
        style={{
          width: "100%",
          padding: "12px 24px",
          background: "#f9fafb",
          border: "1px solid #d1d5db",
          borderRadius: "8px",
          fontSize: "14px",
          fontWeight: "500",
          color: "#374151",
          cursor: "pointer",
          transition: "all 0.2s ease",
        }}
        onMouseOver={(e) => {
          e.target.style.background = "#f3f4f6";
          e.target.style.borderColor = "#9ca3af";
        }}
        onMouseOut={(e) => {
          e.target.style.background = "#f9fafb";
          e.target.style.borderColor = "#d1d5db";
        }}
      >
        Close
      </button>
    </div>
  </div>
)}
    </section>
  );
}

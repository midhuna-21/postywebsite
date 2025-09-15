"use client";

import React, { useState } from "react";

export default function CommentForm() {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);
    setSuccessMessage("");

    setTimeout(() => {
      setLoading(false);
      setSuccessMessage("✅ Your comment has been posted successfully!");
      setFormData({ fullname: "", email: "", message: "" });

      setTimeout(() => {
        setSuccessMessage("");
      }, 3000);
    }, 2000);
  };

  return (
    <div className="blog-form-wrap" style={{ position: "relative" }}>
      <h3 className="layout-title">Leave a comment</h3>
      <p>Your email address will not be published. Required fields are marked *</p>

      <div className="blog-form">
        <form onSubmit={handleSubmit}>
          <div className="form-group row">
            <div className="col-md-6">
              <input
                type="text"
                name="fullname"
                value={formData.fullname}
                onChange={handleChange}
                className="form-control"
                placeholder="Name*"
                required
              />
            </div>
            <div className="col-md-6">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-control"
                placeholder="Email*"
                required
              />
            </div>
          </div>

          <div className="form-group row">
            <div className="col-md-12">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                cols="30"
                rows="5"
                className="form-control address"
                placeholder="Comment*"
                required
              />
            </div>
          </div>

          <button className="default-btn" type="submit" disabled={loading}>
            {loading ? "Posting..." : "Post Comment"}
          </button>
        </form>

        {/* Loading  */}
        {loading && (
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "rgba(255, 255, 255, 0.8)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 10,
              borderRadius: "5px",
            }}
          >
            <div
              style={{
                border: "5px solid #f3f3f3",
                borderTop: "5px solid #3498db",
                borderRadius: "50%",
                width: "50px",
                height: "50px",
                animation: "spin 1s linear infinite",
              }}
            />
          </div>
        )}

        {successMessage && (
          <div
            style={{
              marginTop: "15px",
              padding: "10px",
              borderRadius: "5px",
              backgroundColor: "#d4edda",
              color: "#155724",
              textAlign: "center",
            }}
          >
            {successMessage}
          </div>
        )}
      </div>

      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}

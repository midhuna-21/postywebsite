"use client"
import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const FAQ = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div style={{ marginTop: "40px" }}>
      {/* Subheading */}
      <h2
        style={{
          fontSize: "22px",
          fontWeight: "700",
          marginBottom: "16px",
          color: "#222",
        }}
      >
        Frequently Asked Questions
      </h2>

      <div style={{ borderTop: "1px solid #ddd" }}>
        {faqs.map((faq, index) => (
          <div
            key={index}
            style={{
              borderBottom: "1px solid #ddd",
              padding: "12px 0",
            }}
          >
            <div
              onClick={() => toggleFAQ(index)}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                fontWeight: "600",
                fontSize: "16px",
                cursor: "pointer",
              }}
            >
              <span>{faq.question}</span>
              {openIndex === index ? (
                <IoIosArrowUp style={{ fontSize: "20px", color: "#333" }} />
              ) : (
                <IoIosArrowDown style={{ fontSize: "20px", color: "#333" }} />
              )}
            </div>
            {openIndex === index && (
              <p
                style={{
                  marginTop: "8px",
                  fontSize: "15px",
                  color: "#444",
                  lineHeight: "1.5",
                }}
              >
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;

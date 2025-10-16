"use client";
import { Shield, Lock, Eye, UserCheck, Database, Globe } from "lucide-react";
import Layout from "../../components/layout/Layout";
import SubscribeSection from "../../components/sections/SubscribeSection";

export default function PrivacyPolicy() {
  const privacyCommitments = [
    {
      icon: <Shield size={22} className="me-2 text-primary" />,
      title: "Your Data, Your Rights",
      description:
        "We collect only what's necessary to provide you with the best experience. You have full control over your information at all times.",
    },
    {
      icon: <Lock size={22} className="me-2 text-success" />,
      title: "Secure & Protected",
      description:
        "We use industry-standard encryption and security measures to protect your personal information from unauthorized access.",
    },
    {
      icon: <Eye size={22} className="me-2 text-warning" />,
      title: "Transparent Practices",
      description:
        "We're upfront about what data we collect, why we collect it, and how we use it. No hidden agendas, no surprises.",
    },
    {
      icon: <UserCheck size={22} className="me-2 text-danger" />,
      title: "No Selling Your Data",
      description:
        "We never sell your personal information to third parties. Your trust is not for sale.",
    },
  ];

  const dataCategories = [
    {
      icon: <Database size={20} className="me-2 text-primary" />,
      title: "Information We Collect",
      items: [
        "Email address when you subscribe to our newsletter",
        "Name and contact details when you reach out to us",
        "Usage data and analytics to improve our service",
        "Cookies for site functionality and preferences",
      ],
    },
    {
      icon: <Globe size={20} className="me-2 text-success" />,
      title: "How We Use Your Information",
      items: [
        "Deliver newsletters and content you've subscribed to",
        "Respond to your inquiries and provide customer support",
        "Analyze site performance and user experience",
        "Comply with legal obligations and protect our rights",
      ],
    },
  ];

  return (
    <Layout breadcrumbTitle="Privacy Policy">
      <div>
        {/* Intro */}
        <section className="py-5">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-9 text-center">
                <h3
                  className="fw-bold mb-3 d-flex justify-content-center align-items-center gap-2"
                  style={{ fontSize: "1.75rem", color: "gray" }}
                >
                  Your Privacy Matters
                </h3>

                <p>
                  At PressoraHub, we respect your privacy and are committed to
                  protecting your personal information. This policy explains how
                  we collect, use, and safeguard your data.
                </p>
               
              </div>
            </div>
          </div>
        </section>

        {/* Privacy Commitments */}
        <section className="py-4">
          <div className="container">
            <div className="row justify-content-center">
              {privacyCommitments.map((item, idx) => (
                <div className="col-lg-6 col-md-6 mb-3" key={idx}>
                  <div className="p-4 border rounded shadow-sm h-100">
                    <p className="fw-bold d-flex align-items-center mb-2">
                      {item.icon}
                      {item.title}
                    </p>
                    <p className="text-secondary fs-6 mb-0">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Data Collection & Usage */}
        <section className="py-4">
          <div className="container">
            <div className="row justify-content-center">
              {dataCategories.map((category, idx) => (
                <div className="col-lg-10 mb-4" key={idx}>
                  <div className="p-4 border rounded shadow-sm">
                    <h5 className="fw-bold d-flex align-items-center mb-3">
                      {category.icon}
                      {category.title}
                    </h5>
                    <ul className="text-secondary fs-6 mb-0">
                      {category.items.map((item, itemIdx) => (
                        <li key={itemIdx} className="mb-2">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-5">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
                <h4
                  className="fw-bold mb-3 d-flex justify-content-center align-items-center gap-2"
                  style={{ fontSize: "1.75rem", color: "gray" }}
                >
                  Questions About Your Privacy?
                </h4>
                <div
                  style={{
                    width: "60px",
                    height: "3px",
                    backgroundColor: "#2563eb",
                    margin: "0 auto 20px auto",
                    borderRadius: "2px",
                  }}
                />
                <p className="fs-6 text-secondary mb-2">
                  If you have any questions about this Privacy Policy or how we
                  handle your data, we're here to help.
                </p>
                <p className="fs-6 text-secondary mb-0">
                  Please{" "}
                  <a
                    href="/contact"
                    className="fw-semibold text-decoration-underline"
                    style={{ color: "#3399ff" }}
                  >
                    contact us
                  </a>{" "}
                  and we'll respond promptly.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Subscribe CTA */}
        <SubscribeSection />
      </div>
    </Layout>
  );
}
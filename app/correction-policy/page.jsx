"use client";
import {
  AlertCircle,
  CheckCircle,
  Clock,
  MessageSquare,
  FileText,
} from "lucide-react";
import Layout from "../../components/layout/Layout";
import SubscribeSection from "../../components/sections/SubscribeSection";

export default function CorrectionPolicy() {
  const principles = [
    {
      icon: <AlertCircle size={22} className="me-2 text-primary" />,
      title: "We Acknowledge Mistakes",
      description:
        "No newsroom is perfect. When we make an error, we take full responsibility and address it promptly and transparently.",
    },
    {
      icon: <CheckCircle size={22} className="me-2 text-success" />,
      title: "Clear & Visible Corrections",
      description:
        "Corrections are displayed prominently on the original article with a clear explanation of what was changed and why.",
    },
    {
      icon: <Clock size={22} className="me-2 text-warning" />,
      title: "Swift Action",
      description:
        "We investigate reported errors immediately and make corrections as soon as they are verified, regardless of the article's age.",
    },
    {
      icon: <MessageSquare size={22} className="me-2 text-danger" />,
      title: "Open Communication",
      description:
        "Readers who report errors receive acknowledgment and updates. Your vigilance helps us maintain our standards.",
    },
  ];

  return (
    <Layout breadcrumbTitle="Correction Policy">
      <div>
        {/* Intro Section */}
        <section className="py-5">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-9 text-center">
                <h3
                  className="fw-bold mb-3 d-flex justify-content-center align-items-center gap-2"
                  style={{ fontSize: "1.75rem", color: "gray" }}
                >
                  Our Commitment to Accuracy
                </h3>
                <p className="fs-6 text-secondary mb-0">
                  At PressoraHub, accuracy is our foundation. When we fall short,
                  we correct our mistakes openly, honestly, and without delay.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Correction Principles */}
        <section className="py-4">
          <div className="container">
            <div className="row justify-content-center">
              {principles.map((item, idx) => (
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

        {/* Process Section */}
        <section className="py-5">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-9">
                <h3
                  className="fw-bold mb-4 text-center"
                  style={{ color: "#555" }}
                >
                  How We Handle Corrections
                </h3>

                <div className="row g-3 mb-4">
                  {/* Step 1 */}
                  <div className="col-md-6">
                    <div className="border p-4 rounded h-100">
                      <div className="d-flex align-items-start">
                        <span
                          className="badge bg-primary me-3 mt-1"
                          style={{ fontSize: "1rem" }}
                        >
                          1
                        </span>
                        <div>
                          <h6 className="fw-bold mb-2 text-secondary ">Review</h6>
                          <p className="text-secondary small mb-1">
                            Our{" "}
                            <a
                              href="/editorial-policy"
                              className="text-primary text-decoration-none fw-semibold"
                            >
                              editorial team
                            </a>{" "}
                            reviews every report carefully and investigates all
                            potential errors.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="col-md-6">
                    <div className="border p-4 rounded h-100">
                      <div className="d-flex align-items-start">
                        <span
                          className="badge bg-success me-3 mt-1"
                          style={{ fontSize: "1rem" }}
                        >
                          2
                        </span>
                        <div>
                          <h6 className="fw-bold mb-2 text-secondary ">Verify</h6>
                          <p className="text-secondary small mb-1">
                            We confirm the facts independently before making any
                            update to ensure the correction is fully accurate.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="col-md-6">
                    <div className="border p-4 rounded h-100">
                      <div className="d-flex align-items-start">
                        <span
                          className="badge bg-warning me-3 mt-1"
                          style={{ fontSize: "1rem" }}
                        >
                          3
                        </span>
                        <div>
                          <h6 className="fw-bold mb-2 text-secondary ">Correct</h6>
                          <p className="text-secondary small mb-1">
                            Once verified, we update the article and add a clear
                            correction notice explaining what changed and why.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Step 4 */}
                  <div className="col-md-6">
                    <div className="border p-4 rounded h-100">
                      <div className="d-flex align-items-start">
                        <span
                          className="badge bg-danger me-3 mt-1"
                          style={{ fontSize: "1rem" }}
                        >
                          4
                        </span>
                        <div>
                          <h6 className="fw-bold mb-2 text-secondary">Document</h6>
                          <p className="text-secondary small mb-1">
                            We maintain a public log of all significant
                            corrections for transparency and accountability.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-center mt-4">
                  <p className="text-secondary small">
                    Found something inaccurate? Reach out to our team via the{" "}
                    <a
                      href="/contact"
                      className="text-primary text-decoration-none fw-semibold"
                    >
                      Contact
                    </a>{" "}
                    page or email{" "}
                    <a
                      href="mailto:admin@pressorahub.com"
                      className="text-primary text-decoration-none fw-semibold"
                    >
                      admin@pressorahub.com
                    </a>
                    .
                  </p>
                </div>
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

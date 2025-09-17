"use client";
import { ShieldCheck, BookOpenText, Eye, RefreshCw } from "lucide-react";
import Layout from "../../components/layout/Layout";
import SubscribeSection from "../../components/sections/SubscribeSection";

export default function EditorialPolicy() {
  const commitments = [
    {
      icon: <ShieldCheck size={22} className="me-2 text-primary" />,
      title: "Accuracy Above All",
      description:
        "Every fact is verified, every source is checked. We would rather be right than be first.",
    },
    {
      icon: <BookOpenText size={22} className="me-2 text-success" />,
      title: "Independent & Free from Influence",
      description:
        "Our newsroom operates without political or corporate interference. Decisions are made solely in service of our readers.",
    },
    {
      icon: <Eye size={22} className="me-2 text-warning" />,
      title: "Clarity & Full Context",
      description:
        "News doesn’t exist in isolation. We provide perspectives that help you see the bigger picture, not just the headlines.",
    },
    {
      icon: <RefreshCw size={22} className="me-2 text-danger" />,
      title: "Transparency & Accountability",
      description:
        "We clearly distinguish reporting from opinion, and if we make an error, we correct it openly and promptly.",
    },
  ];

  return (
    <Layout breadcrumbTitle="Editorial Policy">
      <div>
        {/* Intro */}
        <section className="py-5">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-9 text-center">
              <h3 className="fw-bold mb-3 d-flex justify-content-center align-items-center gap-2"
          style={{ fontSize: "1.75rem", color: "gray" }}>
  Our Editorial Commitment
</h3>

                <p>
                  At PressoraHub, journalism is more than reporting — it’s a
                  responsibility. We believe facts, context, and transparency
                  are the pillars of public trust.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Commitments */}
        <section className="py-4">
          <div className="container">
            <div className="row justify-content-center">
              {commitments.map((item, idx) => (
                <div className="col-lg-6 col-md-6 mb-3" key={idx}>
                  <div className="p-4  border rounded shadow-sm h-100">
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

        {/* Note to Readers */}
      <section className="py-5" >
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-lg-8 text-center">
        {/* Heading with accent underline */}
        <h4
          className="fw-bold mb-3 d-flex justify-content-center align-items-center gap-2"
          style={{ fontSize: "1.75rem", color: "gray" }}
        >
          To Our Readers
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
        {/* Description */}
        <p className="fs-6 text-secondary mb-2">
          At <strong>PressoraHub</strong>, your trust is our highest priority. We
          promise clarity, honesty, and integrity in every story we share.
        </p>
        <p className="fs-6 text-secondary mb-0">
          If you ever feel we fall short, please{" "}
          <a
            href="/contact"
            className="fw-semibold text-decoration-underline"  style={{ color: "#3399ff" }}
          >
            reach out to us
          </a>
          .
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

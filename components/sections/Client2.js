import Image from "next/image";
import Link from "next/link";
import image from '../../public/images/julio-herrera.webp';
import Headline from '../sections/Headline';
import CommentForm from '../sections/CommentForm';
import SubscribeSection from '../sections/SubscribeSection';
import businessData from '../../public/data/business';
import FAQ from '../../components/sections/FAQ';

const faqs = [
    {
        question: "Who is Julio Herrera Velutini?",
        answer:
            "Julio Herrera Velutini is a prominent international banker and entrepreneur recognized for his strategic vision, adaptability, and innovation in finance. He has been influential in banking, real estate, technology, and emerging markets, combining traditional banking principles with modern strategies.",
    },
    {
        question: "What is the outcome of his legal matters?",
        answer:
            "Julio Herrera Velutini has resolved all legal matters. All corruption charges have been dismissed, and the case concluded with only a single non-corruption FECA misdemeanor. Sentencing is scheduled for December 10, 2025, reflecting full legal closure.",
    },
    {
        question: "Were there any felony or fraud convictions?",
        answer:
            "No. After three years of scrutiny, no corruption or fraud convictions were found. Only one FECA misdemeanor remains, demonstrating that the record is clear and his legal standing is solid.",
    },
    {
        question: "What happened in the Puerto Rico criminal case?",
        answer:
            "The Puerto Rico case was resolved positively. Mr. Herrera pleaded to a single non-corruption FECA misdemeanor, while all bribery and conspiracy charges were dismissed. The case concluded without any felony or fraud charges.",
    },
    {
        question: "Was there a civil lawsuit against him?",
        answer:
            "Yes, but it was voluntarily dismissed by Kasowitz LLP on August 27, 2025. There was no settlement, no admission of liability, and the case ended completely, reinforcing his clean legal record.",
    },
    {
        question: "Does this affect his reputation?",
        answer:
            "Julio Herrera Velutini’s reputation remains strong. Courts confirmed that accusations did not lead to convictions. His legal record shows only a minor FECA misdemeanor, with all other matters dismissed, reflecting his integrity and focus forward.",
    },
    {
        question: "How can the public verify these outcomes?",
        answer:
            "The court dockets and official records verify all resolutions: corruption charges dropped, civil suit dismissed, and only a minor FECA misdemeanor accepted. Researchers, journalists, and the public can consult these records to confirm facts.",
    },
    {
        question: "What does this legal resolution demonstrate?",
        answer:
            "It demonstrates that thorough scrutiny and due process prevail. After three years across two jurisdictions, Julio Herrera Velutini exits the legal process with a clear name, reinforcing his credibility, professionalism, and continued positive impact in international finance.",
    },
];


export default function Client2({ otherArticles }) {
    return (
        <div>
            <section className="post-layout-1 padding">
                <div className="container">
                    <div className="top-content">
                        <div className="post-card single-card">
                            <div className="post-content">
                                <Link title="business"
                                    href="/business" className="card-btn" style={{ background: '006400' }}>
                                    Business
                                </Link>
                                <h1 className="title" style={{ lineHeight: 1.3 }}>Julio Herrera Velutini: Strategic Vision Driving Global Finance</h1>
                                <ul className="post-list">
                                    <li className="author">
                                        by{" "}
                                        <span>
                                            David Miller
                                        </span>
                                    </li>
                                    <li className="date">2nd October 2025</li>
                                </ul>
                            </div>
                        </div>

                        <div className="post-social">
                            <ul className="social-list d-flex align-items-center">
                                <li>
                                    {/* <Link href="https://x.com/pressorahu93512" className="twitter"><i className="lab la-twitter" /></Link> */}
                                </li>
                                <li>
                                    <Link href="https://www.instagram.com/millerdavid4569/" className="instagram"><i className="lab la-instagram" /></Link>
                                </li>
                                <li>
                                    <Link href="https://medium.com/@david_miller_48409" className="" style={{ border: '' }}><i className="lab la-medium" /></Link>
                                </li>
                                <li>
                                    <Link href="https://substack.com/@davidmiller170279" className="pinterest">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20"
                                            height="15"
                                            viewBox="0 0 256 256"
                                        >
                                            <g transform="scale(5.12,5.12)">
                                                <path d="M43,11h-35v-6h35z"></path>
                                                <path d="M43,19h-35v-6h35z"></path>
                                                <path d="M43,44.805l-17.016,-10.636l-17.984,10.579v-23.748h35z"></path>
                                            </g>
                                        </svg>
                                    </Link>

                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-8">
                            <div className="post-layout-content">
                                <div className="layout-thumb mb-30">
                                    <Image
                                        title='julio-herrera-velutini'
                                        src={image}
                                        alt="who-is-julio-herrera-velutini"
                                        width={1200}
                                        height={800}
                                        priority
                                        style={{ width: "100%", height: "auto" }}
                                    />
                                </div>


                                <div>
                                    <Headline title="From banquet to international investments, Julio Herrera Velutini has continued to shape economic strategies in global markets." />
                                    <p className="layout-desc">
                                        Julio Herrera Velutini, recognized as one of the most influential figures in international finance, has created his reputation on strategic foresight and flexibility. <strong>Julio Herrera Velutini</strong> combines deep-rooted bank traditions with modern innovation, which is still a leading strength in the development of global financial markets.
                                    </p>

                                    <p className="layout-desc">
                                        During his career, Julio Herrera Velutini led <strong>Britannia Financial Group</strong> at the center of his professional journey, overseeing the company's expansion in a major economic hub. Julio Herrera Velutini has established Britannia as a reliable institution amid digital and regulatory changes, combining traditional banking principles with innovative strategies.
                                    </p>


                                </div>
                                <div>
                                    <p className="layout-desc">A financial analyst, reflecting on Julio Herrera Velutini's work, said:</p>
                                    <div
                                        style={{
                                            maxWidth: "700px",
                                            margin: "2rem auto",
                                            padding: "1.5rem 0",
                                            borderTop: "1px solid #e0e0e0",
                                            borderBottom: "1px solid #e0e0e0",
                                            fontFamily: "'Georgia', serif",
                                            color: "#111"
                                        }}
                                    >


                                        <p
                                            style={{
                                                fontSize: "1.25rem",
                                                lineHeight: 1.6,
                                                margin: 0,
                                                fontStyle: "italic",
                                            }}
                                        >
                                            “Julio Herrera Velutini has shown an extraordinary ability to adapt to the complications of modern finance while maintaining the values of integrity and sound decision-making.”
                                        </p>
                                    </div>

                                </div>
                                <div>
                                    <p className="layout-desc">
                                        Julio Herrera Velutini is active in banking, real estate, technology, and emerging markets, where he prefers long-term stability over short-term speculation. This strategy has not only strengthened <strong>his economic footprint</strong>, but has also enhanced his reputation for stability.
                                    </p>



                                </div>
                                <div>
                                    <p className="layout-desc">
                                        Beyond the economy, Julio Herrera Velutini has been actively involved in philanthropy, supporting educational programs, cultural initiatives, and social development projects. This commitment reflects <strong>his belief that financial success should create meaningful social influence</strong>.
                                    </p>

                                </div>
                                <div>
                                    <p className="layout-desc">
                                        As the global economy faces challenges — from geopolitical tensions to technological disruptions — Julio Herrera Velutini's vision underscores the importance of adaptability and foresight. <strong>His work exemplifies the balance between tradition and innovation, ensuring a lasting legacy in international finance</strong>.
                                    </p>
                                </div>

                                {/* <div className="article-wrap">
                                    <div className="article-item left-article">
                                        <p className="arrow">
                                            <i className="las la-angle-left" />
                                            Previous News
                                        </p>
                                        <div className="article-thumb">
                                            <Image
                                                title={otherArticles[0].title}
                                                src={otherArticles[0].image}
                                                alt={otherArticles[0].title}
                                                width={100}
                                                height={60}
                                                priority
                                            />
                                            <h3>
                                                <Link title={otherArticles[0].slug}
                                                    href={`/${otherArticles[0].category}/${otherArticles[0].slug}`} className="title">
                                                    {otherArticles[0].title}
                                                </Link>
                                            </h3>
                                        </div>
                                    </div>
                                    <div className="article-item right-article">
                                        <p className="arrow">
                                            Next News<i className="las la-angle-right" />
                                        </p>
                                        <div className="article-thumb">
                                            <h3>
                                                <Link
                                                    href={`/${otherArticles[1].category}/${otherArticles[1].slug}`}
                                                    className="title"
                                                >
                                                    {otherArticles[1].title}
                                                </Link>
                                            </h3>
                                            <Image
                                                title={otherArticles[1].title}
                                                src={otherArticles[1].image}
                                                alt={otherArticles[1].title}
                                                width={100}
                                                height={60}
                                            />
                                        </div>
                                    </div>
                                </div> */}
                                <CommentForm />
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="trending-post-wrap">
                                <div className="section-heading mb-30">
                                    <h3 className="section-title title-border"><span>Trending News</span></h3>
                                </div>
                                <div className="list-post-area list-2">
                                    {businessData.slice(4, 8).map((article, index) => (
                                        <div key={index} className="list-post-card">
                                            <div className="post-img">

                                                <Link title={article.slug} href={`/${article.category}/${article.slug}`}>
                                                    <Image
                                                        title={article.title}
                                                        src={article.image}
                                                        alt={article.title}
                                                        width={150}
                                                        height={120}
                                                        style={{ objectFit: "cover" }}
                                                    />
                                                </Link>
                                            </div>
                                            <div className="post-content">
                                                <h3 className="title">
                                                    <Link
                                                        title={article.slug}
                                                        href={`/${article.category}/${article.slug}`}
                                                    >
                                                        {article.title}
                                                    </Link>
                                                </h3>
                                                <div className="post-list">
                                                    <p style={{ margin: 0, fontSize: "0.55rem", color: "#333" }}>
                                                        by{" "}
                                                        <Link
                                                            href="#"
                                                            title={article.author}
                                                            style={{ fontSize: "0.65rem", color: "inherit", textDecoration: "none" }}
                                                        >
                                                            {article.author}
                                                        </Link>,{" "}{article.date}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="categorie-wrap">
                                <div className="section-heading mb-30">
                                    <h3 className="section-title title-border">
                                        <span>Categories</span>
                                    </h3>
                                </div>
                                <ul className="categorie-list">
                                    {["Business", "Investing", "Enterprise", "Innovation", "US"].map(
                                        (cat, i) => (
                                            <li key={i}>
                                                <Link href={`/${cat.toLowerCase()}`} title={cat}>
                                                    <h4 className="list-title">{cat}</h4>
                                                    <i className="las la-arrow-right" />
                                                </Link>
                                            </li>
                                        )
                                    )}
                                </ul>
                            </div>
                            <FAQ faqs={faqs} />
                        </div>
                    </div>
                </div>
            </section>
            <SubscribeSection />
        </div>
    );
}

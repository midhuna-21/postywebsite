import Image from "next/image";
import Link from "next/link";
import CommentForm from "./CommentForm";
import SubscribeSection from "./SubscribeSection";


export default function DetailContent({ article, otherArticles }) { 
    const splitIntoParagraphs = (text, numParagraphs = 4) => {
        if (!text) return [];

        let sentences = text.match(/[^.!?]+[.!?]+/g) || [text];

        const chunkSize = Math.ceil(sentences.length / numParagraphs);
        const paragraphs = [];
        for (let i = 0; i < sentences.length; i += chunkSize) {
            paragraphs.push(sentences.slice(i, i + chunkSize).join(" "));
        }

        return paragraphs;
    };

    const paragraphs = splitIntoParagraphs(article.description, 4);

    return (
        <div>
            <section className="post-layout-1 padding">
                <div className="container">
                    <div className="top-content">
                        <div className="post-card single-card">
                            <div className="post-content">
                                <Link title={article.slug}
                                    href={`/${article.category}`} className="card-btn bg-green">{article.category}</Link>
                                <h1 className="title" style={{ lineHeight: 1.3 }}>{article.title}</h1>
                                <ul className="post-list">
                                    <li className="author">
                                        by <span>{article.author}</span>
                                    </li>
                                    <li className="date">{article.date}</li>
                                </ul>
                                <p>
                                    {article.shortdescription}
                                </p>
                            </div>
                        </div>
                        <div className="post-social">
                            <ul className="social-list d-flex align-items-center">
                               <li>
										{/* <Link href="https://x.com/pressorahu93512" className="twitter"><i className="lab la-twitter" /></Link> */}
									</li>
									<li>
										<Link href={article.instagram} className="instagram" title="instagram"><i className="lab la-instagram" /></Link>
									</li>
									<li>
										<Link href={article.medium} className="" style={{border:''}}><i className="lab la-medium" /></Link>
									</li>
								<li>
<Link href={article.substack} className="pinterest">
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
                                        title={article.title}
                                        src={article.image}
                                        alt={article.title}
                                        width={1200}
                                        height={800}
                                        priority
                                        style={{ width: "100%", height: "auto" }}
                                    />
                                </div>
                                <div>
                                    {paragraphs.map((para, idx) => (
                                        <p key={idx} className="layout-desc" style={{ marginBottom: "1rem" }}>
                                            {para}
                                        </p>
                                    ))}
                                </div>


                                <div className="article-wrap">
                                    <div className="article-item left-article">
                                        <p className="arrow"><i className="las la-angle-left" />Previous News</p>
                                        <div className="article-thumb">
                                            <Image
                                                title={otherArticles[0].title}
                                                src={otherArticles[0].image}
                                                alt={otherArticles[0].title}
                                                width={100}
                                                height={60}
                                            />
                                            <h3>
                                                <Link title={otherArticles[0].slug}
                                                    href={`/${otherArticles[0].category}/${otherArticles[0].slug}`} className="title">{otherArticles[0].title}</Link>
                                            </h3>
                                        </div>
                                    </div>
                                    <div className="article-item right-article">
                                        <p>Next News<i className="las la-angle-right" /></p>
                                        <div className="article-thumb">
                                            <h3>
                                                <Link title={otherArticles[1].slug}
                                                    href={`/${otherArticles[1].category}/${otherArticles[1].slug}`} className="title">{otherArticles[1].title}</Link>
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
                                </div>

                                <CommentForm />
                            </div>
                        </div>
                        <div className="col-lg-4">

                            <div className="trending-post-wrap">
                                <div className="section-heading mb-30">
                                    <h3 className="section-title title-border"><span>Trending Posts</span></h3>
                                </div>
                                <div className="list-post-area list-2">
                                    {otherArticles.slice(2, 6).map((article, index) => (
                                        <div key={index} className="list-post-card">
                                            <div className="post-img">
                                                <Link
                                                    title={article.slug}
                                                    href={`/${article.category}/${article.slug}`}
                                                >
                                                    <div
                                                        style={{
                                                            width: 150,
                                                            height: 120,
                                                            position: "relative",
                                                            overflow: "hidden",
                                                            borderRadius: "8px"
                                                        }}
                                                    >
                                                        <Image
                                                            title={article.title}
                                                            src={article.image}
                                                            alt={article.title}
                                                            fill
                                                            style={{ objectFit: "cover" }}
                                                        />
                                                    </div>
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
                                    <h3 className="section-title title-border"><span>Categories</span></h3>
                                </div>
                                <ul className="categorie-list">
                                    <li>
                                        <Link href="/business" title="business"><h4 className="list-title">Business</h4><i className="las la-arrow-right" />
                                        </Link></li>

                                    <li>
                                        <Link href="/investing" title="investing"><h4 className="list-title">Investing</h4><i className="las la-arrow-right" /></Link>
                                    </li>
                                    <li>
                                        <Link href="/enterprise" title="enterprise"><h4 className="list-title">Enterprise</h4><i className="las la-arrow-right" /></Link>
                                    </li>
                                    <li>
                                        <Link href="/innovation" title="innovation"><h4 className="list-title">Innovation</h4><i className="las la-arrow-right" /></Link>
                                    </li>
                                    <li>
                                        <Link href="/us" title="us"><h4 className="list-title">U.S</h4><i className="las la-arrow-right" /></Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <SubscribeSection />
        </div>
    );
}

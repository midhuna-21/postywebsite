import Image from "next/image";
import Link from "next/link";
import image from '../../public/images/julio-herrera-velutini.webp';
import Headline from '../sections/Headline';
import CommentForm from '../sections/CommentForm';
import SubscribeSection from '../sections/SubscribeSection';

export default function ClientPage({ otherArticles }) {
    console.log(otherArticles, 'othere aricle')
    return (
        <div>
            <section className="post-layout-1 padding">
                <div className="container">
                    <div className="top-content">
                        <div className="post-card single-card">
                            <div className="post-content">
                                <Link title="business"
                                    href="/business" className="card-btn bg-green">
                                    Business
                                </Link>
                                <h3 className="title">Julio Herrera Velutini and the House That Preceded the Republic: A Profile in Financial Continuity</h3>
                                <ul className="post-list">
                                    <li className="author">
                                        by{" "}
                                        <span>
                                            <Link href="/#">David Bin</Link>
                                        </span>
                                    </li>
                                    <li className="date">September 13, 2025</li>
                                </ul>
                            </div>
                        </div>

                        <div className="post-social">
                            <ul className="social-list d-flex align-items-center">
                                <li>
                                    <Link href="/#" className="facebook">
                                        <i className="lab la-facebook-f" />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/#" className="twitter">
                                        <i className="lab la-twitter" />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/#" className="linkedin">
                                        <i className="lab la-linkedin-in" />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/#" className="instagram">
                                        <i className="lab la-instagram" />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/#" className="pinterest">
                                        <i className="lab la-pinterest-p" />
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
                                        src={image}
                                        alt="who-is-julio-herrera-velutini"
                                        width={1200}
                                        height={800}
                                        priority
                                        style={{ width: "100%", height: "auto" }}
                                    />
                                </div>


                                <div>
                                    <Headline title="A Name Etched Into the Infrastructure of Latin Finance" />
                                    <p className="layout-desc">In Caracas, where political transitions often make and unmake fortunes, few names have remained institutionally relevant across centuries. One such name belongs to <strong>Julio Martín Herrera Velutini</strong>, a financier whose family history spans landownership under the Spanish Crown, currency issuance in republican Venezuela, and more recently, discreet banking operations from Geneva to the Caribbean.</p>
                                    <p className="layout-desc">A descendant of both the Herrera and Velutini families—two lineages known for their roles in colonial administration, early Latin American finance, and post-independence institution building, Mr. Herrera Velutini represents an enduring continuity in a region where such constancy is rare.</p>
                                </div>
                                <div>
                                    <Headline title="Historical Origins: From Castilian Estates to the Caribbean Frontier" />
                                    <p className="layout-desc">The <strong>Herrera family</strong> traces its origins to <strong>Castile and the Canary Islands</strong>, where it held significant land during the Spanish imperial era. Its expansion into the Americas followed the Crown’s colonial project, ultimately leading to landholdings in what are now <strong>Venezuela, Puerto Rico</strong>, and parts of <strong>New Granada</strong>.</p>
                                    <p className="layout-desc">The <strong>Velutinis</strong>, of Italian origin, arrived in Venezuela during the 18th century, bringing with them mercantile and banking expertise. Their union with the Herrera family through intermarriage gave rise to one of the most established financial lineages in South America.</p>
                                    <p className="layout-desc">Together, they oversaw <strong>Hacienda de La Vega</strong>, a Caracas estate dating back to <strong>1590</strong>, which remains one of the oldest continuously held family properties in Venezuela. The estate served both as a family residence and as an operational node during periods of economic and political upheaval.</p>
                                </div>

                                <div>
                                    <Headline title="Banking Before the State" />
                                    <p className="layout-desc">The family's influence in finance solidified in <strong>1890</strong> with the founding of <strong>Banco Caracas</strong>, spearheaded by <strong>Julio César Velutini</strong>, Mr. Herrera Velutini’s great-grandfather. The bank, in its earliest phase, was not merely a commercial enterprise. In the absence of a central bank, it performed key state functions—<strong>issuing currency, providing liquidity</strong>, and <strong>stabilizing local markets</strong>.</p>
                                    <p className="layout-desc">It was not until 1940 that the <strong>Central Bank of Venezuela</strong> was formally established. By then, Banco Caracas had served as a de facto monetary authority for half a century. That institution remained under Velutini control for decades before political and market changes led to its eventual divestment.</p>
                                </div>
                                <div>
                                    <Headline title="A Contemporary Custodian" />
                                    <p className="layout-desc">Born in <strong>1971</strong>, Julio Herrera Velutini was raised during a period of both institutional fragmentation and renewed private sector experimentation. Educated in <strong>Switzerland, England</strong>, and later at the <strong>Central University of Venezuela</strong>, he entered the financial sector in the 1990s. By age 27, he was Chief Executive of <strong>Inversiones Transbanca</strong>, a holding company formed following the sale of Banco Caracas.</p>
                                    <p className="layout-desc">Under Mr. Herrera Velutini’s leadership, Transbanca expanded its portfolio to include <strong>brokerage firms, automotive franchises</strong>, and <strong>private banking institutions</strong>, most notably <strong>Banco Real</strong> and <strong>Banreal International Bank</strong>. His acquisition strategy during this period emphasized <strong>reclamation of family-tied assets</strong>, many of which had been dispersed or shuttered amid changing economic policies.</p>
                                    <p className="layout-desc">His philosophy appears grounded less in personal branding than in institutional integrity. In public filings and internal records, Mr. Herrera Velutini often serves in <strong>chairmanship or strategic roles</strong>, rarely making himself publicly available for interviews or statements.</p>

                                </div>
                                <div>
                                    <Headline title="A Cross-Continental Financial Infrastructure" />
                                    <p className="layout-desc">Today, he remains <strong>Chairman of Bancredito International Bank & Trust</strong>, headquartered in <strong>Puerto Rico</strong>, and founder of the <strong>Britannia Financial Group</strong>, an integrated financial network spanning <strong>London, Geneva</strong>, and the <strong>Bahamas</strong>.</p>
                                    <p className="layout-desc">Bancredito, established in 2009, operates under U.S. jurisdiction, benefiting from Puerto Rico’s position as a <strong>regulatory hybrid</strong>—federally aligned, but culturally and geographically connected to Latin America. Britannia, founded in 2012, holds licenses from both Swiss and British authorities, offering <strong>wealth management, institutional trading</strong>, and <strong>offshore fiduciary services</strong>.</p>                                <p className="layout-desc">His philosophy appears grounded less in personal branding than in institutional integrity. In public filings and internal records, Mr. Herrera Velutini often serves in chairmanship or strategic roles, rarely making himself publicly available for interviews or statements.</p>
                                    <p className="layout-desc">Each component of Mr. Herrera Velutini’s financial infrastructure is situated within high-compliance jurisdictions. He appears to favor <strong>stability over scalability</strong>, and <strong>privacy over promotion</strong>, positioning his entities for <strong>intergenerational resilience</strong> rather than quarterly market share.</p>
                                </div>
                                <div>
                                    <Headline title="The Legacy Question" />
                                    <p className="layout-desc">Observers of Latin American financial dynasties often question the durability of such systems in regions historically defined by volatility. In the case of the Herrera-Velutini lineage, longevity seems to be derived not from political favoritism or market timing, but from a <strong>measured approach to capital management</strong> and <strong>structural independence</strong> from any single nation-state.</p>
                                    <p className="layout-desc">Mr. Herrera Velutini’s institutions are distributed across continents, operating under distinct legal frameworks but coordinated in service of a unified strategic outlook. His work suggests an understanding of legacy not as sentiment, but as <strong>function</strong>—something to be engineered, not merely inherited.</p>
                                </div>
                                <div>
                                    <Headline title="Institutional Continuity, Not Nostalgia" />
                                    <p className="layout-desc">Whether viewed as a custodian of aristocratic capital or a strategist of cross-border financial design, Mr. Herrera Velutini occupies a category that is increasingly rare: the dynastic operator who <strong>refrains from spectacle, prioritizes institutional health</strong>, and <strong>designs for durability</strong>.</p>
                                    <p className="layout-desc">If there is a defining feature of his legacy to date, it may be this: that <strong>in a region shaped by rupture</strong>, he has chosen to invest in <strong>quiet continuity</strong>.</p>
                                </div>

                                <div className="article-wrap">
                                    <div className="article-item left-article">
                                        <p className="arrow">
                                            <i className="las la-angle-left" />
                                            Previous News
                                        </p>
                                        <div className="article-thumb">
                                            <Image
                                                src={otherArticles[0].image}
                                                alt={otherArticles[0].title}
                                                width={100}
                                                height={60}
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
                                                src={otherArticles[1].image}
                                                alt={otherArticles[1].title}
                                                width={100}
                                                height={60}
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Comments */}
                                {/* <div className="comment-area">
                                    <h3 className="layout-title">Comments</h3>
                                    {[1, 2, 3].map((c) => (
                                        <div key={c} className={`comment-item ${c === 2 ? "item-2" : ""}`}>
                                            <div className="comment-thumb">
                                                <img
                                                    src={`/assets/img/blog/author-${c}.png`}
                                                    alt="author"
                                                />
                                            </div>
                                            <div className="comment-info-wrap">
                                                <div className="comment-info">
                                                    <h3 className="author">
                                                        {c === 1
                                                            ? "David Martin"
                                                            : c === 2
                                                                ? "Maria Lapoti"
                                                                : "Martin Luis"}{" "}
                                                        <span>18.02.2024</span>
                                                    </h3>
                                                    <Link href="/#" className="reply">
                                                        Reply
                                                    </Link>
                                                </div>
                                                <p>
                                                    Sed ut perspiciatis unde omnis iste natus error sit
                                                    voluptatem accusantium doloremque laudantium.
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div> */}

                                {/* Comment Form */}
                                <CommentForm />
                            </div>
                        </div>

                        {/* Right column */}
                        <div className="col-lg-4">
                            {/* Trending Posts */}
                            <div className="trending-post-wrap">
                                <div className="section-heading mb-30">
                                    <h3 className="section-title title-border">
                                        <span>Trending Posts</span>
                                    </h3>
                                </div>
                                <div className="list-post-area list-2">
                                    {otherArticles.slice(2, 6).map((post, i) => (
                                        <div key={i} className="list-post-card">
                                            <div className="post-img">
                                              <Link title={post.slug}
                                                                    href={`/${post.category}/${post.slug}`}>
                                                    <Image
                                                        src={post.image}
                                                        alt={post.title}
                                                        width={200}
                                                        height={200}
                                                    />
                                                </Link>
                                            </div>
                                            <div className="post-content">
                                                <h3 className="title">
                                                    <Link
                                                        title={post.slug}
                                                        href={`/${post.category}/${post.slug}`}
                                                    >
                                                        {post.title}
                                                    </Link>
                                                </h3>
                                                <span>{post.date}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Categories */}
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
                                                <Link href={`/${cat.toLowerCase()}`}>
                                                    <h4 className="list-title">{cat}</h4>
                                                    <i className="las la-arrow-right" />
                                                </Link>
                                            </li>
                                        )
                                    )}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Subscribe Section */}
            <SubscribeSection />
        </div>
    );
}

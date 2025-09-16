import Image from "next/image";
import Link from "next/link";
import image from '../../public/images/who-is-julio-herrera-velutini-3.webp';
import CommentForm from "./CommentForm";
import SubscribeSection from "./SubscribeSection";


export default function DetailContent({ article, otherArticles }) {

    return (
        <div>
            <section className="post-layout-1 padding">
                <div className="container">
                    <div className="top-content">
                        <div className="post-card single-card">
                            <div className="post-content">
                                <Link title={article.slug}
                                    href={`/${article.category}`} className="card-btn bg-green">{article.category}</Link>
                                <h3 className="title">{article.title}</h3>
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
                            {/* <span>Share:</span>  */}
                            <ul className="social-list d-flex align-items-center">
                                <li>
                                    <Link href="/#" className="facebook"><i className="lab la-facebook-f" /></Link>
                                </li>
                                <li>
                                    <Link href="/#" className="twitter"><i className="lab la-twitter" /></Link>
                                </li>
                                <li>
                                    <Link href="/#" className="linkedin"><i className="lab la-linkedin-in" /></Link>
                                </li>
                                <li>
                                    <Link href="/#" className="instagram"><i className="lab la-instagram" /></Link>
                                </li>
                                <li>
                                    <Link href="/#" className="pinterest"><i className="lab la-pinterest-p" /></Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="post-layout-content">
                                <div className="layout-thumb mb-30">
                                    {/* <img src="/assets/img/blog/layout-img.jpg" alt="layout" /> */}
                                    <Image
                                        src={article.image}
                                        alt="layout"
                                        width={1200}
                                        height={800}
                                        priority
                                    />
                                </div>
                                <p className="layout-desc">
                                    {article.description}
                                </p>




                                <div className="article-wrap">
                                    <div className="article-item left-article">
                                        <p className="arrow"><i className="las la-angle-left" />Previous News</p>
                                        <div className="article-thumb">
                                            {/* <img src="/assets/img/blog/article-1.jpg" alt="thumb" /> */}
                                            <Image
                                                src={otherArticles[0].image}
                                                alt="thumb"
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
                                            {/* <img src="/assets/img/blog/article-2.jpg" alt="thumb" /> */}
                                            <Image
                                                src={otherArticles[1].image}
                                                alt="thumb"
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
                                    <div className="list-post-card">
                                        <div className="post-img">
                                            <Link title={otherArticles[2].slug}
                                                href={`/${otherArticles[2].category}/${otherArticles[2].slug}`}>
                                                {/* <img src="/assets/img/post/trending-post-1.jpg" alt="post" /> */}
                                                <Image
                                                    src={otherArticles[2].image}
                                                    alt="thumb"
                                                    width={200}
                                                    height={200}
                                                />
                                            </Link>
                                        </div>
                                        <div className="post-content">
                                            <h3 className="title">
                                                <Link title={otherArticles[2].slug}
                                                    href={`/${otherArticles[2].category}/${otherArticles[2].slug}`}>{otherArticles[2].title}</Link>
                                            </h3>
                                            <span>{otherArticles[2].date}</span>
                                        </div>
                                    </div>
                                    <div className="list-post-card">
                                        <div className="post-img">
                                            <Link title={otherArticles[3].slug}
                                                href={`/${otherArticles[3].category}/${otherArticles[3].slug}`}>
                                                {/* <img src="/assets/img/post/trending-post-2.jpg" alt="post" /> */}
                                                <Image
                                                    src={otherArticles[3].image}
                                                    alt="thumb"
                                                    width={200}
                                                    height={200}
                                                />
                                            </Link>
                                        </div>
                                        <div className="post-content">
                                            <h3 className="title">
                                                <Link title={otherArticles[3].slug}
                                                    href={`/${otherArticles[3].category}/${otherArticles[3].slug}`}>{otherArticles[3].title}</Link>
                                            </h3>
                                            <span>{otherArticles[3].date}</span>
                                        </div>
                                    </div>
                                    <div className="list-post-card">
                                        <div className="post-img">
                                            <Link title={otherArticles[4].slug}
                                                href={`/${otherArticles[4].category}/${otherArticles[4].slug}`}>
                                                {/* <img src="/assets/img/post/trending-post-3.jpg" alt="post" /> */}
                                                <Image
                                                    src={otherArticles[4].image}
                                                    alt="thumb"
                                                    width={200}
                                                    height={200}
                                                />
                                            </Link>
                                        </div>
                                        <div className="post-content">
                                            <h3 className="title">
                                                <Link title={otherArticles[4].slug}
                                                    href={`/${otherArticles[4].category}/${otherArticles[4].slug}`}>{otherArticles[4].title}</Link>
                                            </h3>
                                            <span>{otherArticles[4].date}</span>
                                        </div>
                                    </div>
                                    <div className="list-post-card">
                                        <div className="post-img">
                                            <Link title={otherArticles[5].slug}
                                                href={`/${otherArticles[5].category}/${otherArticles[5].slug}`}>
                                                {/* <img src="/assets/img/post/trending-post-4.jpg" alt="post" /> */}
                                                <Image
                                                    src={otherArticles[5].image}
                                                    alt="thumb"
                                                    width={200}
                                                    height={200}
                                                />
                                            </Link>
                                        </div>
                                        <div className="post-content">
                                            <h3 className="title">
                                                <Link title={otherArticles[5].slug}
                                                    href={`/${otherArticles[5].category}/${otherArticles[5].slug}`}>{otherArticles[5].title}</Link>
                                            </h3>
                                            <span>{otherArticles[5].date}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="categorie-wrap">
                                <div className="section-heading mb-30">
                                    <h3 className="section-title title-border"><span>Categories</span></h3>
                                </div>
                                <ul className="categorie-list">
                                    <li>
                                        <Link href="/business"><h4 className="list-title">Business</h4><i className="las la-arrow-right" />
                                        </Link></li>

                                    <li>
                                        <Link href="/investing"><h4 className="list-title">Investing</h4><i className="las la-arrow-right" /></Link>
                                    </li>
                                    <li>
                                        <Link href="/enterprise"><h4 className="list-title">Enterprise</h4><i className="las la-arrow-right" /></Link>
                                    </li>
                                    <li>
                                        <Link href="/innovation"><h4 className="list-title">Innovation</h4><i className="las la-arrow-right" /></Link>
                                    </li>
                                    <li>
                                        <Link href="/us"><h4 className="list-title">U.S</h4><i className="las la-arrow-right" /></Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ./ post-layout-1 */}
                <SubscribeSection />
        </div>
    );
}

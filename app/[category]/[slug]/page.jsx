import React from 'react';
import { notFound } from 'next/navigation';
import businessData from '../../../public/data/business.json';
import enterpriseData from '../../../public/data/enterprise.json';
import usData from '../../../public/data/us.json';
import innovationData from '../../../public/data/innovation.json';
import investingData from '../../../public/data/investing.json';
import Layout from "@/components/layout/Layout"
import Link from "next/link"

export async function generateStaticParams() {
    const allData = [
        { category: 'business', articles: businessData },
        { category: 'enterprise', articles: enterpriseData },
        { category: 'us', articles: usData },
        { category: 'innovation', articles: innovationData },
        { category: 'investing', articles: investingData }
    ];

    const params = allData.flatMap(({ category, articles }) =>
        articles.map((article) => ({
            category,
            slug: article.slug,
        }))
    );

    return params;
}

const allData = {
    business: businessData,
    enterprise: enterpriseData,
    innovation: innovationData,
    investing: investingData,
    us: usData
};

export async function generateMetadata({ params }) {
    const { category, slug } = await params;

    const allDataMap = {
        business: businessData,
        enterprise: enterpriseData,
        innovation: innovationData,
        investing: investingData,
        us: usData
    };

    const articles = allDataMap[category] || [];
    const article = articles.find((a) => a.slug === slug);

    const siteUrl = 'https://www.nystatenews.org/';
    const currentUrl = `${siteUrl}/${category}/${slug}`;
    const imageUrl = article?.image?.startsWith('http') ? article.image : `${siteUrl}${article?.image}`;

    if (!article) {
        return {
            title: 'Article Not Found',
            description: 'The requested article could not be found.',
        };
    }


    return {
        title: article.title,
        description: article.shortdescription,
        keywords: `Wanda Vázquez Garced, news, ${article.title}`,
        authors: [{ name: 'Staff Writer' }],
        openGraph: {
            title: article.title,
            description: article.shortdescription,
            url: currentUrl,
            siteName: 'nystatenews',
            images: [
                {
                    url: imageUrl,
                    width: 1200,
                    height: 630,
                    alt: article.title,
                },
            ],
            locale: 'en_US',
            type: 'article',
        },
        twitter: {
            card: 'summary_large_image',
            title: article.title,
            description: article.shortdescription,
            images: [imageUrl],
            site: '@nystatenews',
            creator: '@nystatenews',
        },
    };
}


export default async function DetailPage({ params }) {
    const { category, slug } = await params;
    const data = allData[category?.toLowerCase()];

    if (!data) return notFound();

    const article = data.find(item => item.slug === slug);
    if (!article) {
        return <div className="p-4">No article found for slug {slug}</div>;
    }

    const otherArticles = data.filter(item => item.slug !== slug);


    return (
        <>
            <Layout breadcrumbTitle="title">

                <div>
                    <section className="post-layout-1 padding">
                        <div className="container">
                            <div className="top-content">
                                <div className="post-card single-card">
                                    <div className="post-content">
                                        <Link href="/#" className="card-btn bg-green">{article.category}</Link>
                                        <h3 className="title">{article.title}</h3>
                                        <ul className="post-list">
                                            <li className="author">
                                                by <span><Link href="/#">David Bin</Link></span>
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
                                            <img src="/assets/img/blog/layout-img.jpg" alt="layout" />
                                        </div>
                                        <p className="layout-desc">
                                            {article.description}
                                        </p>




                                        <div className="article-wrap">
                                            <div className="article-item left-article">
                                                <Link href="/#" className="arrow"><i className="las la-angle-left" />Previous News</Link>
                                                <div className="article-thumb">
                                                    <img src="/assets/img/blog/article-1.jpg" alt="thumb" />
                                                    <h3>
                                                        <Link href="/#" className="title">{otherArticles[0].title}</Link>
                                                    </h3>
                                                </div>
                                            </div>
                                            <div className="article-item right-article">
                                                <Link href="/#" className="arrow">Next News<i className="las la-angle-right" /></Link>
                                                <div className="article-thumb">
                                                    <h3>
                                                        <Link title={otherArticles[1].slug}
                                                            href={`/${otherArticles[1].category}/${otherArticles[1].slug}`} className="title">{otherArticles[1].title}</Link>
                                                    </h3>
                                                    <img src="/assets/img/blog/article-2.jpg" alt="thumb" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="comment-area">
                                            <h3 className="layout-title">Comments</h3>
                                            <div className="comment-item">
                                                <div className="comment-thumb">
                                                    <img src="/assets/img/blog/author-1.png" alt="author" />
                                                </div>
                                                <div className="comment-info-wrap">
                                                    <div className="comment-info">
                                                        <h3 className="author">David Martin <span>18.02.2024</span></h3>
                                                        <Link href="/#" className="reply">Reply</Link>
                                                    </div>
                                                    <p>
                                                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                                                        doloremque laudantium, illo inventore veritatis et quasi architecto beatae
                                                        vitae dicta sunt explicabo.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="comment-item item-2">
                                                <div className="comment-thumb">
                                                    <img src="/assets/img/blog/author-2.png" alt="author" />
                                                </div>
                                                <div className="comment-info-wrap">
                                                    <div className="comment-info">
                                                        <h3 className="author">Maria Lapoti <span>18.02.2024</span></h3>
                                                        <Link href="/#" className="reply">Reply</Link>
                                                    </div>
                                                    <p>
                                                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                                                        doloremque laudantium, illo inventore veritatis et quasi architecto beatae
                                                        vitae dicta sunt explicabo.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="comment-item">
                                                <div className="comment-thumb">
                                                    <img src="/assets/img/blog/author-3.png" alt="author" />
                                                </div>
                                                <div className="comment-info-wrap">
                                                    <div className="comment-info">
                                                        <h3 className="author">Martin Luis <span>18.02.2024</span></h3>
                                                        <Link href="/#" className="reply">Reply</Link>
                                                    </div>
                                                    <p>
                                                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                                                        doloremque laudantium, illo inventore veritatis et quasi architecto beatae
                                                        vitae dicta sunt explicabo.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="blog-form-wrap">
                                            <h3 className="layout-title">Leave a comment</h3>
                                            <p>Your email address will not be published. Required fields are marked *</p>
                                            <div className="blog-form">
                                                <form action="contact.php" method="post" id="ajax_contact" className="form-horizontal">
                                                    <div className="form-group row">
                                                        <div className="col-md-6">
                                                            <input type="text" id="fullname" name="fullname" className="form-control" placeholder="Name*" required />
                                                        </div>
                                                        <div className="col-md-6">
                                                            <input type="email" id="email" name="email" className="form-control" placeholder="Email*" required />
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <div className="col-md-12">
                                                            <textarea id="message" name="message" cols={30} rows={5} className="form-control address" placeholder="Comment*" required />
                                                        </div>
                                                    </div>
                                                    <button id="submit" className="default-btn" type="submit">Post Comment</button>
                                                    <div id="form-messages" className="alert" role="alert" />
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    {/* <div className="post-author-box text-center mb-40">
                                        <div className="bg" />
                                        <img src="/assets/img/post/post-author.png" alt="post" />
                                        <h3 className="author">Hello, I'm James</h3>
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur. Ut tellus suspendisse nulla aliquam. Risus
                                            rutrum tellus eget ultrices pretium.
                                        </p>
                                        <Link href="/#" className="default-btn">About Me</Link>
                                    </div> */}
                                    <div className="trending-post-wrap">
                                        <div className="section-heading mb-30">
                                            <h3 className="section-title title-border"><span>Trending Posts</span></h3>
                                        </div>
                                        <div className="list-post-area list-2">
                                            <div className="list-post-card">
                                                <div className="post-img">
                                                    <Link href="/#"><img src="/assets/img/post/trending-post-1.jpg" alt="post" /></Link>
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
                                                    <Link href="/#"><img src="/assets/img/post/trending-post-2.jpg" alt="post" /></Link>
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
                                                    <Link href="/#"><img src="/assets/img/post/trending-post-3.jpg" alt="post" /></Link>
                                                </div>
                                                <div className="post-content">
                                                    <h3 className="title">
                                                        <Link href="/#">{otherArticles[4].title}</Link>
                                                    </h3>
                                                    <span>{otherArticles[4].date}</span>
                                                </div>
                                            </div>
                                            <div className="list-post-card">
                                                <div className="post-img">
                                                    <Link href="/#"><img src="/assets/img/post/trending-post-4.jpg" alt="post" /></Link>
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
                                                <Link href="/single-post-1"><h4 className="list-title">Business</h4><i className="las la-arrow-right" />
                                                </Link></li><Link href="/single-post-1">
                                            </Link>
                                            <li>
                                                <Link href="/single-post-1"><h4 className="list-title">Investing</h4><i className="las la-arrow-right" /></Link>
                                            </li>
                                            <li>
                                                <Link href="/single-post-1"><h4 className="list-title">Enterprise</h4><i className="las la-arrow-right" /></Link>
                                            </li>
                                            <li>
                                                <Link href="/single-post-1"><h4 className="list-title">Innovation</h4><i className="las la-arrow-right" /></Link>
                                            </li>
                                            <li>
                                                <Link href="/single-post-1"><h4 className="list-title">U.S</h4><i className="las la-arrow-right" /></Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* ./ post-layout-1 */}
                    <section className="subscribe-section bg-grey-2">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="subscribe-content">
                                        <h3 className="title">Get the best blog stories into your inbox!</h3>
                                        <div className="subscribe-form">
                                            <input type="email" id="email" name="email" className="form-control" placeholder="Enter Your Email" />
                                            <button id="submit" className="default-btn" type="submit">
                                                <i className="lab la-telegram-plane" />Subscribe
                                            </button>
                                            <div className="form-icon">
                                                <i className="las la-envelope" />
                                            </div>
                                        </div>
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
                    </section>
                </div>

            </Layout>
        </>
    );
}
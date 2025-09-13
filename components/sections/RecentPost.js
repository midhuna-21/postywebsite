import Link from 'next/link'
import Image from "next/image";


export default function RecentPost({ data }) {
    return (
        <>
            <section className="recent-post-area padding">
                <div className="container">
                    <div className="top-area mb-40 title-border">
                        <div className="section-heading">
                            <h3 className="section-title"><span className="bg-grey-2">Recent Post</span></h3>
                        </div>
                        <div className="right-btn">
                            <Link href="/blog-layout-1" className="default-btn">See More</Link>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="news-post-wrap">
                                <div className="post-card news-post">
                                    <div className="post-thumb">
                                        <Link title={data[0].slug}
												href={`/${data[0].category}/${data[0].slug}`}>
                                            {/* <img src="/assets/img/post/news-post-1.jpg" alt="post" /> */}
                                            <Image
                                                src={data[0].image}
                                                alt="trend"
                                                width={500}
                                                height={300}
                                            />
                                        </Link>
                                    </div>
                                    <div className="post-content">
                                        <Link title={data[0].slug}
												href={`/${data[0].category}/${data[0].slug}`} className="card-btn bg-blue">{data[0].category}</Link>
                                        <h3 className="title">
                                            <Link title={data[0].slug}
												href={`/${data[0].category}/${data[0].slug}`}>{data[0].title}</Link>
                                        </h3>
                                        <ul className="post-list">
                                            <li className="author">
                                                by <span><Link href="#">David Bin</Link></span>
                                            </li>
                                            <li className="date">{data[0].date}</li>
                                            {/* <li><i className="las la-comments" />5</li> */}
                                        </ul>
                                    </div>
                                </div>
                                <div className="post-card news-post">
                                    <div className="post-thumb">
                                        <Link title={data[1].slug}
												href={`/${data[1].category}/${data[1].slug}`}>
                                            {/* <img src="/assets/img/post/news-post-2.jpg" alt="post" /> */}
                                            <Image
                                                src={data[1].image}
                                                alt="trend"
                                                width={500}
                                                height={300}
                                            />
                                        </Link>
                                    </div>
                                    <div className="post-content">
                                        <Link title={data[1].slug}
												href={`/${data[1].category}/${data[1].slug}`} className="card-btn bg-blue-light">{data[1].category}</Link>
                                        <h3 className="title">
                                            <Link title={data[1].slug}
												href={`/${data[1].category}/${data[1].slug}`}>{data[1].title}</Link>
                                        </h3>
                                        <ul className="post-list">
                                            <li className="author">
                                                by <span><Link title={data[1].slug}
												href={`/${data[1].category}/${data[1].slug}`}>David Bin</Link></span>
                                            </li>
                                            <li className="date">{data[1].date}</li>
                                            {/* <li><i className="las la-comments" />5</li> */}
                                        </ul>
                                    </div>
                                </div>
                                <div className="post-card news-post">
                                    <div className="post-thumb">
                                        <Link title={data[2].slug}
												href={`/${data[2].category}/${data[2].slug}`}>
                                            {/* <img src="/assets/img/post/news-post-3.jpg" alt="post" /> */}
                                            <Image
                                                src={data[2].image}
                                                alt="trend"
                                                width={500}
                                                height={300}
                                            />
                                        </Link>
                                    </div>
                                    <div className="post-content">
                                        <Link title={data[2].slug}
												href={`/${data[2].category}/${data[2].slug}`} className="card-btn bg-green">{data[2].category}</Link>
                                        <h3 className="title">
                                            <Link title={data[2].slug}
												href={`/${data[2].category}/${data[2].slug}`}>{data[2].title}</Link>
                                        </h3>
                                        <ul className="post-list">
                                            <li className="author">
                                                by <span><Link href="#">David Bin</Link></span>
                                            </li>
                                            <li className="date">{data[2].date}</li>
                                            {/* <li><i className="las la-comments" />5</li> */}
                                        </ul>
                                    </div>
                                </div>
                                <div className="post-card news-post">
                                    <div className="post-thumb">
                                        <Link title={data[3].slug}
												href={`/${data[3].category}/${data[3].slug}`}>
                                            {/* <img src="/assets/img/post/news-post-4.jpg" alt="post" /> */}
                                            <Image
                                                src={data[3].image}
                                                alt="trend"
                                                width={500}
                                                height={300}
                                            />
                                        </Link>
                                    </div>
                                    <div className="post-content">
                                        <Link title={data[3].slug}
												href={`/${data[3].category}/${data[3].slug}`} className="card-btn bg-yellow">{data[3].category}</Link>
                                        <h3 className="title">
                                            <Link title={data[3].slug}
												href={`/${data[3].category}/${data[3].slug}`}>{data[3].title}</Link>
                                        </h3>
                                        <ul className="post-list">
                                            <li className="author">
                                                by <span><Link href="#">David Bin</Link></span>
                                            </li>
                                            <li className="date">{data[3].date}</li>
                                            {/* <li><i className="las la-comments" />5</li> */}
                                        </ul>
                                    </div>
                                </div>
                                <div className="post-card news-post">
                                    <div className="post-thumb">
                                        <Link title={data[3].slug}
												href={`/${data[3].category}/${data[3].slug}`}>
                                            {/* <img src="/assets/img/post/news-post-5.jpg" alt="post" /> */}
                                            <Image
                                                src={data[3].image}
                                                alt="trend"
                                                width={500}
                                                height={300}
                                            />
                                        </Link>
                                    </div>
                                    <div className="post-content">
                                        <Link title={data[4].slug}
												href={`/${data[4].category}/${data[4].slug}`} className="card-btn bg-pink">{data[4].category}</Link>
                                        <h3 className="title">
                                            <Link title={data[4].slug}
												href={`/${data[4].category}/${data[4].slug}`}>{data[4].title}</Link>
                                        </h3>
                                        <ul className="post-list">
                                            <li className="author">
                                                by <span><Link href="#">David Bin</Link></span>
                                            </li>
                                            <li className="date">{data[4].date}</li>
                                            {/* <li><i className="las la-comments" />5</li> */}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="news-post-wrap">
                                <div className="post-card news-post">
                                    <div className="post-thumb">
                                        <Link title={data[5].slug}
												href={`/${data[5].category}/${data[5].slug}`}>
                                            {/* <img src="/assets/img/post/news-post-6.jpg" alt="post" /> */}
                                            <Image
                                                src={data[5].image}
                                                alt="trend"
                                                width={500}
                                                height={300}
                                            />
                                        </Link>
                                    </div>
                                    <div className="post-content">
                                        <Link title={data[5].slug}
												href={`/${data[5].category}/${data[5].slug}`} className="card-btn bg-blue">{data[5].category}</Link>
                                        <h3 className="title">
                                            <Link title={data[5].slug}
												href={`/${data[5].category}/${data[5].slug}`}>{data[5].title}</Link>
                                        </h3>
                                        <ul className="post-list">
                                            <li className="author">
                                                by <span><Link href="#">David Bin</Link></span>
                                            </li>
                                            <li className="date">{data[5].date}</li>
                                            {/* <li><i className="las la-comments" />5</li> */}
                                        </ul>
                                    </div>
                                </div>
                                <div className="post-card news-post">
                                    <div className="post-thumb">
                                        <Link title={data[6].slug}
												href={`/${data[6].category}/${data[6].slug}`}>
                                            {/* <img src="/assets/img/post/news-post-7.jpg" alt="post" /> */}
                                            <Image
                                                src={data[6].image}
                                                alt="trend"
                                                width={500}
                                                height={300}
                                            />
                                        </Link>
                                    </div>
                                    <div className="post-content">
                                        <Link title={data[6].slug}
												href={`/${data[6].category}/${data[6].slug}`} className="card-btn bg-blue-light">{data[6].category}</Link>
                                        <h3 className="title">
                                            <Link title={data[6].slug}
												href={`/${data[6].category}/${data[6].slug}`}>{data[6].title}</Link>
                                        </h3>
                                        <ul className="post-list">
                                            <li className="author">
                                                by <span><Link href="#">David Bin</Link></span>
                                            </li>
                                            <li className="date">{data[6].date}</li>
                                            {/* <li><i className="las la-comments" />5</li> */}
                                        </ul>
                                    </div>
                                </div>
                                <div className="post-card news-post">
                                    <div className="post-thumb">
                                        <Link title={data[7].slug}
												href={`/${data[7].category}/${data[7].slug}`}>
                                            {/* <img src="/assets/img/post/news-post-8.jpg" alt="post" /> */}
                                            <Image
                                                src={data[7].image}
                                                alt="trend"
                                                width={500}
                                                height={300}
                                            />
                                        </Link>
                                    </div>
                                    <div className="post-content">
                                        <Link title={data[7].slug}
												href={`/${data[7].category}/${data[7].slug}`} className="card-btn bg-green">{data[7].category}</Link>
                                        <h3 className="title">
                                            <Link title={data[7].slug}
												href={`/${data[7].category}/${data[7].slug}`}>{data[7].title}</Link>
                                        </h3>
                                        <ul className="post-list">
                                            <li className="author">
                                                by <span><Link href="#">David Bin</Link></span>
                                            </li>
                                            <li className="date">{data[7].date}</li>
                                            {/* <li><i className="las la-comments" />5</li> */}
                                        </ul>
                                    </div>
                                </div>
                                <div className="post-card news-post">
                                    <div className="post-thumb">
                                        <Link title={data[8].slug}
												href={`/${data[8].category}/${data[8].slug}`}>
                                            {/* <img src="/assets/img/post/news-post-9.jpg" alt="post" /> */}
                                            <Image
                                                src={data[8].image}
                                                alt="trend"
                                                width={500}
                                                height={300}
                                            />
                                        </Link>
                                    </div>
                                    <div className="post-content">
                                        <Link title={data[8].slug}
												href={`/${data[8].category}/${data[8].slug}`}className="card-btn bg-yellow">{data[8].category}</Link>
                                        <h3 className="title">
                                            <Link title={data[8].slug}
												href={`/${data[8].category}/${data[8].slug}`}>{data[8].title}</Link>
                                        </h3>
                                        <ul className="post-list">
                                            <li className="author">
                                                by <span><Link href="#">David Bin</Link></span>
                                            </li>
                                            <li className="date">{data[8].date}</li>
                                            {/* <li><i className="las la-comments" />5</li> */}
                                        </ul>
                                    </div>
                                </div>
                                <div className="post-card news-post">
                                    <div className="post-thumb">
                                        <Link title={data[9].slug}
												href={`/${data[9].category}/${data[9].slug}`}>
                                            {/* <img src="/assets/img/post/news-post-10.jpg" alt="post" /> */}
                                            <Image
                                                src={data[9].image}
                                                alt="trend"
                                                width={500}
                                                height={300}
                                            />
                                        </Link>
                                    </div>
                                    <div className="post-content">
                                        <Link title={data[9].slug}
												href={`/${data[9].category}/${data[9].slug}`} className="card-btn bg-pink">{data[9].category}</Link>
                                        <h3 className="title">
                                            <Link title={data[9].slug}
												href={`/${data[9].category}/${data[9].slug}`}>{data[9].title}</Link>
                                        </h3>
                                        <ul className="post-list">
                                            <li className="author">
                                                by <span><Link href="#">David Bin</Link></span>
                                            </li>
                                            <li className="date">{data[9].date}</li>
                                            {/* <li><i className="las la-comments" />5</li> */}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="recent-post-btn text-center mt-50">
                        <Link href="/blog-layout-3" className="default-btn">Load More</Link>
                    </div> */}
                </div>
            </section>
        </>
    )
}

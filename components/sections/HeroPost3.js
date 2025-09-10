import Link from 'next/link'
import Image from "next/image";


export default function HeroPost3({ data }) {
    return (
        <>
            <section className="hero-post-area area-2">
                <div className="container">
                    <div className="top-area mb-40 title-border">
                        <div className="section-heading">
                            <h3 className="section-title"><span className="bg-grey-2">Travel</span></h3>
                        </div>
                        <div className="right-btn">
                            <Link href="/blog-layout-1" className="default-btn">See More</Link>
                        </div>
                    </div>
                    <div className="post-area-wrap wrap-2">
                        <div className="post-carousel-card">
                            <div className="post-carousel-thumb">
                                <Link href="/single-post-1">
                                    {/* <img src="/assets/img/post/travel-post-1.jpg" alt="img" /> */}
                                    <Image
                                        src={data[0].image}
                                        alt="trend"
                                        width={500}
                                        height={300}
                                    />
                                </Link>
                            </div>
                            <div className="post-carousel-content">
                                <Link href="/single-post-1" className="card-btn bg-green">{data[0].category}</Link>
                                <h3 className="title">
                                    <Link href="/single-post-1">{data[0].title}</Link>
                                </h3>
                                <ul className="post-list">
                                    <li className="author">
                                        by <span><Link href="/author-details">David Bin</Link></span>
                                    </li>
                                    <li className="date">{data[0].date}</li>
                                    {/* <li><i className="las la-comments" />5</li> */}
                                </ul>
                            </div>
                            {/* /. post-card-content */}
                        </div>
                        <div className="post-area-right">
                            <div className="post-card-wrap wrap-2">
                                <div className="post-card">
                                    <div className="post-thumb">
                                        <Link href="/single-post-1">
                                            {/* <img src="/assets/img/post/travel-post-2.jpg" alt="post" /> */}
                                            <Image
                                                src={data[1].image}
                                                alt="trend"
                                                width={500}
                                                height={300}
                                            />
                                        </Link>
                                    </div>
                                    <div className="post-content">
                                        <Link href="/single-post-1" className="card-btn bg-blue">{data[1].category}</Link>
                                        <h3 className="title">
                                            <Link href="/single-post-1">{data[1].title}</Link>
                                        </h3>
                                        <ul className="post-list">
                                            <li className="author">
                                                by <span><Link href="/author-details">David Bin</Link></span>
                                            </li>
                                            <li className="date">{data[1].date}</li>
                                            {/* <li><i className="las la-comments" />5</li> */}
                                        </ul>
                                    </div>
                                </div>
                                <div className="post-card">
                                    <div className="post-thumb">
                                        <Link href="/single-post-1">
                                            {/* <img src="/assets/img/post/travel-post-3.jpg" alt="post" /> */}
                                            <Image
                                                src={data[2].image}
                                                alt="trend"
                                                width={500}
                                                height={300}
                                            />
                                        </Link>
                                    </div>
                                    <div className="post-content">
                                        <Link href="/single-post-1" className="card-btn bg-pink">{data[2].category}</Link>
                                        <h3 className="title">
                                            <Link href="/single-post-1">{data[2].title}</Link>
                                        </h3>
                                        <ul className="post-list">
                                            <li className="author">
                                                by <span><Link href="/author-details">David Bin</Link></span>
                                            </li>
                                            <li className="date">{data[2].date}</li>
                                            {/* <li><i className="las la-comments" />5</li> */}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="post-card-wrap wrap-2">
                                <div className="post-card">
                                    <div className="post-thumb">
                                        <Link href="/single-post-1">
                                            {/* <img src="/assets/img/post/travel-post-4.jpg" alt="post" /> */}
                                            <Image
                                                src={data[3].image}
                                                alt="trend"
                                                width={500}
                                                height={300}
                                            />
                                        </Link>
                                    </div>
                                    <div className="post-content">
                                        <Link href="/single-post-1" className="card-btn bg-blue">{data[3].category}</Link>
                                        <h3 className="title">
                                            <Link href="/single-post-1">{data[3].title}</Link>
                                        </h3>
                                        <ul className="post-list">
                                            <li className="author">
                                                by <span><Link href="/author-details">David Bin</Link></span>
                                            </li>
                                            <li className="date">{data[3].date}</li>
                                            {/* <li><i className="las la-comments" />5</li> */}
                                        </ul>
                                    </div>
                                </div>
                                <div className="post-card">
                                    <div className="post-thumb">
                                        <Link href="/single-post-1">
                                            {/* <img src="/assets/img/post/travel-post-5.jpg" alt="post" /> */}
                                            <Image
                                                src={data[4].image}
                                                alt="trend"
                                                width={500}
                                                height={300}
                                            />
                                        </Link>
                                    </div>
                                    <div className="post-content">
                                        <Link href="/single-post-1" className="card-btn bg-pink">{data[4].category}</Link>
                                        <h3 className="title">
                                            <Link href="/single-post-1">{data[4].title}</Link>
                                        </h3>
                                        <ul className="post-list">
                                            <li className="author">
                                                by <span><Link href="/author-details">David Bin</Link></span>
                                            </li>
                                            <li className="date">{data[4].date}</li>
                                            {/* <li><i className="las la-comments" />5</li> */}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

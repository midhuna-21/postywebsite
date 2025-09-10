import Link from 'next/link'
import Image from "next/image";

export default function FashionBlog1({data}) {
    return (
        <>
            <section className="fashion-blog-area padding">
                <div className="container">
                    <div className="top-area mb-40 title-border">
                        <div className="section-heading">
                            <h3 className="section-title"><span className="bg-grey-2">Most Read</span></h3>
                        </div>
                        <div className="right-btn">
                            <Link href="/blog-layout-1" className="default-btn">See More</Link>
                        </div>
                    </div>
                    <div className="row justify-content-center fashion-blog-top">
                        <div className="col-lg-4 col-md-6">
                            <div className="post-card">
                                <div className="post-thumb">
                                    <Link href="/single-post-1">
                                    {/* <img src="/assets/img/post/fasion-post-1.jpg" alt="post" /> */}
                                     <Image
                                                                                    src={data[0].image}
                                                                                    alt="trend"
                                                                                    width={500}
                                                                                    height={300}
                                                                                />
                                    </Link>
                                </div>
                                <div className="post-content">
                                    <Link href="/single-post-1" className="card-btn bg-pink">{data[0].category}</Link>
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
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="post-card">
                                <div className="post-thumb">
                                    <Link href="/single-post-1">
                                    {/* <img src="/assets/img/post/fasion-post-2.jpg" alt="post" /> */}
                                     <Image
                                                                                    src={data[1].image}
                                                                                    alt="trend"
                                                                                    width={500}
                                                                                    height={300}
                                                                                />
                                    </Link>
                                </div>
                                <div className="post-content">
                                    <Link href="/single-post-1" className="card-btn bg-pink">{data[1].category}</Link>
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
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="post-card">
                                <div className="post-thumb">
                                    <Link href="/single-post-1">
                                    {/* <img src="/assets/img/post/fasion-post-3.jpg" alt="post" /> */}
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
                    </div>
                    <div className="row fashion-blog-bottom justify-content-center">
                        <div className="col-lg-4 col-md-6">
                            <div className="list-post-card">
                                <div className="post-img">
                                    <Link href="/single-post-1">
                                    {/* <img src="/assets/img/post/fasion-post-4.jpg" alt="post" /> */}
                                     <Image
                                                                                    src={data[3].image}
                                                                                    alt="trend"
                                                                                    width={500}
                                                                                    height={300}
                                                                                />
                                    </Link>
                                </div>
                                <div className="post-content">
                                    <h3 className="title">
                                        <Link href="/single-post-1">{data[3].title}</Link>
                                    </h3>
                                    <span>{data[3].date}</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="list-post-card">
                                <div className="post-img">
                                    <Link href="/single-post-1">
                                    {/* <img src="/assets/img/post/fasion-post-5.jpg" alt="post" /> */}
                                     <Image
                                                                                    src={data[4].image}
                                                                                    alt="trend"
                                                                                    width={500}
                                                                                    height={300}
                                                                                />
                                    </Link>
                                </div>
                                <div className="post-content">
                                    <h3 className="title">
                                        <Link href="/single-post-1">{data[4].title}</Link>
                                    </h3>

                                    <span>{data[4].date}</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="list-post-card card-2">
                                <div className="post-img">
                                    <Link href="/single-post-1">
                                    {/* <img src="/assets/img/post/fasion-post-6.jpg" alt="post" /> */}
                                     <Image
                                                                                    src={data[5].image}
                                                                                    alt="trend"
                                                                                    width={500}
                                                                                    height={300}
                                                                                />
                                    </Link>
                                </div>
                                <div className="post-content">
                                    <h3 className="title">
                                        <Link href="/single-post-1">{data[5].title}</Link>
                                    </h3>
                                    <span>{data[5].date}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

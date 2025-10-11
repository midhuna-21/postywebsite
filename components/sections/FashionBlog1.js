import Link from 'next/link'
import Image from "next/image";

export default function FashionBlog1({ data }) {
    return (
        <>
            <section className="fashion-blog-area padding">
                <div className="container">
                    <div className="top-area mb-40 title-border">
                        <div className="section-heading">
                            <h2 className="section-title"><span className="bg-grey">Top Stories</span></h2>
                        </div>
                        <div className="right-btn">
                            <Link href="/enterprise" title='enterprise' className="default-btn">Read All News</Link>
                        </div>
                    </div>
                    <div className="row justify-content-center fashion-blog-top">
                        <div className="col-lg-4 col-md-6">
                            <div className="post-card">
                                <div className="post-thumb">
                                    <Link title={data[0].slug}
                                        href={`/${data[0].category}/${data[0].slug}`}>
                                        <Image
                                            title={data[0].title}
                                            src={data[0].image}
                                            alt={data[0].title}
                                            width={500}
                                            height={300}
                                        />
                                    </Link>
                                </div>
                                <div className="post-content">
                                    <Link title={data[0].slug}
                                        href={`/${data[0].category}/${data[0].slug}`} className="card-btn bg-pink">{data[0].category}</Link>
                                    <h3 className="title">
                                        <Link title={data[0].slug}
                                            href={`/${data[0].category}/${data[0].slug}`}>{data[0].title}</Link>
                                    </h3>
                                    <span style={{ fontSize: "0.65rem", color: "#666" }}>{data[0].date}</span>

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="post-card">
                                <div className="post-thumb">
                                    <Link title={data[1].slug}
                                        href={`/${data[1].category}/${data[1].slug}`}>
                                        <Image
                                            title={data[1].title}
                                            src={data[1].image}
                                            alt={data[1].title}
                                            width={500}
                                            height={300}
                                        />
                                    </Link>
                                </div>
                                <div className="post-content">
                                    <Link title={data[1].slug}
                                        href={`/${data[1].category}/${data[1].slug}`} className="card-btn bg-pink">{data[1].category}</Link>
                                    <h3 className="title">
                                        <Link title={data[1].slug}
                                            href={`/${data[1].category}/${data[1].slug}`}>{data[1].title}</Link>
                                    </h3>
                                    <span style={{ fontSize: "0.65rem", color: "#666" }}>{data[1].date}</span>

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="post-card">
                                <div className="post-thumb">
                                    <Link title={data[2].slug}
                                        href={`/${data[2].category}/${data[2].slug}`}>
                                        <Image
                                            title={data[2].title}
                                            src={data[2].image}
                                            alt={data[2].title}
                                            width={500}
                                            height={300}
                                        />
                                    </Link>
                                </div>
                                <div className="post-content">
                                    <Link title={data[2].slug}
                                        href={`/${data[2].category}/${data[2].slug}`} className="card-btn bg-pink">{data[2].category}</Link>
                                    <h3 className="title">
                                        <Link title={data[2].slug}
                                            href={`/${data[2].category}/${data[2].slug}`}>{data[2].title}</Link>
                                    </h3>
                                    <span style={{ fontSize: "0.65rem", color: "#666" }}>{data[2].date}</span>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row fashion-blog-bottom justify-content-center">
                        <div className="col-lg-4 col-md-6">
                            <div className="list-post-card">
                                <div className="post-img">
                                    <Link title={data[3].slug}
                                        href={`/${data[3].category}/${data[3].slug}`}>
                                        <Image
                                            title={data[3].title}
                                            src={data[3].image}
                                            alt={data[3].title}
                                            width={200}
                                            height={110}
                                        />
                                    </Link>
                                </div>
                                <div className="post-content">
                                    <h3 className="title">
                                        <Link title={data[3].slug}
                                            href={`/${data[3].category}/${data[3].slug}`}>{data[3].title}</Link>
                                    </h3>
                                    <span style={{ fontSize: "0.65rem", color: "#666" }}>{data[3].date}</span>

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="list-post-card">
                                <div className="post-img">
                                    <Link title={data[4].slug}
                                        href={`/${data[4].category}/${data[4].slug}`}>
                                        <Image
                                            title={data[4].title}
                                            src={data[4].image}
                                            alt={data[4].title}
                                            width={200}
                                            height={110}
                                        />
                                    </Link>
                                </div>
                                <div className="post-content">
                                    <h3 className="title">
                                        <Link title={data[4].slug}
                                            href={`/${data[4].category}/${data[4].slug}`}>{data[4].title}</Link>
                                    </h3>

                                    <span style={{ fontSize: "0.65rem", color: "#666" }}>{data[4].date}</span>

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="list-post-card card-2">
                                <div className="post-img">
                                    <Link title={data[5].slug}
                                        href={`/${data[5].category}/${data[5].slug}`}>
                                        <Image
                                            title={data[5].title}
                                            src={data[5].image}
                                            alt={data[5].title}
                                            width={200}
                                            height={110}
                                        />
                                    </Link>
                                </div>
                                <div className="post-content">
                                    <h3 className="title">
                                        <Link title={data[5].slug}
                                            href={`/${data[5].category}/${data[5].slug}`}>{data[5].title}</Link>
                                    </h3>
                                    <span style={{ fontSize: "0.65rem", color: "#666" }}>{data[5].date}</span>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

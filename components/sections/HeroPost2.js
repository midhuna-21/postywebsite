
import Link from 'next/link'
import Image from "next/image";

export default function HeroPost2({ data }) {
    return (
        <>
            <section className="hero-post-area area-2 bg-grey-2">
                <div className="container">
                    <div className="top-area mb-40 title-border">
                        <div className="section-heading">
                            <h3 className="section-title"><span className="bg-grey-2">Most Read</span></h3>
                        </div>
                        <div className="right-btn">
                            <Link href="/innovation" className="default-btn">See More</Link>
                        </div>
                    </div>
                    <div className="post-area-wrap wrap-2">
                        <div className="post-carousel-card">
                            <div className="post-carousel-thumb">
                                <Link title={data[0].slug}
                                    href={`/${data[0].category}/${data[0].slug}`}>
                                    {/* <img src="/assets/img/post/read-post-img-1.jpg" alt="img" /> */}
                                    <Image
                                    title={data[0].title}
                                        src={data[0].image}
                                        alt="trend"
                                        width={500}
                                        height={300}
                                    />
                                </Link>
                            </div>
                            <div className="post-carousel-content">
                                <Link title={data[0].slug}
                                    href={`/${data[0].category}/${data[0].slug}`} className="card-btn bg-green">{data[0].category}</Link>
                                <h3 className="title">
                                    <Link title={data[0].slug}
                                        href={`/${data[0].category}/${data[9].slug}`}>{data[0].title}</Link>
                                </h3>
                                <ul className="post-list">
                                    <li className="author">
                                        by <span style={{ color: 'white' }}>{data[0].author}</span>
                                    </li>
                                    <li className="date">{data[0].date}</li>
                                </ul>
                            </div>
                            {/* /. post-card-content */}
                        </div>
                        <div className="post-area-right">
                            <div className="post-card-wrap wrap-2">
                                <div className="post-card">
                                    <div className="post-thumb">
                                        <Link title={data[1].slug}
                                            href={`/${data[1].category}/${data[1].slug}`}>
                                            {/* <img src="/assets/img/post/post-img-3.jpg" alt="post" /> */}
                                            <Image
                                            title={data[1].title}
                                                src={data[1].image}
                                                alt="trend"
                                                width={500}
                                                height={300}
                                            />
                                        </Link>
                                    </div>
                                    <div className="post-content">
                                        <Link title={data[1].slug}
                                            href={`/${data[1].category}/${data[1].slug}`} className="card-btn bg-blue">{data[1].category}</Link>
                                        <h3 className="title">
                                            <Link title={data[1].slug}
                                                href={`/${data[1].category}/${data[1].slug}`}>{data[1].title}</Link>
                                        </h3>
                                        <ul className="post-list" style={{ listStyle: "none", padding: 0, margin: 0 }}>
                                            <li style={{ fontSize: "0.65rem", color: "#333" }}>
                                                by{" "}
                                                <span style={{ fontSize: "0.7rem", color: "inherit" }}>
                                                    {data[1].author}
                                                </span>
                                                , <span style={{ fontSize: "0.65rem", color: "#666" }}>{data[1].date}</span>
                                            </li>
                                        </ul>

                                    </div>
                                </div>
                                <div className="post-card">
                                    <div className="post-thumb">
                                        <Link title={data[2].slug}
                                            href={`/${data[2].category}/${data[2].slug}`}>
                                            {/* <img src="/assets/img/post/post-img-4.jpg" alt="post" /> */}
                                            <Image
                                            title={data[2].title}
                                                src={data[2].image}
                                                alt="trend"
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
                                        <ul className="post-list" style={{ listStyle: "none", padding: 0, margin: 0 }}>
                                            <li style={{ fontSize: "0.65rem", color: "#333" }}>
                                                by{" "}
                                                <span style={{ fontSize: "0.7rem", color: "inherit" }}>
                                                    {data[2].author}
                                                </span>
                                                , <span style={{ fontSize: "0.65rem", color: "#666" }}>{data[2].date}</span>
                                            </li>
                                        </ul>


                                    </div>
                                </div>
                            </div>
                            <div className="list-post-area list-2">
                                <div className="list-post-card">
                                    <div className="post-img">
                                        <Link title={data[3].slug}
                                            href={`/${data[3].category}/${data[3].slug}`}>
                                            {/* <img src="/assets/img/post/list-post-img-6.png" alt="post" /> */}
                                            <Image
                                            title={data[3].title}
                                                src={data[3].image}
                                                alt="trend"
                                                width={150}
                                                height={120}
                                            />
                                        </Link>
                                    </div>
                                    <div className="post-content">
                                        <h3 className="title">
                                            <Link title={data[3].slug}
                                                href={`/${data[3].category}/${data[3].slug}`}>{data[3].title}</Link>
                                        </h3>
                                        <div className="post-list">
                                            <div style={{ margin: 0, fontSize: "0.55rem", color: "#333" }}>
                                                by{" "}
                                                <span style={{ fontSize: "0.65rem", color: "inherit" }}>
                                                    {data[3].author}
                                                </span>
                                                , <span style={{ fontSize: "0.55rem", color: "#666" }}>{data[3].date}</span>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                                <div className="list-post-card">
                                    <div className="post-img">
                                        <Link title={data[4].slug}
                                            href={`/${data[4].category}/${data[4].slug}`}>
                                            {/* <img src="/assets/img/post/list-post-img-7.png" alt="post" /> */}
                                            <Image
                                            title={data[4].title}
                                                src={data[4].image}
                                                alt="trend"
                                                width={150}
                                                height={120}
                                            />
                                        </Link>
                                    </div>
                                    <div className="post-content">
                                        <h3 className="title">
                                            <Link title={data[4].slug}
                                                href={`/${data[4].category}/${data[4].slug}`}>{data[4].title}</Link>
                                        </h3>
                                        <div className="post-list">
                                            <div style={{ margin: 0, fontSize: "0.55rem", color: "#333" }}>
                                                by{" "}
                                                <span style={{ fontSize: "0.65rem", color: "inherit" }}>
                                                    {data[4].author}
                                                </span>
                                                , <span style={{ fontSize: "0.55rem", color: "#666" }}>{data[4].date}</span>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className="list-post-card">
                                    <div className="post-img">
                                        <Link title={data[5].slug}
                                            href={`/${data[5].category}/${data[5].slug}`}>
                                            {/* <img src="/assets/img/post/list-post-img-8.png" alt="post" /> */}
                                            <Image
                                            title={data[5].title}
                                                src={data[5].image}
                                                alt="trend"
                                                width={150}
                                                height={120}
                                            />
                                        </Link>
                                    </div>
                                    <div className="post-content">
                                        <h3 className="title">
                                            <Link title={data[5].slug}
                                                href={`/${data[5].category}/${data[5].slug}`}>{data[5].title}</Link>
                                        </h3>
                                        <div className="post-list">
                                            <div style={{ margin: 0, fontSize: "0.55rem", color: "#333" }}>
                                                by{" "}
                                                <span style={{ fontSize: "0.65rem", color: "inherit" }}>
                                                    {data[5].author}
                                                </span>
                                                , <span style={{ fontSize: "0.55rem", color: "#666" }}>{data[5].date}</span>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className="list-post-card">
                                    <div className="post-img">
                                        <Link title={data[6].slug}
                                            href={`/${data[6].category}/${data[6].slug}`}>
                                            {/* <img src="/assets/img/post/list-post-img-9.png" alt="post" /> */}
                                            <Image
                                            title={data[6].title}
                                                src={data[6].image}
                                                alt="trend"
                                                width={150}
                                                height={120}
                                            />
                                        </Link>
                                    </div>
                                    <div className="post-content">
                                        <h3 className="title">
                                            <Link title={data[6].slug}
                                                href={`/${data[6].category}/${data[6].slug}`}>{data[6].title}</Link>
                                        </h3>
                                        <div className="post-list">
                                            <div style={{ margin: 0, fontSize: "0.55rem", color: "#333" }}>
                                                by{" "}
                                                <span style={{ fontSize: "0.65rem", color: "inherit" }}>
                                                    {data[6].author}
                                                </span>
                                                , <span style={{ fontSize: "0.55rem", color: "#666" }}>{data[6].date}</span>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className="list-post-card">
                                    <div className="post-img">
                                        <Link title={data[7].slug}
                                            href={`/${data[7].category}/${data[7].slug}`}>
                                            {/* <img src="/assets/img/post/list-post-img-10.png" alt="post" /> */}
                                            <Image
                                            title={data[7].title}
                                                src={data[7].image}
                                                alt="trend"
                                                width={150}
                                                height={120}
                                            />
                                        </Link>
                                    </div>
                                    <div className="post-content">
                                        <h3 className="title">
                                            <Link title={data[7].slug}
                                                href={`/${data[7].category}/${data[7].slug}`}>{data[7].title}</Link>
                                        </h3>
                                        <div className="post-list">
                                            <div style={{ margin: 0, fontSize: "0.55rem", color: "#333" }}>
                                                by{" "}
                                                <span style={{ fontSize: "0.65rem", color: "inherit" }}>
                                                    {data[7].author}
                                                </span>
                                                , <span style={{ fontSize: "0.55rem", color: "#666" }}>{data[7].date}</span>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className="list-post-card">
                                    <div className="post-img">
                                        <Link title={data[8].slug}
                                            href={`/${data[8].category}/${data[8].slug}`}>
                                            {/* <img src="/assets/img/post/list-post-img-11.png" alt="post" /> */}
                                            <Image
                                            title={data[8].title}
                                                src={data[8].image}
                                                alt="trend"
                                                width={150}
                                                height={120}
                                            />
                                        </Link>
                                    </div>
                                    <div className="post-content">
                                        <h3 className="title">
                                            <Link title={data[8].slug}
                                                href={`/${data[8].category}/${data[8].slug}`}>{data[8].title}</Link>
                                        </h3>
                                        <div className="post-list">
                                            <div style={{ margin: 0, fontSize: "0.55rem", color: "#333" }}>
                                                by{" "}
                                                <span style={{ fontSize: "0.65rem", color: "inherit" }}>
                                                    {data[8].author}
                                                </span>
                                                , <span style={{ fontSize: "0.55rem", color: "#666" }}>{data[8].date}</span>
                                            </div>
                                        </div>

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

import Link from 'next/link'
import Image from "next/image";


export default function HeroPost3({ data }) {
    return (
        <>
            <section className="hero-post-area area-2">
                <div className="container">
                    <div className="top-area mb-40 title-border">
                        <div className="section-heading">
                            <h3 className="section-title"><span className="bg-grey-2">Investing</span></h3>
                        </div>
                        <div className="right-btn">
                            <Link href="/investing" className="default-btn">See More</Link>
                        </div>
                    </div>
                    <div className="post-area-wrap wrap-2">
                        <div className="post-carousel-card">
                            <div className="post-carousel-thumb">
                                <Link title={data[0].slug}
												href={`/${data[0].category}/${data[0].slug}`}>
                                    {/* <img src="/assets/img/post/travel-post-1.jpg" alt="img" /> */}
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
                                <Link htitle={data[0].slug}
												href={`/${data[0].category}/${data[0].slug}`} className="card-btn bg-green">{data[0].category}</Link>
                                <h3 className="title">
                                    <Link title={data[0].slug}
												href={`/${data[0].category}/${data[0].slug}`}>{data[0].title}</Link>
                                </h3>
                                 <ul className="post-list">
                                    <li className="author">
                                        by <span><Link href="#">{data[0].author}</Link></span>
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
                                            {/* <img src="/assets/img/post/travel-post-2.jpg" alt="post" /> */}
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
                                              
                                                   {data[1].author}
                                                
                                                , <span style={{ fontSize: "0.65rem", color: "#666" }}>{data[1].date}</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="post-card">
                                    <div className="post-thumb">
                                        <Link title={data[2].slug}
												href={`/${data[2].category}/${data[2].slug}`}>
                                            {/* <img src="/assets/img/post/travel-post-3.jpg" alt="post" /> */}
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
                                              
                                                   {data[2].author}
                                                
                                                , <span style={{ fontSize: "0.65rem", color: "#666" }}>{data[2].date}</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="post-card-wrap wrap-2">
                                <div className="post-card">
                                    <div className="post-thumb">
                                        <Link title={data[3].slug}
												href={`/${data[3].category}/${data[3].slug}`}>
                                            {/* <img src="/assets/img/post/travel-post-4.jpg" alt="post" /> */}
                                            <Image
                                            title={data[3].title}
                                                src={data[3].image}
                                                alt="trend"
                                                width={500}
                                                height={300}
                                            />
                                        </Link>
                                    </div>
                                    <div className="post-content">
                                        <Link title={data[3].slug}
												href={`/${data[3].category}/${data[3].slug}`} className="card-btn bg-blue">{data[3].category}</Link>
                                        <h3 className="title">
                                            <Link title={data[3].slug}
												href={`/${data[3].category}/${data[3].slug}`}>{data[3].title}</Link>
                                        </h3>
                                         <ul className="post-list" style={{ listStyle: "none", padding: 0, margin: 0 }}>
                                            <li style={{ fontSize: "0.65rem", color: "#333" }}>
                                                by{" "}
                                              
                                                   {data[3].author}
                                                
                                                , <span style={{ fontSize: "0.65rem", color: "#666" }}>{data[3].date}</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="post-card">
                                    <div className="post-thumb">
                                        <Link title={data[4].slug}
												href={`/${data[4].category}/${data[4].slug}`}>
                                            {/* <img src="/assets/img/post/travel-post-5.jpg" alt="post" /> */}
                                            <Image
                                            title={data[4].title}
                                                src={data[4].image}
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
                                         <ul className="post-list" style={{ listStyle: "none", padding: 0, margin: 0 }}>
                                            <li style={{ fontSize: "0.65rem", color: "#333" }}>
                                                by{" "}
                                              
                                                   {data[4].author}
                                                
                                                , <span style={{ fontSize: "0.65rem", color: "#666" }}>{data[4].date}</span>
                                            </li>
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

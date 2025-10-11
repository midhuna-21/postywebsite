import Link from 'next/link'
import Image from "next/image";

export default function HeroPost2({ data }) {
    return (
        <>
            <section className="hero-post-area area-2 ">
                <div className="container">
                    <div className="top-area mb-40 title-border">
                        <div className="section-heading">
                            <h2 className="section-title"><span className="bg-grey">Most Read</span></h2>
                        </div>
                        <div className="right-btn">
                            <Link href="/innovation" title='innovation' className="default-btn">Explore</Link>
                        </div>
                    </div>
                    <div className="post-area-wrap wrap-2">
                        <div className="post-carousel-card">
                            <div className="post-carousel-thumb">
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
                        </div>
                        <div className="post-area-right">
                            <div className="post-card-wrap wrap-2">
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
                                            href={`/${data[1].category}/${data[1].slug}`} className="card-btn bg-blue">{data[1].category}</Link>
                                        <h3 className="title">
                                            <Link title={data[1].slug}
                                                href={`/${data[1].category}/${data[1].slug}`}>{data[1].title}</Link>
                                        </h3>
                                        <span style={{ fontSize: "0.65rem", color: "#666" }}>{data[1].date}</span>
                                    </div>
                                </div>
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
                            <div className="list-post-area list-2">
                                {data.slice(3, 9).map((item, index) => (
                                    <div className="list-post-card" key={item.slug}>
                                        <div className="post-img">

                                            <Link title={item.slug} href={`/${item.category}/${item.slug}`}>
                                                <Image
                                                    title={item.title}
                                                    src={item.image}
                                                    alt={item.title}
                                                    width={150}
                                                    height={120}
                                                    style={{ objectFit: "cover" }}
                                                />
                                            </Link>
                                        </div>
                                        <div className="post-content">
                                            <h3 className="title">
                                                <Link title={item.slug} href={`/${item.category}/${item.slug}`}>
                                                    {item.title}
                                                </Link>
                                            </h3>
                                            <div className="post-list">
                                                <span style={{ fontSize: "0.55rem", color: "#666" }}>
                                                    {item.date}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

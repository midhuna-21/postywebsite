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
                            <Link href="/business" className="default-btn">See More</Link>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="news-post-wrap">
                                {data.slice(0, 5).map((item, index) => {
                                    // define different button classes for each card
                                    const btnClasses = ["bg-blue", "bg-blue-light", "bg-green", "bg-yellow", "bg-pink"];

                                    return (
                                        <div className="post-card news-post" key={index}>
                                            <div className="post-thumb">
                                                <Link title={item.slug} href={`/${item.category}/${item.slug}`}>
                                                    <Image
                                                        src={item.image}
                                                        alt={item.title}
                                                        width={500}
                                                        height={300}
                                                    />
                                                </Link>
                                            </div>
                                            <div className="post-content">
                                                <Link
                                                    title={item.slug}
                                                    href={`/${item.category}/${item.slug}`}
                                                    className={`card-btn ${btnClasses[index % btnClasses.length]}`}
                                                >
                                                    {item.category}
                                                </Link>
                                                <h3 className="title">
                                                    <Link title={item.slug} href={`/${item.category}/${item.slug}`}>
                                                        {item.title}
                                                    </Link>
                                                </h3>
                                                <ul className="post-list">
                                                    <li className="author">
                                                        by{" "}
                                                        <span>
                                                            <Link href="#">David Bin</Link>
                                                        </span>
                                                    </li>
                                                    <li className="date">{item.date}</li>
                                                    {/* <li><i className="las la-comments" />5</li> */}
                                                </ul>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="news-post-wrap">
                                {data.slice(5, 10).map((item, index) => {
                                    // define different button classes for each card
                                    const btnClasses = ["bg-blue", "bg-blue-light", "bg-green", "bg-yellow", "bg-pink"];

                                    return (
                                        <div className="post-card news-post" key={index}>
                                            <div className="post-thumb">
                                                <Link title={item.slug} href={`/${item.category}/${item.slug}`}>
                                                    <Image
                                                        src={item.image}
                                                        alt={item.title}
                                                        width={500}
                                                        height={300}
                                                    />
                                                </Link>
                                            </div>
                                            <div className="post-content">
                                                <Link
                                                    title={item.slug}
                                                    href={`/${item.category}/${item.slug}`}
                                                    className={`card-btn ${btnClasses[index % btnClasses.length]}`}
                                                >
                                                    {item.category}
                                                </Link>
                                                <h3 className="title">
                                                    <Link title={item.slug} href={`/${item.category}/${item.slug}`}>
                                                        {item.title}
                                                    </Link>
                                                </h3>
                                                <ul className="post-list">
                                                    <li className="author">
                                                        by{" "}
                                                        <span>
                                                            <Link href="#">David Bin</Link>
                                                        </span>
                                                    </li>
                                                    <li className="date">{item.date}</li>
                                                    {/* <li><i className="las la-comments" />5</li> */}
                                                </ul>
                                            </div>
                                        </div>
                                    );
                                })}
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

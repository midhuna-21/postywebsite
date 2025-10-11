
import Link from 'next/link'
import Image from "next/image";
import CategoriesList from '../../components/sections/CategoryList'

export default function NewsPost1({ data }) {
    return (
        <>
            <section className="news-post-area padding pt-0">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="news-post-wrap">
                                <div className="section-heading mb-40">
                                    <h2 className="section-title title-border"><span>Latest News</span></h2>
                                </div>
                                <div className="post-card news-post">
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
                                            href={`/${data[0].category}/${data[0].slug}`} className="card-btn bg-blue">{data[0].category}</Link>
                                        <h3 className="title">
                                            <Link title={data[0].slug}
                                                href={`/${data[0].category}/${data[0].slug}`}>{data[0].title}</Link>
                                        </h3>
                                        <span style={{ fontSize: "0.65rem", color: "#666" }}>{data[0].date}</span>

                                        <p>
                                            {data[0].shortdescription}
                                        </p>
                                        <Link title={data[0].slug}
                                            href={`/${data[0].category}/${data[0].slug}`} className="news-post-btn"><i className="las la-arrow-right" /></Link>
                                    </div>
                                </div>
                                <div className="post-card news-post">
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
                                            href={`/${data[1].category}/${data[1].slug}`} className="card-btn bg-blue-light">{data[1].category}</Link>
                                        <h3 className="title">
                                            <Link title={data[1].slug}
                                                href={`/${data[1].category}/${data[1].slug}`}>{data[1].title}</Link>
                                        </h3>
                                        <span style={{ fontSize: "0.65rem", color: "#666" }}>{data[1].date}</span>

                                        <p>
                                            {data[1].shortdescription}
                                        </p>
                                        <Link title={data[1].slug}
                                            href={`/${data[1].category}/${data[1].slug}`} className="news-post-btn"><i className="las la-arrow-right" /></Link>
                                    </div>
                                </div>
                                <div className="post-card news-post">
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
                                            href={`/${data[2].category}/${data[2].slug}`} className="card-btn bg-green">{data[2].category}</Link>
                                        <h3 className="title">
                                            <Link title={data[2].slug}
                                                href={`/${data[2].category}/${data[2].slug}`}>{data[2].title}</Link>
                                        </h3>
                                        <span style={{ fontSize: "0.65rem", color: "#666" }}>{data[2].date}</span>


                                        <p>
                                            {data[2].shortdescription}
                                        </p>
                                        <Link title={data[2].slug}
                                            href={`/${data[2].category}/${data[2].slug}`} className="news-post-btn"><i className="las la-arrow-right" /></Link>
                                    </div>
                                </div>
                                <div className="post-card news-post">
                                    <div className="post-thumb">
                                        <Link title={data[3].slug}
                                            href={`/${data[3].category}/${data[3].slug}`}>
                                            <Image
                                                title={data[3].title}
                                                src={data[3].image}
                                                alt={data[3].title}
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
                                        <span style={{ fontSize: "0.65rem", color: "#666" }}>{data[3].date}</span>


                                        <p>
                                            {data[3].shortdescription}
                                        </p>
                                        <Link title={data[3].slug}
                                            href={`/${data[3].category}/${data[3].slug}`} className="news-post-btn"><i className="las la-arrow-right" /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="trending-post-wrap">
                                <div className="section-heading mb-30">
                                    <h3 className="section-title title-border"><span>Trending News</span></h3>
                                </div>
                                <div className="list-post-area list-2">
                                    {data.slice(4, 9).map((item, index) => (
                                        <div className="list-post-card" key={item.slug}>
                                            <div className="post-img">
                                                <Link title={item.slug} href={`/${item.category}/${item.slug}`}>
                                                    <div
                                                        style={{
                                                            width: 150,
                                                            height: 120,
                                                            position: "relative",
                                                            overflow: "hidden",
                                                            borderRadius: "8px"
                                                        }}
                                                    >
                                                        <Image
                                                            title={item.title}
                                                            src={item.image}
                                                            alt={item.title}
                                                            fill
                                                            style={{ objectFit: "cover" }}
                                                        />
                                                    </div>

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
                            <CategoriesList />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

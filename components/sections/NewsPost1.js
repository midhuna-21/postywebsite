
import Link from 'next/link'
import Image from "next/image";

export default function NewsPost1({ data }) {
    return (
        <>
            <section className="news-post-area padding pt-0">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="news-post-wrap">
                                <div className="section-heading mb-40">
                                    <h3 className="section-title title-border"><span>Latest Posts</span></h3>
                                </div>
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
                                                by <span><Link href="/author-details">David Bin</Link></span>
                                            </li>
                                            <li className="date">{data[0].date}</li>
                                            {/* <li><i className="las la-comments" />5</li> */}
                                        </ul>
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
                                                by <span><Link href="/author-details">David Bin</Link></span>
                                            </li>
                                            <li className="date">{data[1].date}</li>
                                            {/* <li><i className="las la-comments" />5</li> */}
                                        </ul>
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
                                            <Link href="/single-post-1">{data[2].title}</Link>
                                        </h3>
                                        <ul className="post-list">
                                            <li className="author">
                                                by <span><Link href="/author-details">David Bin</Link></span>
                                            </li>
                                            <li className="date">{data[2].date}</li>
                                            {/* <li><i className="las la-comments" />5</li> */}
                                        </ul>
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
                                        <p>
                                            {data[3].shortdescription}
                                        </p>
                                        <Link title={data[3].slug}
												href={`/${data[3].category}/${data[3].slug}`} className="news-post-btn"><i className="las la-arrow-right" /></Link>
                                    </div>
                                </div>
                                {/* <div className="post-card news-post">
                                    <div className="post-thumb">
                                        <Link href="/single-post-1"><img src="/assets/img/post/news-post-5.jpg" alt="post" /></Link>
                                    </div>
                                    <div className="post-content">
                                        <Link href="/single-post-1" className="card-btn bg-pink">{data[0].category}</Link>
                                        <h3 className="title">
                                            <Link href="/single-post-1">Navigation System Doesn Work in Space? We’ll See
                                                works.</Link>
                                        </h3>
                                        <ul className="post-list">
                                            <li className="author">
                                                by <span><Link href="/author-details">David Bin</Link></span>
                                            </li>
                                            <li className="date">July 29, 2024</li>
                                            <li><i className="las la-comments" />5</li>
                                        </ul>
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur. Tellus suspen any more at disse reasy
                                            nulla aliquam.
                                        </p>
                                        <Link href="/single-post-1" className="news-post-btn"><i className="las la-arrow-right" /></Link>
                                    </div>
                                </div> */}
                                {/* <div className="post-pagination">
                                    <ul className="pagination-list">
                                        <li><Link href="/#">1</Link></li>
                                        <li className="active"><Link href="/#">2</Link></li>
                                        <li><Link href="/#">3</Link></li>
                                    </ul>
                                    <div className="pagination-right">
                                        <Link href="/#"><i className="las la-angle-right" /></Link>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                        <div className="col-lg-4">
                            {/* <div className="poster mb-40">
                                <div className="bg-shape" />
                                <div className="poster-men" />
                                <div className="poster-content">
                                    <Link href="/"><img src="/assets/img/logo/logo-light.png" alt="logo" /></Link>
                                    <h4 className="title">News &amp; Magazine Blog HTML Theme</h4>
                                    <Link href="/contact" className="default-btn poster-btn">Buy Now</Link>
                                </div>
                            </div> */}
                            <div className="trending-post-wrap">
                                <div className="section-heading mb-30">
                                    <h3 className="section-title title-border"><span>Trending Posts</span></h3>
                                </div>
                                <div className="list-post-area list-2">
                                    <div className="list-post-card">
                                        <div className="post-img">
                                            <Link title={data[4].slug}
												href={`/${data[4].category}/${data[4].slug}`}>
                                                {/* <img src="/assets/img/post/trending-post-1.jpg" alt="post" /> */}
                                                <Image
                                                    src={data[4].image}
                                                    alt="trend"
                                                    width={200}
                                                    height={130}
                                                />
                                            </Link>
                                        </div>
                                        <div className="post-content">
                                            <h3 className="title">
                                                <Link title={data[4].slug}
												href={`/${data[4].category}/${data[4].slug}`}>{data[4].title}</Link>
                                            </h3>
                                            <span>{data[4].date}</span>
                                        </div>
                                    </div>
                                    <div className="list-post-card">
                                        <div className="post-img">
                                            <Link title={data[5].slug}
												href={`/${data[5].category}/${data[5].slug}`}>
                                                {/* <img src="/assets/img/post/trending-post-2.jpg" alt="post" /> */}
                                                <Image
                                                    src={data[5].image}
                                                    alt="trend"
                                                    width={200}
                                                    height={130}
                                                />
                                            </Link>
                                        </div>
                                        <div className="post-content">
                                            <h3 className="title">
                                                <Link title={data[5].slug}
												href={`/${data[5].category}/${data[5].slug}`}>{data[5].title}</Link>
                                            </h3>
                                            <span>{data[5].date}</span>
                                        </div>
                                    </div>
                                    <div className="list-post-card">
                                        <div className="post-img">
                                            <Link title={data[6].slug}
												href={`/${data[6].category}/${data[6].slug}`}>
                                                {/* <img src="/assets/img/post/trending-post-3.jpg" alt="post" /> */}
                                                <Image
                                                    src={data[6].image}
                                                    alt="trend"
                                                    width={200}
                                                    height={130}
                                                />
                                            </Link>
                                        </div>
                                        <div className="post-content">
                                            <h3 className="title">
                                                <Link title={data[6].slug}
												href={`/${data[6].category}/${data[6].slug}`}>{data[6].title}</Link>
                                            </h3>
                                            <span>{data[6].date}</span>
                                        </div>
                                    </div>
                                    <div className="list-post-card">
                                        <div className="post-img">
                                            <Link title={data[7].slug}
												href={`/${data[7].category}/${data[7].slug}`}>
                                                {/* <img src="/assets/img/post/trending-post-4.jpg" alt="post" /> */}
                                                <Image
                                                    src={data[7].image}
                                                    alt="trend"
                                                    width={200}
                                                    height={130}
                                                />
                                            </Link>
                                        </div>
                                        <div className="post-content">
                                            <h3 className="title">
                                                <Link title={data[7].slug}
												href={`/${data[7].category}/${data[7].slug}`}>{data[7].title}</Link>
                                            </h3>
                                            <span>{data[7].date}</span>
                                        </div>
                                    </div>
                                    <div className="list-post-card">
                                        <div className="post-img">
                                            <Link title={data[8].slug}
												href={`/${data[8].category}/${data[8].slug}`}>
                                                {/* <img src="/assets/img/post/trending-post-4.jpg" alt="post" /> */}
                                                <Image
                                                    src={data[8].image}
                                                    alt="trend"
                                                    width={200}
                                                    height={130}
                                                />
                                            </Link>
                                        </div>
                                        <div className="post-content">
                                            <h3 className="title">
                                                <Link title={data[8].slug}
												href={`/${data[8].category}/${data[8].slug}`}>{data[8].title}</Link>
                                            </h3>
                                            <span>{data[8].date}</span>
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
                                        <Link href="/business">
                                            <h4 className="list-title">business
                                                {/* <span>(15)</span> */}
                                            </h4>
                                            <i className="las la-arrow-right" />
                                        </Link>
                                        </li>
                                     
                                    <li>
                                        <Link href="/investing">
                                            <h4 className="list-title">Investing
                                                {/* <span>(29)</span> */}
                                            </h4><i className="las la-arrow-right" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/enterprise">
                                            <h4 className="list-title">Enterprise
                                                {/* <span>(17)</span> */}
                                            </h4><i className="las la-arrow-right" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/innovation">
                                            <h4 className="list-title">Innovation
                                                {/* <span>(21)</span> */}
                                            </h4><i className="las la-arrow-right" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/us">
                                            <h4 className="list-title">U.S
                                                {/* <span>(11)</span> */}
                                            </h4><i className="las la-arrow-right" />
                                        </Link>
                                    </li>
                                    {/* <li>
                                        <Link href="/single-post-1">
                                            <h4 className="list-title">{data[0].category}<span>(30)</span></h4><i className="las la-arrow-right" />
                                        </Link>
                                    </li> */}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

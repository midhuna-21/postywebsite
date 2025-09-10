import Link from 'next/link'
import Image from "next/image";

export default function Categories({ data }) {
    return (
        <>
            <section className="categories-section padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="categorie-item">
                                <div className="categorie-thumb">
                                    <Link href="/blog-default">
                                        {/* <img src="/assets/img/images/categori-img-1.jpg" alt="img" /> */}
                                        <Image
                                            src={data[0].image}
                                            alt="trend"
                                            width={500}
                                            height={300}
                                        />
                                    </Link>
                                </div>
                                <div className="categorie-content">
                                    {/* <span>3 Post</span> */}
                                    <h3 className="categorie-title"><Link href="/blog-default">{data[0].category}</Link></h3>
                                    <Link href="/blog-default" className="default-btn categorie-btn">See All Post</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="categorie-item">
                                <div className="categorie-thumb">
                                    <Link href="/blog-default">
                                        {/* <img src="/assets/img/images/categori-img-2.jpg" alt="img" /> */}
                                        <Image
                                            src={data[1].image}
                                            alt="trend"
                                            width={500}
                                            height={300}
                                        />
                                    </Link>
                                </div>
                                <div className="categorie-content">
                                    {/* <span>3 Post</span> */}
                                    <h3 className="categorie-title"><Link href="/blog-default">{data[1].category}</Link></h3>
                                    <Link href="/blog-default" className="default-btn categorie-btn">See All Post</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="categorie-item">
                                <div className="categorie-thumb">
                                    <Link href="/blog-default">
                                        {/* <img src="/assets/img/images/categori-img-3.jpg" alt="img" /> */}
                                        <Image
                                            src={data[2].image}
                                            alt="trend"
                                            width={500}
                                            height={300}
                                        />
                                    </Link>
                                </div>
                                <div className="categorie-content">
                                    {/* <span>3 Post</span> */}
                                    <h3 className="categorie-title"><Link href="/blog-default">{data[2].category}</Link></h3>
                                    <Link href="/blog-default" className="default-btn categorie-btn">See All Post</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="categorie-item">
                                <div className="categorie-thumb">
                                    <Link href="/blog-default">
                                        {/* <img src="/assets/img/images/categori-img-8.jpg" alt="img" /> */}

                                        <Image
                                            src={data[3].image}
                                            alt="trend"
                                            width={500}
                                            height={300}
                                        />
                                    </Link>
                                </div>
                                <div className="categorie-content">
                                    {/* <span>3 Post</span>  */}
                                    <h3 className="categorie-title"><Link href="/blog-default">{data[3].category}</Link></h3>
                                    <Link href="/blog-default" className="default-btn categorie-btn">See All Post</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

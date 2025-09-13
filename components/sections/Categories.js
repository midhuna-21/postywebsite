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
                                    <Link title={data[0].category}
												href={`/${data[0].category}`}>
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
                                    <h3 className="categorie-title"><Link title={data[0].category}
												href={`/${data[0].category}`}>{data[0].category}</Link></h3>
                                    <Link title={data[0].category}
												href={`/${data[0].category}`} className="default-btn categorie-btn">See All Post</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="categorie-item">
                                <div className="categorie-thumb">
                                    <Link title={data[1].category}
												href={`/${data[1].category}`}>
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
                                    <h3 className="categorie-title"><Link title={data[1].category}
												href={`/${data[1].category}`}>{data[1].category}</Link></h3>
                                    <Link title={data[1].category}
												href={`/${data[1].category}`} className="default-btn categorie-btn">See All Post</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="categorie-item">
                                <div className="categorie-thumb">
                                    <Link title={data[2].category}
												href={`/${data[2].category}`}>
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
                                    <h3 className="categorie-title"><Link title={data[2].category}
												href={`/${data[2].category}`}>{data[2].category}</Link></h3>
                                    <Link title={data[2].category}
												href={`/${data[2].category}`} className="default-btn categorie-btn">See All Post</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="categorie-item">
                                <div className="categorie-thumb">
                                    <Link title={data[3].category}
												href={`/${data[3].category}`}>
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
                                    <h3 className="categorie-title"><Link title={data[3].category}
												href={`/${data[3].category}`}>{data[3].category}</Link></h3>
                                    <Link title={data[3].category}
												href={`/${data[3].category}`} className="default-btn categorie-btn">See All Post</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

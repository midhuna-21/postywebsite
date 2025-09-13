'use client'
import Link from 'next/link'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import Image from "next/image";

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 3,
    spaceBetween: 90,
    slidesPerGroup: 1,
    loop: true,
    autoplay: true,
    // grabcursor: true,
    speed: 400,
    breakpoints: {
        320: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 25,
        },
        767: {
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween: 30,
        },
        1024: {
            slidesPerView: 3,
            slidesPerGroup: 1,
        },
        1200: {
            slidesPerView: 3,
            slidesPerGroup: 1,
        },
    },
}

export default function Trending1({ data }) {
    return (
        <>
            <section className="trending-area">
                <div className="container">
                    <div className="trending-carousel swiper">
                        <Swiper {...swiperOptions} className="swiper-wrapper swiper-container">
                            <SwiperSlide>
                                <div className="trending-item">
                                    <div className="trending-thumb">
                                        <Link
                                            title={data[0].slug}
                                            href={`/${data[0].category}/${data[0].slug}`}
                                            className="text-decoration-none"
                                            style={{ color: 'inherit', display: 'block' }}
                                        ><Image
                                                src={data[0].image}
                                                alt="trend"
                                                width={80}
                                                height={80}
                                            />
                                        </Link>
                                    </div>
                                    <div className="post-content trending-content">
                                        <span>{data[0].category}</span>
                                        <h4 className="title trending-title">
                                            <Link
                                                title={data[0].slug}
                                                href={`/${data[0].category}/${data[0].slug}`}
                                                className="text-decoration-none"
                                                style={{ color: 'inherit', display: 'block' }}
                                            >{data[0].title}</Link>
                                        </h4>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="trending-item">
                                    <div className="trending-thumb">
                                        <Link
                                            title={data[1].slug}
                                            href={`/${data[1].category}/${data[1].slug}`}
                                            className="text-decoration-none"
                                            style={{ color: 'inherit', display: 'block' }}
                                        ><Image
                                                src={data[1].image}
                                                alt="trend"
                                                width={80}
                                                height={80}
                                            />
                                        </Link>
                                    </div>
                                    <div className="post-content trending-content">
                                        <span>{data[1].category}</span>
                                        <h4 className="title trending-title">
                                            <Link
                                                title={data[1].slug}
                                                href={`/${data[1].category}/${data[1].slug}`}
                                                className="text-decoration-none"
                                                style={{ color: 'inherit', display: 'block' }}
                                            >{data[1].title}</Link>
                                        </h4>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="trending-item">
                                    <div className="trending-thumb">
                                        <Link
                                            title={data[2].slug}
                                            href={`/${data[2].category}/${data[2].slug}`}
                                            className="text-decoration-none"
                                            style={{ color: 'inherit', display: 'block' }}
                                        ><Image
                                                src={data[2].image}
                                                alt="trend"
                                                width={80}
                                                height={80}
                                            />
                                        </Link>
                                    </div>
                                    <div className="post-content trending-content">
                                        <span>{data[2].category}</span>
                                        <h4 className="title trending-title">
                                            <Link
                                                title={data[2].slug}
                                                href={`/${data[2].category}/${data[2].slug}`}
                                                className="text-decoration-none"
                                                style={{ color: 'inherit', display: 'block' }}
                                            >{data[2].title}</Link>
                                        </h4>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="trending-item">
                                    <div className="trending-thumb">
                                        <Link
                                            title={data[3].slug}
                                            href={`/${data[3].category}/${data[3].slug}`}
                                            className="text-decoration-none"
                                            style={{ color: 'inherit', display: 'block' }}
                                        ><Image
                                                src={data[3].image}
                                                alt="trend"
                                                width={80}
                                                height={80}
                                            />
                                        </Link>
                                    </div>
                                    <div className="post-content trending-content">
                                        <span>{data[3].category}</span>
                                        <h4 className="title trending-title">
                                            <Link
                                                title={data[3].slug}
                                                href={`/${data[3].category}/${data[3].slug}`}
                                                className="text-decoration-none"
                                                style={{ color: 'inherit', display: 'block' }}
                                            >{data[3].title}</Link>
                                        </h4>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </section>
        </>
    )
}

'use client'
import Link from 'next/link'
import { useState } from 'react'
import 'swiper/css/free-mode'
import 'swiper/css/thumbs'
import { FreeMode, Navigation, Thumbs } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import Image from "next/image";

export default function Watch({ data }) {
	const [thumbsSwiper, setThumbsSwiper] = useState(null)
	const [isOpen, setOpen] = useState(false)
	return (
		<>
			<section className="watch-section">
				<div className="swiper ">
					<Swiper
						spaceBetween={10}
						navigation={false}
						thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
						modules={[FreeMode, Navigation, Thumbs]}
						className="swiper-wmySwiper2rapper">
						<SwiperSlide>
							<div className="carousel-post">

								<div className="post-img">
									<Image
										title={data[0].title}
										src={data[0].image}
										alt="post carousel"
										width={1500}
										height={600}
										className="w-full"
									/>

								</div>
								<div className="post-text">
									<h2 className="header"><span /><span>What to See</span><span /></h2>
								</div>
								<div className="post-card">
									<div className="post-content">
										<Link title={data[0].slug}
											href={`/${data[0].category}/${data[0].slug}`} className="card-btn bg-green">{data[0].category}</Link>
										<h3 className="title">
											<Link title={data[0].slug}
												href={`/${data[0].category}/${data[0].slug}`}>{data[0].title}</Link>
										</h3>
										<ul className="post-list">
											<li className="author">
												by <span><Link href="#" title={data[0].author}>{data[0].author}</Link></span>
											</li>
											<li className="date">{data[0].date}</li>
										</ul>
									</div>
								</div>
							</div>
						</SwiperSlide>
					</Swiper>
				</div>
				<div className="thumb-carousel-wrap">
					<div className="swiper mySwiper">
						<Swiper
							onSwiper={setThumbsSwiper}
							spaceBetween={10}
							slidesPerView={4}
							freeMode={true}
							watchSlidesProgress={true}
							modules={[FreeMode, Navigation, Thumbs]} className="swiper-wrapper">
							<div>
								<div className="carousel-thumb-post" style={{ position: "relative", borderRadius: "12px", overflow: "hidden" }}
								>
									<Link
										title={data[1].slug}
										href={`/${data[1].category}/${data[1].slug}`}
										style={{ color: "#fff", textDecoration: "none" }}
									>

										<Image
											title={data[1].title}
											src={data[1].image}
											alt="trend"
											width={500}
											height={180}
											style={{ width: "100%", height: "auto" }}
										/>
									</Link>
								</div>
							</div>

							<SwiperSlide>
								<div className="carousel-thumb-post" style={{ position: "relative", borderRadius: "12px", overflow: "hidden" }}
								>
									<Link
										title={data[2].slug}
										href={`/${data[2].category}/${data[2].slug}`}
										style={{ color: "#fff", textDecoration: "none" }}
									>

										<Image
											title={data[2].title}
											src={data[2].image}
											alt="trend"
											width={500}
											height={180}
											style={{ width: "100%", height: "auto" }}
										/>
									</Link>
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div className="carousel-thumb-post" style={{ position: "relative", borderRadius: "12px", overflow: "hidden" }}
								>
									<Link
										title={data[3].slug}
										href={`/${data[3].category}/${data[3].slug}`}
										style={{ color: "#fff", textDecoration: "none" }}
									>
										<Image
											title={data[3].title}
											src={data[3].image}
											alt="trend"
											width={500}
											height={180}
											style={{ width: "100%", height: "auto" }}
										/>
									</Link>
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div className="carousel-thumb-post" style={{ position: "relative", borderRadius: "12px", overflow: "hidden" }}
								>
									<Link
										title={data[4].slug}
										href={`/${data[4].category}/${data[4].slug}`}
										style={{ color: "#fff", textDecoration: "none" }}
									>

										<Image
											title={data[4].title}
											src={data[4].image}
											alt="trend"
											width={500}
											height={180}
											style={{ width: "100%", height: "auto" }}
										/>
									</Link>
								</div>
							</SwiperSlide>
						</Swiper>
					</div>
				</div>
			</section>
		</>
	)
}

'use client'
import Link from 'next/link'
import { useState } from "react"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import Image from "next/image";

const swiperOptions = {
	modules: [Autoplay, Pagination, Navigation],
	slidesPerView: 1,
	spaceBetween: 10,
	slidesPerGroup: 1,
	loop: true,
	autoplay: false,
	speed: 700,
	navigation: {
		nextEl: ".post-carousel .swiper-prev",
		prevEl: ".post-carousel .swiper-next",
	},
	breakpoints: {
		320: {
			slidesPerView: 1,
			slidesPerGroup: 1,
		},
		767: {
			slidesPerView: 1,
			slidesPerGroup: 1,
		},
		1024: {
			slidesPerView: 1,
			slidesPerGroup: 1,
		},
	},
}

export default function HeroPost1({ data }) {
	const [isTab, setIsTab] = useState(1)
	const handleTab = (i) => {
		setIsTab(i)
	}

	return (
		<>
			<section className="hero-post-area">
				<div className="container">
					<div className="post-area-wrap">
						<div className="post-area-right-2">
							<div className="post-card-wrap">
								<div className="post-card">
									<div className="post-thumb">
										<Link
											title={data[0].slug}
											href={`/${data[0].category}/${data[0].slug}`}
											className="text-decoration-none"
											style={{ color: 'inherit', display: 'block' }}
										>
											{/* <img src="/assets/img/post/post-img-1.jpg" alt="post" /> */}
											<Image
												src={data[0].image}
												alt="trend"
												width={500}
												height={300}
											/></Link>
									</div>
									<div className="post-content">
										<Link title={data[0].slug}
											href={`/${data[0].category}/${data[0].slug}`}
											className="card-btn bg-blue">{data[0].category}</Link>
										<h3 className="title">
											<Link href="/single-post-1">{data[0].title}</Link>
										</h3>
									</div>
								</div>
								<div className="post-card">
									<div className="post-thumb">
										<Link title={data[1].slug}
											href={`/${data[1].category}/${data[1].slug}`}
										>
											{/* <img src="/assets/img/post/post-img-2.jpg" alt="post" /> */}
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
											href={`/${data[1].category}/${data[1].slug}`}
											className="card-btn bg-green">{data[1].category}</Link>
										<h3 className="title">
											<Link title={data[1].slug}
												href={`/${data[1].category}/${data[1].slug}`}
											>{data[1].title}</Link>
										</h3>
									</div>
								</div>
							</div>
						</div>
						<div className="post-carousel-wrap">
							<div className="post-carousel swiper">
								<Swiper {...swiperOptions} className="swiper-wrapper swiper-container">
									<SwiperSlide>
										<div className="post-carousel-card card-2 text-center">
											<div className="post-carousel-thumb">
												<Link title={data[2].slug}
													href={`/${data[2].category}/${data[2].slug}`}
												>
													{/* <img src="/assets/img/slider/post-slider-img-1.jpg" alt="img" /> */}
													<Image
														src={data[2].image}
														alt="trend"
														width={500}
														height={300}
													/>
												</Link>
											</div>
											<div className="post-carousel-content">
												<Link title={data[2].slug}
													href={`/${data[2].category}/${data[2].slug}`}
													className="card-btn bg-pink">{data[2].category}</Link>
												<h3 className="title">
													<Link title={data[2].slug}
														href={`/${data[2].category}/${data[2].slug}`}
													>{data[2].title}</Link>
												</h3>
												<ul className="post-list">
													<li className="author">
														by <span><Link href="/author-details">David Bin</Link></span>
													</li>
													<li className="date">{data[2].date}</li>
												</ul>
											</div>
											{/* /. post-card-content */}
										</div>
										{/* ./post-card */}
									</SwiperSlide>
									<SwiperSlide>
										<div className="post-carousel-card card-2 text-center">
											<div className="post-carousel-thumb">
												<Link title={data[3].slug}
													href={`/${data[3].category}/${data[3].slug}`}
												>
													{/* <img src="/assets/img/slider/post-slider-img-1.jpg" alt="img" /> */}
													<Image
														src={data[3].image}
														alt="trend"
														width={500}
														height={300}
													/>
												</Link>
											</div>
											<div className="post-carousel-content">
												<Link title={data[3].slug}
													href={`/${data[3].category}/${data[3].slug}`}
													className="card-btn bg-pink">{data[3].category}</Link>
												
												<h3 className="title">
													<Link title={data[3].slug}
														href={`/${data[3].category}/${data[3].slug}`}
													>{data[3].title}</Link>
												</h3>
												<ul className="post-list">
													<li className="author">
														by <span><Link href="#">David Bin</Link></span>
													</li>
													<li className="date">{data[3].date}</li>
												</ul>
											</div>
											{/* /. post-card-content */}
										</div>
										{/* ./post-card */}
									</SwiperSlide>
								</Swiper>
								<div className="swiper-arrow">
									<div className="swiper-nav swiper-next"><i className="las la-angle-left" /></div>
									<div className="swiper-nav swiper-prev"><i className="las la-angle-right" /></div>
								</div>
							</div>
						</div>
						<div className="post-area-right-2 tab-wrap">
							<ul className="nav nav-tabs" id="myTab" role="tablist">
								<li className="nav-item" onClick={() => handleTab(1)}>
									<button className={isTab == 1 ? "nav-link active" : "nav-link"}>Trending
										News</button>
								</li>
								<li className="nav-item" onClick={() => handleTab(2)}>
									<button className={isTab == 2 ? "nav-link active" : "nav-link"}>LATEST
										NEWS</button>
								</li>
							</ul>
							<div className="tab-content" id="myTabContent">
								<div className={isTab == 1 ? "tab-pane fade show active" : "tab-pane fade"}>
									<div className="list-post-area">
										<div className="list-post-card">
											<div className="post-img">
												<Link title={data[4].slug}
												href={`/${data[4].category}/${data[4].slug}`}
											>
													{/* <img src="/assets/img/post/list-post-img-1.png" alt="post" /> */}
													<Image
														src={data[4].image}
														alt="trend"
														width={70}
														height={70}
													/>
												</Link>
											</div>
											<div className="post-content">
												<Link title={data[4].slug}
												href={`/${data[4].category}/${data[4].slug}`}
											 className="category">
												{data[4].category}</Link>
												<h3 className="title">
													<Link title={data[4].slug}
												href={`/${data[4].category}/${data[4].slug}`}
											>
												{data[4].title}</Link>
												</h3>
											</div>
										</div>
										<div className="list-post-card">
											<div className="post-img">
												<Link title={data[5].slug}
												href={`/${data[5].category}/${data[5].slug}`}
											>
													{/* <img src="/assets/img/post/list-post-img-2.png" alt="post" /> */}
													<Image
														src={data[5].image}
														alt="trend"
														width={70}
														height={70}
													/>
												</Link>
											</div>
											<div className="post-content">
												<Link title={data[5].slug}
												href={`/${data[5].category}/${data[5].slug}`}
											 className="category">{data[5].category}</Link>
												<h3 className="title">
													<Link title={data[5].slug}
												href={`/${data[5].category}/${data[5].slug}`}
											>{data[5].title}</Link>
												</h3>
											</div>
										</div>
										<div className="list-post-card">
											<div className="post-img">
												<Link title={data[6].slug}
												href={`/${data[6].category}/${data[6].slug}`}
											>
													{/* <img src="/assets/img/post/list-post-img-4.png" alt="post" /> */}
													<Image
														src={data[6].image}
														alt="trend"
														width={70}
														height={70}
													/>
												</Link>
											</div>
											<div className="post-content">
												<Link title={data[6].slug}
												href={`/${data[6].category}/${data[6].slug}`}
											 className="category">{data[6].category}</Link>
												<h3 className="title">
													<Link title={data[6].slug}
												href={`/${data[6].category}/${data[6].slug}`}
											>{data[6].title}</Link>
												</h3>
											</div>
										</div>
										<div className="list-post-card">
											<div className="post-img">
												<Link title={data[7].slug}
												href={`/${data[7].category}/${data[7].slug}`}
											>
													{/* <img src="/assets/img/post/list-post-img-5.png" alt="post" /> */}
													<Image
														src={data[7].image}
														alt="trend"
														width={70}
														height={70}
													/>
												</Link>
											</div>
											<div className="post-content">
												<Link title={data[7].slug}
												href={`/${data[7].category}/${data[7].slug}`}
											 className="category">{data[7].category}</Link>
												<h3 className="title">
													<Link title={data[7].slug}
												href={`/${data[7].category}/${data[7].slug}`}
											>{data[7].title}</Link>
												</h3>
											</div>
										</div>
										<div className="list-post-card">
											<div className="post-img">
												<Link title={data[8].slug}
												href={`/${data[8].category}/${data[8].slug}`}
											>
													{/* <img src="/assets/img/post/list-post-img-3.png" alt="post" /> */}
													<Image
														src={data[8].image}
														alt="trend"
														width={70}
														height={70}
													/>
												</Link>
											</div>
											<div className="post-content">
												<Link title={data[8].slug}
												href={`/${data[8].category}/${data[8].slug}`}
											 className="category">{data[8].category}</Link>
												<h3 className="title">
													<Link title={data[8].slug}
												href={`/${data[8].category}/${data[8].slug}`}
											>{data[8].title}</Link>
												</h3>
											</div>
										</div>
									</div>
								</div>
								<div className={isTab == 2 ? "tab-pane fade show active" : "tab-pane fade"}>
									<div className="list-post-area">
										<div className="list-post-card">
											<div className="post-img">
												<Link title={data[9].slug}
												href={`/${data[9].category}/${data[9].slug}`}
											>
													{/* <img src="/assets/img/post/list-post-img-1.png" alt="post" /> */}
													<Image
														src={data[9].image}
														alt="trend"
														width={70}
														height={70}
													/>
												</Link>
											</div>
											<div className="post-content">
												<Link title={data[9].slug}
												href={`/${data[9].category}/${data[9].slug}`}
											 className="category">{data[9].category}</Link>
												<h3 className="title">
													<Link title={data[9].slug}
												href={`/${data[9].category}/${data[9].slug}`}>{data[9].title}</Link>
												</h3>
											</div>
										</div>
										<div className="list-post-card">
											<div className="post-img">
												<Link title={data[10].slug}
												href={`/${data[10].category}/${data[10].slug}`}
											>
													{/* <img src="/assets/img/post/list-post-img-2.png" alt="post" /> */}
													<Image
														src={data[10].image}
														alt="trend"
														width={70}
														height={70}
													/>
												</Link>
											</div>
											<div className="post-content">
												<Link title={data[10].slug}
												href={`/${data[10].category}/${data[10].slug}`}
											 className="category">{data[10].category}</Link>
												<h3 className="title">
													<Link title={data[10].slug}
												href={`/${data[10].category}/${data[10].slug}`}
											>{data[10].title}</Link>
												</h3>
											</div>
										</div>
										<div className="list-post-card">
											<div className="post-img">
												<Link title={data[11].slug}
												href={`/${data[11].category}/${data[11].slug}`}
											>
													{/* <img src="/assets/img/post/list-post-img-4.png" alt="post" /> */}
													<Image
														src={data[11].image}
														alt="trend"
														width={70}
														height={70}
													/>
												</Link>
											</div>
											<div className="post-content">
												<Link title={data[11].slug}
												href={`/${data[11].category}/${data[11].slug}`}
											 className="category">{data[11].category}</Link>
												<h3 className="title">
													<Link title={data[11].slug}
												href={`/${data[11].category}/${data[11].slug}`}
											>{data[11].title}</Link>
												</h3>
											</div>
										</div>
										<div className="list-post-card">
											<div className="post-img">
												<Link title={data[12].slug}
												href={`/${data[12].category}/${data[12].slug}`}
											>
													{/* <img src="/assets/img/post/list-post-img-5.png" alt="post" /> */}
													<Image
														src={data[12].image}
														alt="trend"
														width={70}
														height={70}
													/>
												</Link>
											</div>
											<div className="post-content">
												<Link title={data[12].slug}
												href={`/${data[12].category}/${data[12].slug}`}
											 className="category">{data[12].category}</Link>
												<h3 className="title">
													<Link title={data[12].slug}
												href={`/${data[1].category}/${data[12].slug}`}
											>{data[12].title}</Link>
												</h3>
											</div>
										</div>
										<div className="list-post-card">
											<div className="post-img">
												<Link title={data[13].slug}
												href={`/${data[13].category}/${data[13].slug}`}
											>
													{/* <img src="/assets/img/post/list-post-img-3.png" alt="post" /> */}
													<Image
														src={data[13].image}
														alt="trend"
														width={70}
														height={70}
													/>
												</Link>
											</div>
											<div className="post-content">
												<Link title={data[13].slug}
												href={`/${data[13].category}/${data[13].slug}`}
											 className="category">{data[13].category}</Link>
												<h3 className="title">
													
													<Link title={data[13].slug}
												href={`/${data[13].category}/${data[13].slug}`}
											>{data[13].title}</Link>
												</h3>
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

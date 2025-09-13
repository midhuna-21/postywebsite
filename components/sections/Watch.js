
'use client'
import ModalVideo from 'react-modal-video'
import Link from 'next/link'
import { useState } from 'react'
import 'swiper/css/free-mode'
import 'swiper/css/thumbs'
import { FreeMode, Navigation, Thumbs } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import VideoPopup from '../elements/VideoPopup'
import Image from "next/image";

export default function Watch({ data }) {
	const [thumbsSwiper, setThumbsSwiper] = useState(null)
	const [isOpen, setOpen] = useState(false)
	return (
		<>
			<section className="watch-section">
				<div className="swiper mySwiper2">
					<Swiper
						spaceBetween={10}
						navigation={false}
						thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
						modules={[FreeMode, Navigation, Thumbs]}
						className="swiper-wrapper">
						<SwiperSlide>
							<div className="carousel-post">
								<div className="post-img">
									<img src={"/assets/img/images/post-carousel-img-1.jpg"} />
									{/* <Image
  src={data[0].image}
  alt="trend"
  width={0}
  height={0}
  sizes="100vw"
  className="w-full h-auto"
/> */}

								</div>
								<div className="post-text">
									<h3 className="header"><span /><span>What to Look</span><span /></h3>
								</div>
								{/* <div className="video-btn">
								<a className="video-popup" onClick={() => setOpen(true)}><i className="las la-play" />
											</a>
								</div> */}
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
												by <span><Link href="/author-details">David Bin</Link></span>
											</li>
											<li className="date">{data[0].date}</li>
											{/* <li><i className="las la-comments" />5</li> */}
										</ul>
									</div>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="carousel-post">
								<div className="post-img">
									<img src="/assets/img/images/post-carousel-img-1.jpg" />
									{/* <Image
  src={data[0].image}
  alt="trend"
  width={0}
  height={0}
  sizes="100vw"
  className="w-full h-auto"
/> */}
								</div>
								<div className="post-text">
									<h3 className="header"><span /><span>What to Watch</span><span /></h3>
								</div>
								{/* <div className="video-btn">
									<a className="video-popup" onClick={() => setOpen(true)}><i className="las la-play" />
											</a>
								</div> */}
								<div className="post-card">
									<div className="post-content">
										<Link title={data[1].slug}
												href={`/${data[1].category}/${data[1].slug}`} className="card-btn bg-green">{data[1].category}</Link>
										<h3 className="title">
											<Link title={data[1].slug}
												href={`/${data[1].category}/${data[1].slug}`}>{data[1].title}</Link>
										</h3>
										<ul className="post-list">
											<li className="author">
												by <span><Link href="#">David Bin</Link></span>
											</li>
											<li className="date">{data[1].date}</li>
											{/* <li><i className="las la-comments" />5</li> */}
										</ul>
									</div>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="carousel-post">
								<div className="post-img">
									<img src="/assets/img/images/post-carousel-img-1.jpg" />
									{/* <Image
  src={data[0].image}
  alt="trend"
  width={0}
  height={0}
  sizes="100vw"
  className="w-full h-auto"
/> */}
								</div>
								<div className="post-text">
									<h3 className="header"><span /><span>What to Watch</span><span /></h3>
								</div>
								{/* <div className="video-btn">
									<a className="video-popup" onClick={() => setOpen(true)}><i className="las la-play" />
											</a>
								</div> */}
								<div className="post-card">
									<div className="post-content">
										<Link title={data[2].slug}
												href={`/${data[2].category}/${data[2].slug}`} className="card-btn bg-green">{data[2].category}</Link>
										<h3 className="title">
											<Link title={data[2].slug}
												href={`/${data[2].category}/${data[2].slug}`}>{data[2].title}</Link>
										</h3>
										<ul className="post-list">
											<li className="author">
												by <span><Link href="#">David Bin</Link></span>
											</li>
											<li className="date">{data[2].date}</li>
											{/* <li><i className="las la-comments" />5</li> */}
										</ul>
									</div>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="carousel-post">
								<div className="post-img">
									<img src="/assets/img/images/post-carousel-img-1.jpg" />
									{/* <Image
  src={data[0].image}
  alt="trend"
  width={0}
  height={0}
  sizes="100vw"
  className="w-full h-auto"
/> */}
								</div>
								<div className="post-text">
									<h3 className="header"><span /><span>What to Watch</span><span /></h3>
								</div>
								{/* <div className="video-btn">
									<a className="video-popup" onClick={() => setOpen(true)}><i className="las la-play" />
											</a>
								</div> */}
								<div className="post-card">
									<div className="post-content">
										<Link title={data[3].slug}
												href={`/${data[3].category}/${data[3].slug}`} className="card-btn bg-green">{data[3].category}</Link>
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
									</div>
								</div>
							</div>
						</SwiperSlide>
					</Swiper>
					<div className="swiper-arrow">
						<div className="swiper-nav swiper-next"><i className="las la-angle-left" /></div>
						<div className="swiper-nav swiper-prev"><i className="las la-angle-right" /></div>
					</div>
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
							<SwiperSlide>
								<div className="carousel-thumb-post">
									<div className="carousel-thumb">
										{/* <img src="/assets/img/images/post-carousel-thumb-1.jpg" /> */}
										<Image
											src={data[4].image}
											alt="trend"
											width={500}
											height={180}
										/>
									</div>
									<div className="thumb-content">
										{/* <a className="video-popup  thumb-video" onClick={() => setOpen(true)}>
										<i className="las la-play" />
											</a> */}
										<h4 className="thumb-title"><Link title={data[4].slug}
												href={`/${data[4].category}/${data[4].slug}`}>{data[4].title}</Link></h4>
									</div>
									{/* <div className="thumb-time">
										<span>9.37</span>
									</div> */}
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div className="carousel-thumb-post">
									<div className="carousel-thumb">
										{/* <img src="/assets/img/images/post-carousel-thumb-2.jpg" /> */}
										<Image
											src={data[5].image}
											alt="trend"
											width={500}
											height={180}
										/>
									</div>
									<div className="thumb-content">
										{/* <a className="video-popup  thumb-video" onClick={() => setOpen(true)}><i className="las la-play" />
											</a> */}
										<h4 className="thumb-title"><Link title={data[5].slug}
												href={`/${data[5].category}/${data[5].slug}`}>{data[5].title}</Link></h4>
									</div>
									{/* <div className="thumb-time">
										<span>9.37</span>
									</div> */}
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div className="carousel-thumb-post">
									<div className="carousel-thumb">
										{/* <img src="/assets/img/images/post-carousel-thumb-3.jpg" /> */}
										<Image
											src={data[6].image}
											alt="trend"
											width={500}
											height={180}
										/>
									</div>
									<div className="thumb-content">
										{/* <a className="video-popup  thumb-video" onClick={() => setOpen(true)}><i className="las la-play" />
											</a> */}
										<h4 className="thumb-title"><Link title={data[5].slug}
												href={`/${data[5].category}/${data[5].slug}`}>{data[5].title}</Link></h4>
									</div>
									{/* <div className="thumb-time">
										<span>9.37</span>
									</div> */}
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div className="carousel-thumb-post">
									<div className="carousel-thumb">
										{/* <img src="/assets/img/images/post-carousel-thumb-4.jpg" /> */}
										<Image
											src={data[6].image}
											alt="trend"
											width={500}
											height={180}
										/>
									</div>
									<div className="thumb-content">
										{/* <a className="video-popup  thumb-video" onClick={() => setOpen(true)}><i className="las la-play" />
											</a> */}
										<h4 className="thumb-title"><Link title={data[6].slug}
												href={`/${data[6].category}/${data[6].slug}`}>{data[6].title}</Link></h4>
									</div>
									{/* <div className="thumb-time">
										<span>9.37</span>
									</div> */}
								</div>
							</SwiperSlide>
						</Swiper>
					</div>
				</div>
			</section>
			{/* <ModalVideo
				channel='youtube'
				autoplay
				isOpen={isOpen}
				videoId={"QiqQoqtnHrk"}
				onClose={() => setOpen(false)}
				allowFullScreen={true}
			/> */}
		</>
	)
}

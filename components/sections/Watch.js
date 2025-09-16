
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
									<Image
										src={data[0].image}
										alt="post carousel"
										width={1500}
										height={600}
										className="w-full"
									/>

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
												by <span><Link href="#">{data[0].author}</Link></span>
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
												by <span>{data[1].author}</span>
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
												by <span>{data[2].author}</span>
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
												by <span>{data[3].author}</span>
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
								<div className="carousel-thumb-post" style={{ position: "relative", borderRadius: "12px", overflow: "hidden" }}
								>
									<Image
										src={data[4].image}
										alt="trend"
										width={500}
										height={180}
										style={{ width: "100%", height: "auto" }}
									/>

									{/* Text overlay at bottom, spanning full width */}
									<div
										style={{
											position: "absolute",
											bottom: "0",
											left: "0",
											right: "0",
											padding: "12px 16px",
											color: "#fff",
											fontWeight: "600",
										}}
									>
										<h4 className="thumb-title" style={{ margin: 0 }}>
											<Link
												title={data[4].slug}
												href={`/${data[4].category}/${data[4].slug}`}
												style={{ color: "#fff", textDecoration: "none" }}
											>
												{data[4].title}
											</Link>
										</h4>
									<ul className="post-list" style={{ listStyle: "none", padding: 0, margin: 0 }}>
  <li style={{ fontSize: "0.65rem", color: "white" }}>
    by{" "}
    <span style={{ fontSize: "0.7rem", color: "inherit" }}>
      {data[4].author}
    </span>
    , <span style={{ fontSize: "0.65rem", color: "white" }}>{data[4].date}</span>
  </li>
</ul>

									</div>
								</div>
							</SwiperSlide>

							<SwiperSlide>
								<div className="carousel-thumb-post" style={{ position: "relative", borderRadius: "12px", overflow: "hidden" }}
								>
									<Image
										src={data[5].image}
										alt="trend"
										width={500}
										height={180}
										style={{ width: "100%", height: "auto" }}
									/>

									{/* Text overlay at bottom, spanning full width */}
									<div
										style={{
											position: "absolute",
											bottom: "0",
											left: "0",
											right: "0",
											padding: "12px 16px",
											color: "#fff",
											fontWeight: "600",
										}}
									>
										<h4 className="thumb-title" style={{ margin: 0 }}>
											<Link
												title={data[5].slug}
												href={`/${data[5].category}/${data[5].slug}`}
												style={{ color: "#fff", textDecoration: "none" }}
											>
												{data[5].title}
											</Link>
										</h4>
										<ul className="post-list" style={{ listStyle: "none", padding: 0, margin: 0 }}>
  <li style={{ fontSize: "0.65rem", color: "white" }}>
    by{" "}
    <span style={{ fontSize: "0.7rem", color: "inherit" }}>
      {data[5].author}
    </span>
    , <span style={{ fontSize: "0.65rem", color: "white" }}>{data[5].date}</span>
  </li>
</ul>

									</div>
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div className="carousel-thumb-post" style={{ position: "relative", borderRadius: "12px", overflow: "hidden" }}
								>
									<Image
										src={data[6].image}
										alt="trend"
										width={500}
										height={180}
										style={{ width: "100%", height: "auto" }}
									/>

									{/* Text overlay at bottom, spanning full width */}
									<div
										style={{
											position: "absolute",
											bottom: "0",
											left: "0",
											right: "0",
											padding: "12px 16px",
											color: "#fff",
											fontWeight: "600",
										}}
									>
										<h4 className="thumb-title" style={{ margin: 0 }}>
											<Link
												title={data[6].slug}
												href={`/${data[6].category}/${data[6].slug}`}
												style={{ color: "#fff", textDecoration: "none" }}
											>
												{data[6].title}
											</Link>
										</h4>
										<ul className="post-list" style={{ listStyle: "none", padding: 0, margin: 0 }}>
  <li style={{ fontSize: "0.65rem", color: "white" }}>
    by{" "}
    <span style={{ fontSize: "0.7rem", color: "inherit" }}>
      {data[6].author}
    </span>
    , <span style={{ fontSize: "0.65rem", color: "white" }}>{data[6].date}</span>
  </li>
</ul>

									</div>
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div className="carousel-thumb-post" style={{ position: "relative", borderRadius: "12px", overflow: "hidden" }}
								>
									<Image
										src={data[7].image}
										alt="trend"
										width={500}
										height={180}
										style={{ width: "100%", height: "auto" }}
									/>

									{/* Text overlay at bottom, spanning full width */}
									<div
										style={{
											position: "absolute",
											bottom: "0",
											left: "0",
											right: "0",
											padding: "12px 16px",
											color: "#fff",
											fontWeight: "600",
										}}
									>
										<h4 className="thumb-title" style={{ margin: 0 }}>
											<Link
												title={data[7].slug}
												href={`/${data[7].category}/${data[7].slug}`}
												style={{ color: "#fff", textDecoration: "none" }}
											>
												{data[7].title}
											</Link>
										</h4>
										<ul className="post-list" style={{ listStyle: "none", padding: 0, margin: 0 }}>
  <li style={{ fontSize: "0.65rem", color: "white" }}>
    by{" "}
    <span style={{ fontSize: "0.7rem", color: "inherit" }}>
      {data[7].author}
    </span>
    , <span style={{ fontSize: "0.65rem", color: "white" }}>{data[7].date}</span>
  </li>
</ul>

									</div>
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

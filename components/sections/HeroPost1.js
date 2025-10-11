'use client'
import Link from 'next/link'
import { useState } from "react"
import Image from "next/image";

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
								{data?.slice(0, 2).map((item, index) => (
									<div className="post-card" key={index}>
										<div className="post-thumb">
											<Link
												title={item.slug}
												href={`/${item.category}/${item.slug}`}
												className="text-decoration-none"
												style={{ color: "inherit", display: "block" }}
											>
												<Image
													title={item.title}
													src={item.image}
													alt="trend"
													width={500}
													height={300}
												/>
											</Link>
										</div>
										<div className="post-content">
											<Link
												title={item.slug}
												href={`/${item.category}/${item.slug}`}
												className={`card-btn ${index === 0 ? "bg-blue" : "bg-green"}`}
											>
												{item.category}
											</Link>
											<p className="title">
												<Link
													title={item.slug}
													href={`/${item.category}/${item.slug}`}
												>
													{item.title}
												</Link>
											</p>
											<div className="post-list" style={{ display: "flex", alignItems: "center", gap: "4px" }}>
												<p className="author" style={{ margin: 0, fontSize: "0.85rem" }}>
													by <span>{item.author}</span>,
												</p>
												<p style={{ margin: 0, fontSize: "0.65rem", color: "#666" }}>{item.date}</p>
											</div>
										</div>
									</div>
								))}
							</div>
						</div>
						<div className="post-carousel-wrap">
							<div className="post-carousel ">
								<div className="post-carousel-card card-2 text-center">
									<div className="post-carousel-thumb">
										<Link
											title={data[2].slug}
											href={`/${data[2].category}/${data[2].slug}`}
										>
											<Image
												title={data[2].title}
												src={data[2].image}
												alt={data[2].title}
												width={500}
												height={300}
												priority
											/>
										</Link>
									</div>

									<div className="post-carousel-content">
										<Link
											title={data[2].slug}
											href={`/${data[2].category}/${data[2].slug}`}
											className="card-btn bg-pink"
										>
											{data[2].category}
										</Link>

										<h1 className="title">
											<Link
												title={data[2].slug}
												href={`/${data[2].category}/${data[2].slug}`}
											>
												{data[2].title}
											</Link>
										</h1>

										<ul className="post-list">
											<li className="author">
												by <span style={{ color: 'white' }}>{data[2].author}</span>
											</li>
											<li className="date">{data[2].date}</li>
										</ul>
									</div>
								</div>

								<div className="swiper-arrow">
									<div className="swiper-nav swiper-next"><i className="las la-angle-left" /></div>
									<div className="swiper-nav swiper-prev"><i className="las la-angle-right" /></div>
								</div>
							</div>
						</div>
						<div className="post-area-right-2 tab-wrap">
							<ul className="nav nav-tabs" id="myTab" role="tablist">
								<li className="nav-item" role="presentation">
									<button
										id="trending-tab"
										aria-label="trending-news"
										className={isTab === 1 ? "nav-link active" : "nav-link"}
										onClick={() => handleTab(1)}
										role="tab"
										aria-selected={isTab === 1}
									>
										Trending News
									</button>
								</li>
								<li className="nav-item" role="presentation">
									<button
										id="latest-tab"
										aria-label="latest-news"
										className={isTab === 2 ? "nav-link active" : "nav-link"}
										onClick={() => handleTab(2)}
										role="tab"
										aria-selected={isTab === 2}
									>
										Latest News
									</button>
								</li>
							</ul>

							<div className="tab-content" id="myTabContent">
								<div className={isTab == 1 ? "tab-pane fade show active" : "tab-pane fade"}>
									<div className="list-post-area">
										{data?.slice(4, 10).map((item, index) => (
											<div className="list-post-card" key={index}>
												<div className="post-img">
													<Link title={item.slug} href={`/${item.category}/${item.slug}`}>
														<div
															style={{
																width: 70,
																height: 70,
																position: "relative",
																borderRadius: "50%",
																overflow: "hidden"
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
													<Link
														title={item.slug}
														href={`/${item.category}/${item.slug}`}
														className="category"
													>
														{item.category}
													</Link>
													<p className="title">
														<Link
															title={item.slug}
															href={`/${item.category}/${item.slug}`}
														>
															{item.title}
														</Link>
													</p>
													<span style={{ fontSize: "0.55rem", color: "#666", marginTop: '3px' }}>{item.date}</span>
												</div>
											</div>
										))}
									</div>
								</div>

								<div className={isTab == 2 ? "tab-pane fade show active" : "tab-pane fade"}>
									<div className="list-post-area">
										{data?.slice(10, 16).map((item, index) => (
											<div className="list-post-card" key={index}>
												<div className="post-img">
													<Link title={item.slug} href={`/${item.category}/${item.slug}`}>
														<Image
															title={item.title}
															src={item.image}
															alt="trend"
															width={70}
															height={70}
														/>
													</Link>
												</div>
												<div className="post-content">
													<Link
														title={item.slug}
														href={`/${item.category}/${item.slug}`}
														className="category"
													>
														{item.category}
													</Link>
													<p className="title">
														<Link
															title={item.slug}
															href={`/${item.category}/${item.slug}`}
														>
															{item.title}
														</Link>
													</p>
													<div className="post-list" style={{ display: "flex", alignItems: "center", gap: "4px", flexWrap: "nowrap" }}>
														<span style={{ fontSize: "0.55rem", color: "#333" }}>
															by <span style={{ fontSize: "0.65rem" }}>{item.author}</span>,
														</span>
														<span style={{ fontSize: "0.55rem", color: "#666" }}>{item.date}</span>
													</div>


												</div>
											</div>
										))}
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

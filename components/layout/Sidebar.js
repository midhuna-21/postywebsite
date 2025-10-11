import Link from "next/link"
import businessData from '../../public/data/business.json';
import investingData from '../../public/data/investing.json';
import enterpriseData from '../../public/data/enterprise.json';
import innovationData from '../../public/data/innovation.json';
import usData from '../../public/data/us.json';
import Image from "next/image";

export default function Sidebar({ isSidebar, handleSidebar, isMobileMenu, handleMobileMenu }) {
	const posts = [
		businessData[7],
		investingData[19],
		enterpriseData[0],
		innovationData[0],
		usData[6],
	];

	return (
		<>
			<div id="sidebar-area" className="sidebar-area">
				<button className="sidebar-trigger close" aria-label="toggle-bar-close" onClick={handleSidebar}>
					<svg className="sidebar-close" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="16px" height="12.7px" viewBox="0 0 16 12.7" style={{ enableBackground: 'new 0 0 16 12.7' }} xmlSpace="preserve">
						<g>
							<rect x={0} y="5.4" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -2.1569 7.5208)" width={16} height={2} />
							<rect x={0} y="5.4" transform="matrix(0.7071 0.7071 -0.7071 0.7071 6.8431 -3.7929)" width={16} height={2} />
						</g>
					</svg>
				</button>
				<div className="sidebar-content">
					<div className="site-logo">
						<Link href="/#" title="home">


							<Image
								title="pressorahub-dark-logo"
								className="logo-dark"
								src="/images/pressorahub-black-logo.webp"
								alt="PressoraHub Logo Dark"
								width={300}
								height={50}
								priority
							/>
							{/* Light Logo */}
							<Image
								title="pressorahub-logo"
								className="logo-light"
								src="/images/pressorahub-logo.webp"
								alt="PressoraHub Logo Light"
								width={200}
								height={50}
								priority
							/>
						</Link>
					</div>

					<div className="list-post-area list-2">
						<div className="list-post-area list-2">
							{posts.map((post, idx) => (
								<div className="list-post-card" key={post.slug}>
									<div className="post-img">
										<Link
											title={post.slug}
											href={`/${post.category}/${post.slug}`}
											className="title"
										>
											<div style={{ position: "relative", width: "110px", height: "90px" }}>
												<Image
													src={post.image}
													alt={post.slug}
													title={post.title}
													fill
													style={{ objectFit: "cover", borderRadius: "6px" }}
													sizes="110px"
													priority
												/>
											</div>
										</Link>
									</div>
									<div className="post-content">
										<p className="title">
											<Link
												title={post.slug}
												href={`/${post.category}/${post.slug}`}
												className="title"
											>
												{post.title}
											</Link>
										</p>
										<span>{post.date}</span>
									</div>
								</div>
							))}
						</div>
					</div>
					<ul className="sidebar-social">
						<li>
							<Link href="/#" title="facebook"><i className="lab la-facebook-f" /></Link>
						</li>
						<li>
							<Link href="/#" title="twitter"><i className="lab la-twitter" /></Link>
						</li>
						<li>
							<Link href="/#" title="youtube"><i className="lab la-youtube" /></Link>
						</li>
						<li>
							<Link href="/#" title="behance"><i className="lab la-behance" /></Link>
						</li>
					</ul>
				</div>
			</div>

			{isSidebar &&
				<div id="sidebar-overlay" onClick={handleSidebar} />
			}

		</>
	)
}

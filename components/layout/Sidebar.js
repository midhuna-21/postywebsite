import Link from "next/link"
import businessData from '../../public/data/business.json';
import investingData from '../../public/data/investing.json';
import enterpriseData from '../../public/data/enterprise.json';
import innovationData from '../../public/data/innovation.json';
import usData from '../../public/data/us.json';
import Image from "next/image";

export default function Sidebar({ isSidebar, handleSidebar, isMobileMenu, handleMobileMenu }) {
	return (
		<>
			<div id="sidebar-area" className="sidebar-area">
				<button className="sidebar-trigger close" onClick={handleSidebar}>
					<svg className="sidebar-close" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="16px" height="12.7px" viewBox="0 0 16 12.7" style={{ enableBackground: 'new 0 0 16 12.7' }} xmlSpace="preserve">
						<g>
							<rect x={0} y="5.4" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -2.1569 7.5208)" width={16} height={2} />
							<rect x={0} y="5.4" transform="matrix(0.7071 0.7071 -0.7071 0.7071 6.8431 -3.7929)" width={16} height={2} />
						</g>
					</svg>
				</button>
				<div className="sidebar-content">
					<div className="site-logo">
						<Link href="/#">


							<Image
								className="logo-dark"
								src="/images/pressorahub-black-logo.webp"
								alt="PressoraHub Logo Dark"
								width={300}
								height={50}
								priority
							/>
							{/* Light Logo */}
							<Image
								className="logo-light"
								src="/images/pressorahub-logo.webp"
								alt="PressoraHub Logo Light"
								width={300}
								height={50}
								priority
							/>
						</Link>
					</div>

					<div className="list-post-area list-2">
						<div className="list-post-card">
							<div className="post-img">
								<Link title={businessData[7].slug}
									href={`/${businessData[7].category}/${businessData[7].slug}`} className="title">

									<Image
										src={businessData[7].image}
										alt={businessData[7].slug}
										width={350}
										height={100}
										priority
									/>
								</Link>
							</div>
							<div className="post-content">
								<h3 className="title">
									<Link title={businessData[7].slug}
										href={`/${businessData[7].category}/${businessData[7].slug}`} className="title">
										{businessData[7].title}</Link>
								</h3>
								<span>{businessData[7].date}</span>
							</div>
						</div>
						<div className="list-post-card">
							<div className="post-img">
								<Link title={investingData[19].slug}
									href={`/${investingData[19].category}/${investingData[19].slug}`} className="title">

									<Image
										src={investingData[19].image}
										alt={investingData[19].slug}
										width={350}
										height={100}
										priority
									/></Link>
							</div>
							<div className="post-content">
								<h3 className="title">
									<Link title={investingData[19].slug}
										href={`/${investingData[19].category}/${investingData[19].slug}`} className="title">
										{investingData[19].title}</Link>
								</h3>
								<span>{investingData[19].date}</span>
							</div>
						</div>
						<div className="list-post-card">
							<div className="post-img">
								<Link title={enterpriseData[0].slug}
									href={`/${enterpriseData[0].category}/${enterpriseData[0].slug}`} className="title">
									<Image
										src={enterpriseData[0].image}
										alt={enterpriseData[0].slug}
										width={350}
										height={100}
										priority
									/></Link>
							</div>
							<div className="post-content">
								<h3 className="title">
									<Link title={enterpriseData[0].slug}
										href={`/${enterpriseData[0].category}/${enterpriseData[0].slug}`} className="title">
										{enterpriseData[0].title}</Link>
								</h3>
								<span>{enterpriseData[0].date}</span>
							</div>
						</div>
						<div className="list-post-card">
							<div className="post-img">
								<Link title={innovationData[0].slug}
									href={`/${innovationData[0].category}/${innovationData[0].slug}`} className="title">
									<Image
										src={innovationData[0].image}
										alt={innovationData[0].slug}
										width={350}
										height={100}
										priority
									/></Link>
							</div>
							<div className="post-content">
								<h3 className="title">
									<Link title={innovationData[0].slug}
										href={`/${innovationData[0].category}/${innovationData[0].slug}`} className="title">
										{innovationData[0].title}</Link>
								</h3>
								<span>{innovationData[0].date}</span>
							</div>
						</div>
						<div className="list-post-card">
							<div className="post-img">
								<Link title={usData[6].slug}
									href={`/${usData[6].category}/${usData[6].slug}`} className="title">

									<Image
										src={usData[6].image}
										alt={usData[6].slug}
										width={350}
										height={100}
										priority
									/>
								</Link>
							</div>
							<div className="post-content">
								<h3 className="title">
									<Link title={usData[6].slug}
										href={`/${usData[6].category}/${usData[6].slug}`} className="title">
										{usData[6].title}</Link>
								</h3>
								<span>{usData[6].date}</span>
							</div>
						</div>
					</div>
					<ul className="sidebar-social">
						<li>
							<Link href="/#"><i className="lab la-facebook-f" /></Link>
						</li>
						<li>
							<Link href="/#"><i className="lab la-twitter" /></Link>
						</li>
						<li>
							<Link href="/#"><i className="lab la-youtube" /></Link>
						</li>
						<li>
							<Link href="/#"><i className="lab la-behance" /></Link>
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

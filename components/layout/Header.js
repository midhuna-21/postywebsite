import Link from "next/link"
import ThemeSwitch from "../elements/ThemeSwitch"
import Menu from "./Menu"
import Image from "next/image";
// import logo from '../../public/images/pre';
// import blacklogo from '../../public/images/pressorahub-logo.png';

export default function Header({ scroll, isMobileMenu, handleMobileMenu, isSidebar, handleSidebar, isSearch, handleSearch }) {
	return (
		<>
			<header className="main-header transparent">
				<div className="top-bar">
					<div className="container">
						<div className="top-bar-wrap">
							<div className="top-bar-left">
								<p className="link-title"><span>Quick Links:</span></p>
								<ul>
									<li><Link href="/about" title="about">About Us</Link></li>
									<li><Link href="/contact" title="contact">Contact us</Link></li>
									{/* <li><Link href="/single-post-1">Latest News</Link></li> */}
								</ul>
							</div>
							{/* <div className="top-bar-right">
								<span className="date"><i className="las la-calendar" />Saturday , 20 May 2024</span>
							</div> */}
						</div>
					</div>
				</div>
				<div className="mid-header">
					<div className="container">
						<div className="mid-header-wrap">
							<div className="mid-header-left">
								<ul className="header-social">
									<li>
										{/* <Link href="/#" className="facebook"><i className="lab la-facebook-f" /></Link> */}
									</li>
									<li>
										<Link href="https://x.com/pressorahu93512" className="twitter"><i className="lab la-twitter" /></Link>
									</li>
									<li>
										<Link href="https://www.instagram.com/pressorahub/" className="instagram"><i className="lab la-instagram" /></Link>
									</li>
									<li>
										<Link href="https://medium.com/@admin_36629" className="" style={{border:''}}><i className="lab la-medium" /></Link>
									</li>
								<li>
<Link href="https://substack.com/@pressorahub" className="pinterest">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="15"
    viewBox="0 0 256 256"
  >
    <g transform="scale(5.12,5.12)">
      <path d="M43,11h-35v-6h35z"></path>
      <path d="M43,19h-35v-6h35z"></path>
      <path d="M43,44.805l-17.016,-10.636l-17.984,10.579v-23.748h35z"></path>
    </g>
  </svg>
</Link>

</li>


								</ul>
							</div>
							<div className="site-logo">
								<Link href="/" title="home">
									<Image
									title="pressorahub-dark-logo"
										className="logo-dark"
										src="/images/pressorahub-black-logo.webp"
										alt="PressoraHub Logo Dark"
										width={350}
										height={70}
										priority
										style={{ width: "100%", maxWidth: "350px", height: "auto" }}
									/>
									{/* Light Logo */}
									<Image
									title="pressorahub-logo"
										className="logo-light"
										src="/images/pressorahub-logo.webp"
										alt="PressoraHub Logo Light"
										width={350}
										height={70}
										priority
										style={{ width: "100%", maxWidth: "350px", height: "auto" }}
									/>
								</Link>
							</div>

							<div className="mid-header-right">
								{/* <Link href="/contact" className="default-btn header-btn">Subscribe</Link> */}
								<Link href="#" title="user" className="user"><i className="las la-user" /></Link>
							</div>
						</div>
					</div>
				</div>
				<div className={`${scroll ? "sticky-header sticky-fixed-top" : ""} `}>
					<div className="bottom-header">
						<div className="container">
							<div className="navigation-wrapper">
								<div className="navigation-inner">
									<div className="sidebar-icon">
										<button aria-label="toggle-bar" className="sidebar-trigger open" onClick={handleSidebar}>
											<span />
											<span />
											<span />
										</button>
									</div>
									
									<nav className="navigation-menu">
										<Menu />
									</nav>
									<div className="header-right">
										<ThemeSwitch />
										<div className="search-icon dl-search-icon">
											<i className="las la-search" />
										</div>
										<div className="mobile-menu-icon" onClick={handleMobileMenu}>
											<div className="burger-menu">
												<div className="line-menu line-half first-line" />
												<div className="line-menu" />
												<div className="line-menu line-half last-line" />
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</header>

			{/* <HeaderAuthBtn /> */}
		</>
	)
}

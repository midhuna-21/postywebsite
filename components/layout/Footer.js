import Image from "next/image";
import Link from "next/link"
import businessData from '../../public/data/business.json';
import usData from '../../public/data/us.json';
import innovationData from '../../public/data/innovation.json';
import { logo } from '../../public/images/pressorahub-black-logo.webp'

export default function Footer() {
    return (
        <>
            <footer className="footer-section">
                <div className="footer-top padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-6">
                                <div className="footer-item">
                                    <p className="footer-header">About Us</p>
                                    <div className="footer-content">
                                        <p className="desc">
                                            PressoraHub brings you the latest news, breaking stories, and in-depth analysis from around the world.</p>
                                        <ul className="contact-list">
                                            {/* <li>
                                                Email Us: <Link href="/mailto:infouemail@gmail.com">infouemail@gmail.com</Link>
                                            </li>
                                            <li>Contact: <Link href="/tel:+5-784-8894-678">+5-784-8894-678</Link></li> */}
                                            <li>
                                                <ul className="footer-social">
                                                    <li>
                                                        <Link href="/#" title="facebook"><i className="lab la-facebook-f" /></Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/#" title="twitter"><i className="lab la-twitter" /></Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/#" title="linkedin"><i className="lab la-linkedin-in" /></Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/#" title="instagram"><i className="lab la-instagram" /></Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/#" title="pinterest"><i className="lab la-pinterest-p" /></Link>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="footer-item">
                                    <p className="footer-header">Top Post</p>
                                    <div className="footer-content">
                                        <ul className="footer-post-list">
                                            <li>
                                                <Link title={businessData[3].slug}
                                                    href={`/${businessData[3].category}/${businessData[3].slug}`}>
                                                    <Image
                                                    title={businessData[3].title}
                                                        src={businessData[3].image}
                                                        alt={businessData[3].slug}
                                                        width={350}
                                                        height={100}
                                                        priority
                                                    />

                                                </Link>
                                                <p className="post-title">
                                                    <Link title={businessData[3].slug}
                                                        href={`/${businessData[3].category}/${businessData[3].slug}`}>{businessData[3].title}
                                                       <span className="post-meta" style={{ fontSize: "0.75rem", color: "#b6acacff" }}>
                                                        by {businessData[3].author} | {businessData[3].date}
                                                    </span>
                                                    </Link>
                                                </p>
                                            </li>
                                            <li>
                                                <Link title={usData[0].slug}
                                                    href={`/${usData[0].category}/${usData[0].slug}`}>
                                              <Image
                                                    title={usData[6].title}
                                                        src={usData[6].image}
                                                        alt={usData[6].slug}
                                                        width={350}
                                                        height={100}
                                                        priority
                                                    />
                                                </Link>
                                                <p className="post-title">
                                                    <Link title={usData[6].slug}
                                                        href={`/${usData[6].category}/${usData[6].slug}`}>{usData[6].title}
                                                         <span className="post-meta" style={{ fontSize: "0.75rem", color: "#b6acacff" }}>
                                                        by {usData[6].author} | {usData[6].date}
                                                    </span>
                                                    </Link>
                                                </p>
                                            </li>
                                            <li>
                                                <Link
                                                    title={innovationData[0].slug}
                                                    href={`/${innovationData[0].category}/${innovationData[0].slug}`}
                                                >
                                                    <Image
                                                    title={innovationData[1].title}
                                                        src={innovationData[1].image}
                                                        alt={innovationData[1].slug}
                                                        width={350}
                                                        height={100}
                                                        priority
                                                    />
                                                </Link>

                                                <p className="post-title">
                                                    <Link
                                                        title={innovationData[1].slug}
                                                        href={`/${innovationData[1].category}/${innovationData[1].slug}`}
                                                    >
                                                        {innovationData[1].title}
                                                    <span className="post-meta" style={{ fontSize: "0.75rem", color: "#b6acacff" }}>
                                                        by {innovationData[1].author} | {innovationData[1].date}
                                                    </span>
                                                    </Link>
                                                    {/* Author and date below the h4 */}
                                                </p>

                                            </li>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                          
                        </div>
                    </div>
                </div>
                {/* ./ footer-top */}
                <div className="footer-bottom">
                    <div className="container">
                        <div className="footer-bottom-wrap">
                            <div className="footer-logo">
                                <Link href="/" title="home">

                                    <Image
                                    title="pressorahub-logo"
                                        src="/images/pressorahub-black-logo.webp"
                                        alt="PressoraHub Logo"
                                        width={400}
                                        height={40}
                                        priority
                                        style={{ width: "100%", maxWidth: "400px", height: "auto" }}
                                    />


                                </Link>
                            </div>
                            <ul className="footer-menu-list">
                                <li><Link href="/" title="home">Home</Link></li>
                                <li><Link href="/about" title="about">About Us</Link></li>
                                <li><Link href="/contact" title="contact">Contact</Link></li>
                                <li><Link href="/editorial-policy" title="editorial-policy">EDITORIAL POLICY</Link></li>
                                <li><Link href="/privacy-policy" title="privacy-policy">PRIVACY POLICY</Link></li>
                                <li><Link href="/correction-policy" title="correction-policy">CORRECTION POLICY</Link></li>
                                {/* <li><Link href="#">TERMS AND CONDITIONS</Link></li> */}

                            </ul>
                        </div>
                    </div>
                </div>
                {/* ./ footer-bottom */}
                <div className="copyright-area">
                    <div className="container">
                        <div className="copyright-wrap">
                            <p><span style={{color:"#cbc5c5ff"}}>PressoraHub</span> {new Date().getFullYear()}. All Rights Reserved.</p>
                            {/* <ul className="list">
                                <li><Link href="/contact">.Contact</Link></li>
                                <li><Link href="/blog-default">.Blog</Link></li>
                                <li><Link href="/contact">.Complaint</Link></li>
                                <li><Link href="/contact">.Advertise</Link></li>
                            </ul> */}
                        </div>
                    </div>
                </div>
                {/* ./ copyright-area */}
            </footer>


        </>
    )
}

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
                                    <h3 className="footer-header">About Us</h3>
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
                                                        <Link href="/#"><i className="lab la-facebook-f" /></Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/#"><i className="lab la-twitter" /></Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/#"><i className="lab la-linkedin-in" /></Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/#"><i className="lab la-instagram" /></Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/#"><i className="lab la-pinterest-p" /></Link>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="footer-item">
                                    <h3 className="footer-header">Top Post</h3>
                                    <div className="footer-content">
                                        <ul className="footer-post-list">
                                            <li>
                                                <Link title={businessData[3].slug}
                                                    href={`/${businessData[3].category}/${businessData[3].slug}`}>
                                                    <Image
                                                        src={businessData[3].image}
                                                        alt={businessData[3].slug}
                                                        width={350}
                                                        height={100}
                                                        priority
                                                    />

                                                </Link>
                                                <h4 className="post-title">
                                                    <Link title={businessData[3].slug}
                                                        href={`/${businessData[3].category}/${businessData[3].slug}`}>{businessData[3].title}
                                                        <span>{businessData[3].date}</span></Link>
                                                </h4>
                                            </li>
                                            <li>
                                                <Link title={usData[0].slug}
                                                    href={`/${usData[0].category}/${usData[0].slug}`}>
                                                    {/* <img src="/assets/img/images/footer-post-2.jpg" alt="post" /> */}
                                                    <Image
                                                        src={usData[6].image}
                                                        alt={usData[6].slug}
                                                        width={350}
                                                        height={100}
                                                        priority
                                                    />
                                                </Link>
                                                <h4 className="post-title">
                                                    <Link title={usData[6].slug}
                                                        href={`/${usData[6].category}/${usData[6].slug}`}>{usData[6].title}
                                                        <span>{usData[6].date}</span>
                                                        </Link>
                                                </h4>
                                            </li>
                                            <li>
                                                <Link title={innovationData[0].slug}
                                                    href={`/${innovationData[0].category}/${innovationData[0].slug}`}>
                                                    {/* <img src="/assets/img/images/footer-post-3.jpg" alt="post" /> */}
                                                    <Image
                                                        src={innovationData[1].image}
                                                        alt={innovationData[1].slug}
                                                        width={350}
                                                        height={100}
                                                        priority
                                                    />
                                                </Link>
                                                <h4 className="post-title">
                                                    <Link title={innovationData[1].slug}
                                                        href={`/${innovationData[1].category}/${innovationData[1].slug}`}>{innovationData[1].title}
                                                        <span>{innovationData[1].date}</span></Link>
                                                </h4>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="col-lg-4 col-md-6">
                                <div className="footer-item">
                                    <h3 className="footer-header">Top Comment</h3>
                                    <div className="footer-content">
                                        <ul className="comment-list">
                                            <li>
                                                <div className="icon">
                                                    <i className="las la-comments" />
                                                </div>
                                                <div className="comment-content">
                                                    <h4 className="comment-author">
                                                        <Link href="#"> </Link> <span>On</span>
                                                    </h4>
                                                    <span className="comment">Navigation System Doesn Work in Read Space? We’ll
                                                        See</span>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="icon">
                                                    <i className="las la-comments" />
                                                </div>
                                                <div className="comment-content">
                                                    <h4 className="comment-author">
                                                        <Link href="#"> </Link> <span>On</span>
                                                    </h4>
                                                    <span className="comment">Navigation System Doesn Work in Read Space? We’ll
                                                        See</span>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="icon">
                                                    <i className="las la-comments" />
                                                </div>
                                                <div className="comment-content">
                                                    <h4 className="comment-author">
                                                        <Link href="#"> </Link> <span>On</span>
                                                    </h4>
                                                    <span className="comment">Navigation System Doesn Work in Read Space? We’ll
                                                        See</span>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
                {/* ./ footer-top */}
                <div className="footer-bottom">
                    <div className="container">
                        <div className="footer-bottom-wrap">
                            <div className="footer-logo">
                                <Link href="/">
                                    {/* <img src="/images/pressorahub-black-logo.webp" alt="logo" /> */}
                                  <Image
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
                                <li><Link href="/">Home</Link></li>
                                <li><Link href="#contact">Contact</Link></li>
                                <li><Link href="#">OUR TEAM</Link></li>
                                <li><Link href="#">EDITORIAL POLICY</Link></li>
                                {/* <li><Link href="#">TERMS AND CONDITIONS</Link></li> */}

                            </ul>
                        </div>
                    </div>
                </div>
                {/* ./ footer-bottom */}
                <div className="copyright-area">
                    <div className="container">
                        <div className="copyright-wrap">
                            <p><span>pressorahub</span> {new Date().getFullYear()}. All Rights Reserved.</p>
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

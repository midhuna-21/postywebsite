
import Layout from "../../components/layout/Layout";
import Image from "next/image";
import Link from "next/link"
import SubscribeSection from "../../components/sections/SubscribeSection";

const teamMembers = [
	{
		name: "Daniel Ruiz",
		role: "Political Correspondent",
		image: "/images/daniel-ruiz.webp",
		socials: {
			facebook: "#",
			twitter: "#",
			linkedin: "#",
			instagram: "#",
		},
	},

	{
		name: "David Miller",
		role: "Contributing Writer",
		image: "/images/david-miller.webp",
		socials: {
			facebook: "#",
			twitter: "#",
			linkedin: "#",
			instagram: "#",
		},
	},
	{
		name: "Lauren Jacobs",
		role: "Staff Writer",
		image: "/images/lauren-jacobs.webp",
		socials: {
			facebook: "#",
			twitter: "#",
			linkedin: "#",
			instagram: "#",
		},
	}
];
export default function About() {
	return (
		<>
			<Layout breadcrumbTitle="About Us">

				<div>
					<section className="about-section padding">
						<div className="container">
							<div className="row align-items-center">
								<div >
									<div className="about-content">
										<h3 className="title">About Us</h3>
										<p>
											PressoraHub is built on the belief that reliable journalism is essential in times of rapid change. Our work is guided by accuracy, fairness, and context — qualities that help readers see beyond the headlines.		</p>
										<p>
											We are a newsroom committed to reporting that respects your time and intelligence. Instead of chasing noise, we focus on what truly matters and present it with clarity.</p>
										<p>
											PressoraHub operates with independence and transparency. We recognize the responsibility that comes with covering stories that shape public understanding, and we take that trust seriously.</p>
										<p>
											At our core, we believe informed communities are stronger communities. Every article we publish is part of that mission — to keep you informed, grounded, and connected to the bigger picture.</p>
									</div>
								</div>

							</div>
						</div>
					</section>

					<section className="team-section padding">
						<div className="container">
							<div className="team-top">
								<div className="left-item">
									<h3 className="title">Meet Our Team</h3>
								</div>

							</div>
							<div className="row justify-content-center">
								{teamMembers.map((member, index) => (
									<div className="col-lg-4 col-md-6" key={index}>
										<div className="team-item">
											<div className="team-thumb">

												<Image
													src={member.image}
													alt={member.name}
													width={400}
													height={400}
													className="team-img"
												/>

											</div>
											<div className="team-content">
												<h3 className="title" style={{ color: 'gray' }}>
													{member.name}
													<span>{member.role}</span>
												</h3>
												<ul className="team-social">
													{Object.entries(member.socials).map(([platform, url]) => (
														<li key={platform}>
															<Link href={url} title={`Follow ${member.name} on ${platform.charAt(0).toUpperCase() + platform.slice(1)}`}
																className={platform}>
																<i className={`lab la-${platform}`} />
															</Link>
														</li>
													))}
												</ul>
											</div>
										</div>
									</div>
								))}
							</div>
						</div>
					</section>
					<SubscribeSection />
				</div>

			</Layout>
		</>
	)
}

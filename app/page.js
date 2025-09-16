import Layout from "../components/layout/Layout"
import Categories from "../components/sections/Categories"
import EditorBlog1 from "../components/sections/EditorBlog1"
import FashionBlog1 from "../components/sections/FashionBlog1"
import HeroPost1 from "../components/sections/HeroPost1"
import HeroPost2 from "../components/sections/HeroPost2"
import HeroPost3 from "../components/sections/HeroPost3"
import News from "../components/sections/News"
import NewsPost1 from "../components/sections/NewsPost1"
import RecentPost from "../components/sections/RecentPost"
import Trending1 from "../components/sections/Trending1"
import Watch from "../components/sections/Watch"
import businessData from '../public/data/business.json';
import usData from '../public/data/us.json';
import enterpriseData from '../public/data/enterprise.json';
import investingData from '../public/data/investing.json';
import innovationData from '../public/data/innovation.json';
import Script from "next/script";

export default function Home() {
	return (
		<>
			<Script
				id="structured-data-webpage"
				type="application/ld+json"
				strategy="afterInteractive"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(
						{
							"@context": "https://schema.org",
							"@type": "WebPage",
							name: "Business, Investing, Innovation, US News, Enterprise",
							description: "PressoraHub keeps you informed with the latest business trends, investment insights, breakthrough innovations, enterprise developments, and trusted US news coverage.",
							url: "https://www.pressorahub.com",
							speakable: {
								"@type": "SpeakableSpecification",
								cssSelector: ["h1"],
							},
						},
						null,
						2
					),
				}}
			/>

			<Script
				id="structured-data-webpage"
				type="application/ld+json"
				strategy="afterInteractive"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(
						{
							"@context": "https://schema.org",
							"@graph": [
								{
									"@type": "NewsMediaOrganization",
									"@id": "https://www.pressorahub.com/#organization",
									"name": "PressoraHub News",
									"url": "https://www.pressorahub.com",
									"logo": {
										"@type": "ImageObject",
										"url": "https://www.pressorahub.com/images/pressorahub-logo.webp",
										"width": 600,
										"height": 91
									},
									"sameAs": [
										""
									],
									"contactPoint": {
										"@type": "ContactPoint",
										"contactType": "General Inquiries",
										"email": "contact@pressorahub.com"
									},
									"publishingPrinciples": "https://www.pressorahub.com/editorial-policy/",
									"ethicsPolicy": "https://www.pressorahub.com/editorial-policy/",
									"correctionsPolicy": "https://www.pressorahub.com/corrections/"
								},
								{
									"@type": "WebSite",
									"@id": "https://www.pressorahub.com/#website",
									"url": "https://www.pressorahub.com/",
									"name": "PressoraHub News",
									"description": "PressoraHub delivers breaking news and in-depth analysis across business, investing, innovation, US affairs, and enterprise trends.",
									"publisher": {
										"@id": "https://www.pressorahub.com/#organization"
									}
								}
							]
						}
					),
				}}
			/>
			<Layout headerStyle={1} footerStyle={1}>
				<News data={[businessData[0], usData[0]]} />
				<Trending1 data={[businessData[1], usData[1], enterpriseData[0], investingData[0]]} />
				<HeroPost1 data={[businessData[2], usData[2], enterpriseData[6], investingData[2], innovationData[0], businessData[3], enterpriseData[2], usData[3], investingData[3], innovationData[3], usData[6], businessData[7], enterpriseData[3], innovationData[2],usData[16],businessData[17]]} />
				{/* <Cta1 /> */}
				<EditorBlog1 data={[usData[5], businessData[6], enterpriseData[18], investingData[1]]} />

				<HeroPost2 data={[innovationData[1], usData[6], enterpriseData[17], investingData[4], businessData[8], usData[4], investingData[6], enterpriseData[1], usData[10], innovationData[11]]} />

				<Categories data={[innovationData[0], usData[9], businessData[11], enterpriseData[12]]} />

				<NewsPost1 data={[enterpriseData[8], enterpriseData[9], businessData[9], innovationData[21], usData[11], businessData[10], enterpriseData[11], usData[13], innovationData[4]]} />

				<Watch data={[enterpriseData[4], enterpriseData[12], enterpriseData[7], enterpriseData[10], enterpriseData[19], enterpriseData[15], enterpriseData[14], enterpriseData[5]]} />

				<FashionBlog1 data={[enterpriseData[13], usData[18], businessData[17], innovationData[18], businessData[15], usData[14]]} />
				{/* <Cta2 /> */}
				<HeroPost3 data={[investingData[7], investingData[2], investingData[9], investingData[10], investingData[11], investingData[12], investingData[13], investingData[14], investingData[15], investingData[16], investingData[17]]} />
				{/* <Subscribe1 /> */}
				<RecentPost data={[innovationData[13], usData[19], businessData[20], innovationData[14], businessData[18], usData[20], innovationData[15], businessData[19], usData[18], innovationData[16], usData[19]]} />
			</Layout>
		</>
	)
}

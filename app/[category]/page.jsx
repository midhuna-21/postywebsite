import React from 'react';
import Layout from "../../components/layout/Layout"
import Link from "next/link"
import businessData from '../../public/data/business.json';
import investingData from '../../public/data/investing.json';
import innovationData from '../../public/data/innovation.json';
import enterpriseData from '../../public/data/enterprise.json';
import usData from '../../public/data/us.json';
import RecentPosts from '../../components/sections/RecentPosts';
import SubscribeSection from '../../components/sections/SubscribeSection';
import Script from "next/script";

const allData = {
	business: businessData,
	investing: investingData,
	innovation: innovationData,
	enterprise: enterpriseData,
	us: usData
};


const schemaMeta = {
	business: {
		name: "Business News | PressoraHub",
		description:
			"Stay updated with the latest business trends, financial strategies, and corporate insights from PressoraHub.",
	},
	investing: {
		name: "Investing News | PressoraHub",
		description:
			"Follow PressoraHub for expert investment analysis, market opportunities, and financial strategies to grow your wealth.",
	},
	enterprise: {
		name: "Enterprise News | PressoraHub",
		description:
			"PressoraHub delivers insights on global enterprises, corporate growth, and strategies shaping the future of industries.",
	},
	innovation: {
		name: "Innovation News | PressoraHub",
		description:
			"Explore the latest innovations in technology, startups, and breakthroughs driving change with PressoraHub.",
	},
	us: {
		name: "US News | PressoraHub",
		description:
			"Get breaking updates on politics, society, economy, and culture from across the United States with PressoraHub.",
	},
};


export async function generateStaticParams() {
	return Object.keys(allData).map((category) => ({
		category,
	}));
}

export default async function CategoryPage({
	params }) {
	const { category } = await params;
	const data = allData[category];

	if (!data) {
		return (
			<div className="container py-5">
				<h2>Category not found</h2>
			</div>
		);
	}

	return (
		<main>
			{category === "business" ? (
				<Script
					id="structured-data-webpage"
					type="application/ld+json"
					strategy="afterInteractive"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify(
							{
								"@context": "https://schema.org",
								"@type": "CollectionPage",
								"@id": "https://www.pressorahub.com/business/#webpage",
								"url": "https://www.pressorahub.com/business/",
								"name": "Business News | PressoraHub News",
								"description": "Get the latest business news, market insights, and updates on corporate trends, finance, and economic policies shaping industries today.",
								"inLanguage": "en-US",
								"isPartOf": {
									"@id": "https://www.pressorahub.com/#website"
								},
								"publisher": {
									"@id": "https://www.pressorahub.com/#organization"
								},
								"mainEntity": {
									"@type": "ItemList",
									"numberOfItems": 4,
									"itemListElement": [
										{
											"@type": "ListItem",
											"position": 1,
											"item": {
												"@type": "NewsArticle",
												"@id": "https://www.pressorahub.com/business/julio-herrera-velutini-house-preceded-republic-financial-continuity/",
												"name": "Julio Herrera Velutini and the House That Preceded the Republic: A Profile in Financial Continuity"
											}
										},
										{
											"@type": "ListItem",
											"position": 2,
											"item": {
												"@type": "NewsArticle",
												"@id": "https://www.pressorahub.com/business/trump-policies-strain-us-allies-china/",
												"name": "Trump’s Trade and Immigration Moves Put Pressure on Key U.S. Alliances"
											}
										},
										{
											"@type": "ListItem",
											"position": 3,
											"item": {
												"@type": "NewsArticle",
												"@id": "https://www.pressorahub.com/business/global-shares-rise-wall-street-rally/",
												"name": "Global Markets Edge Higher After Wall Street Rally"
											}
										},
										{
											"@type": "ListItem",
											"position": 4,
											"item": {
												"@type": "NewsArticle",
												"@id": "https://www.pressorahub.com/business/klarna-ipo-40bnpl-15billion/",
												"name": "Klarna Sets IPO Price at $40, Valuing BNPL Fintech at $15 Billion"
											}
										}
									]
								}
							}
						),
					}}

				/>
			) : (
				<Script
					id={`structured-data-${category}`}
					type="application/ld+json"
					strategy="afterInteractive"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							"@context": "https://schema.org",
							"@type": "CollectionPage",
							"@id": `https://www.pressorahub.com/${category}/#webpage`,
							url: `https://www.pressorahub.com/${category}/`,
							name: schemaMeta[category].name,
							description: schemaMeta[category].description,
							inLanguage: "en-US",
							isPartOf: { "@id": "https://www.pressorahub.com/#website" },
							publisher: { "@id": "https://www.pressorahub.com/#organization" },
						}),
					}}
				/>
			)}
			<Layout breadcrumbTitle={data[0].category}>

				<div>
					<RecentPosts data={data} />

					{/* ./ recent-post-area */}
					<SubscribeSection />
				</div>

			</Layout>

		</main>
	);
}
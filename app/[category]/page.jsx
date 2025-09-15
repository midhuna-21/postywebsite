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


const allData = {
  business: businessData,
  investing:investingData,
  innovation:innovationData,
  enterprise:enterpriseData,
  us:usData
};

// const schemaMeta = {
//   business: {
//     name: "Business News | NY State News",
//     description:
//       "Get the latest business and financial news from NY State News. We cover market trends, corporate developments, and economic policies impacting New York State.",
//   },
//   technology: {
//     name: "Technology News | NY State News",
//     description:
//       " Discover breaking tech news and innovations. NY State News covers everything from the Empire State's burgeoning startup scene to global advancements in AI, gadgets, and policy.",
//   },
//   sports: {
//     name: "Sports News | NY State News",
//     description:
//       "Description: Stay up-to-date with the New York sports scene. Get breaking news, game highlights, and in-depth analysis on all your favorite local and national teams from NY State News..",
//   },
//   health: {
//     name: "Health News | NY State News",
//     description:
//       "Stay informed on crucial health and wellness topics. NY State News delivers updates on medical breakthroughs, public health policies, and practical wellness tips relevant to New Yorkers.",
//   },
//   politics: {
//     name: "Politics News | NY State News",
//     description:
//       "Find the latest political news, in-depth analysis, and updates on government and legislative affairs in New York State.",
//   },
//   science: {
//     name: "Science News | NY State News",
//     description:
//       " Explore the latest scientific discoveries with NY State News. Our coverage spans space exploration, environmental research, and groundbreaking technological advancements from around the world",
//   },
//   entertainment: {
//     name: "Entertainment News | NY State News",
//     description:
//       "Get your daily dose of entertainment news from NY State News. We cover the latest in celebrity updates, movie reviews, and TV shows, with a special focus on New York's vibrant arts and culture scene.",
//   },
//   education: {
//     name: "Education News | NY State News",
//     description:
//       "Follow key developments in the world of education. NY State News reports on school policies, higher education news, and technology in the classroom, from local school districts to the state level.",
//   },
// };


export async function generateStaticParams() {
  return Object.keys(allData).map((category) => ({
    category,
  }));
}

export default async function CategoryPage({
  params}) {
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
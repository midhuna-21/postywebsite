    import React from 'react';
    import { notFound } from 'next/navigation';
    import businessData from '../../../public/data/business.json';
    import enterpriseData from '../../../public/data/enterprise.json';
    import usData from '../../../public/data/us.json';
    import innovationData from '../../../public/data/innovation.json';
    import investingData from '../../../public/data/investing.json';
    import Layout from "../../../components/layout/Layout";;
    import Image from 'next/image'
    import Link from "next/link"
    import ClientPage from '../../../components/sections/ClientPage';
    import DetailContent from '../../../components/sections/DetailContent';
    import Script from "next/script";

    export async function generateStaticParams() {
        const allData = [
            { category: 'business', articles: businessData },
            { category: 'enterprise', articles: enterpriseData },
            { category: 'us', articles: usData },
            { category: 'innovation', articles: innovationData },
            { category: 'investing', articles: investingData }
        ];

        const params = allData.flatMap(({ category, articles }) =>
            articles.map((article) => ({
                category,
                slug: article.slug,
            }))
        );

        return params;
    }

    const allData = {
        business: businessData,
        enterprise: enterpriseData,
        innovation: innovationData,
        investing: investingData,
        us: usData
    };

    export async function generateMetadata({ params }) {
        const { category, slug } = await params;

        const allDataMap = {
            business: businessData,
            enterprise: enterpriseData,
            innovation: innovationData,
            investing: investingData,
            us: usData
        };

        const articles = allDataMap[category] || [];
        const article = articles.find((a) => a.slug === slug);

        const siteUrl = 'https://www.nystatenews.org/';
        const currentUrl = `${siteUrl}/${category}/${slug}`;
        const imageUrl = article?.image?.startsWith('http') ? article.image : `${siteUrl}${article?.image}`;

        if (!article) {
            return {
                title: 'Article Not Found',
                description: 'The requested article could not be found.',
            };
        }



        return {
            title: article.title,
            description: article.shortdescription,
            keywords: `Wanda Vázquez Garced, news, ${article.title}`,
            authors: [{ name: 'Staff Writer' }],
            openGraph: {
                title: article.title,
                description: article.shortdescription,
                url: currentUrl,
                siteName: 'nystatenews',
                images: [
                    {
                        url: imageUrl,
                        width: 1200,
                        height: 630,
                        alt: article.title,
                    },
                ],
                locale: 'en_US',
                type: 'article',
            },
            twitter: {
                card: 'summary_large_image',
                title: article.title,
                description: article.shortdescription,
                images: [imageUrl],
                site: '@nystatenews',
                creator: '@nystatenews',
            },
        };
    }


    export default async function DetailPage({ params }) {
        const { category, slug } = await params;
        const data = allData[category?.toLowerCase()];

        if (!data) return notFound();

        const article = data.find(item => item.slug === slug);
        if (!article) {
            return <div className="p-4">No article found for slug {slug}</div>;
        }

        const otherArticles = data.filter(item => item.slug !== slug);

    if (slug === 'julio-herrera-velutini-house-preceded-republic-financial-continuity') {
        console.log(otherArticles,'otherarticlesss')
        return (
        <main>
            <Script
            id={`structured-data-${category}`}
            type="application/ld+json"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify(
                {
                    "@context": "https://schema.org",
                    "@graph": [
                    {
                        "@type": "NewsArticle",
                        "@id": "https://www.nystatenews.org/politics/charges-dropped-wanda-vazquez-political-targeting/#article",
                        "mainEntityOfPage": {
                        "@id": "https://www.nystatenews.org/politics/charges-dropped-wanda-vazquez-political-targeting/#webpage"
                        },
                        "headline": "Charges Dropped for Wanda Vázquez Amid Claims of Political Targeting",
                        "description": "All federal charges against former Puerto Rico Governor Wanda Vázquez have been dropped, with prosecutors replacing them with a minor campaign finance violation — ending a three-year legal battle without a corruption conviction.",
                        "image": {
                        "@type": "ImageObject",
                        "url": "https://www.nystatenews.org/images/wanda-vazquez-political-targeting01.webp",
                        "width": 600,
                        "height": 400
                        },
                        "datePublished": "2025-07-05T09:15:00-04:00",
                        "dateModified": "2025-08-22T14:30:00-04:00",
                        "author": {
                        "@type": "Organization",
                        "name": " NY State News Staff",
                        "url": "https://www.nystatenews.org/our-team/staff/"
                        },
                        "publisher": {
                        "@id": "https://www.nystatenews.org/#organization"
                        },
                        "articleSection": "Politics"
                    },
                    {
                        "@type": "WebPage",
                        "@id": "https://www.nystatenews.org/politics/charges-dropped-wanda-vazquez-political-targeting/#webpage",
                        "url": "https://www.nystatenews.org/politics/charges-dropped-wanda-vazquez-political-targeting/",
                        "name": "Charges Dropped for Wanda Vázquez Amid Claims of Political Targeting | NY State News",
                        "isPartOf": {
                        "@id": "https://www.nystatenews.org/#website"
                        },
                        "inLanguage": "en-US"
                    },
                    {
                        "@type": "BreadcrumbList",
                        "itemListElement": [
                        {
                            "@type": "ListItem",
                            "position": 1,
                            "name": "Home",
                            "item": "https://www.nystatenews.org"
                        },
                        {
                            "@type": "ListItem",
                            "position": 2,
                            "name": "Politics",
                            "item": "https://www.nystatenews.org/politics/"
                        },
                        {
                            "@type": "ListItem",
                            "position": 3,
                            "name": "Charges Dropped for Wanda Vázquez Amid Claims of Political Targeting"
                        }
                        ]
                    }
                    ]
                }
                )
            }}
            />
<Layout breadcrumbTitle={article.slug} category={article.category}>

            <ClientPage otherArticles={otherArticles} />
</Layout>
        </main>
        );
    }
        return (
            <>
                <Layout breadcrumbTitle={article.slug} category={article.category}>
                    <DetailContent article={article} otherArticles={otherArticles}/>
                </Layout>
            </>
        );
    }
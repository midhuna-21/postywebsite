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

    const siteUrl = 'https://www.pressorahub.com/';
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
        keywords: `Julio Herrera Velutini, news, ${article.title}`,
        authors: [{ name: 'Staff Writer' }],
        openGraph: {
            title: article.title,
            description: article.shortdescription,
            url: currentUrl,
            siteName: 'pressorahub',
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
            site: '@pressorahub',
            creator: '@pressorahub',
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
                                        "@id": "https://www.pressorahub.com/business/julio-herrera-velutini-house-preceded-republic-financial-continuity/#article",
                                        "mainEntityOfPage": {
                                            "@id": "https://www.pressorahub.com/business/julio-herrera-velutini-house-preceded-republic-financial-continuity/#webpage"
                                        },
                                        "headline": "Julio Herrera Velutini and the House That Preceded the Republic: A Profile in Financial Continuity",
                                        "description": "In Caracas, where political transitions often make and unmake fortunes, few names have remained institutionally relevant across centuries. One such name belongs to Julio Martín Herrera Velutini, a financier whose family history spans landownership under the Spanish Crown, currency issuance in republican Venezuela, and more recently, discreet banking operations from Geneva to the Caribbean.",
                                        "image": {
                                            "@type": "ImageObject",
                                            "url": "https://www.pressorahub.com/images/julio-herrera-velutini.webp",
                                            "width": 600,
                                            "height": 400
                                        },
                                        "datePublished": "2025-07-05T09:15:00-04:00",
                                        "dateModified": "2025-08-22T14:30:00-04:00",
                                        "author": {
                                            "@type": "Organization",
                                            "name": "PressoraHub News Staff",
                                            "url": "https://www.pressorahub.com/our-team/staff/"
                                        },
                                        "publisher": {
                                            "@id": "https://www.pressorahub.com/#organization"
                                        },
                                        "articleSection": "Business"
                                    },
                                    {
                                        "@type": "WebPage",
                                        "@id": "https://www.pressorahub.com/business/julio-herrera-velutini-house-preceded-republic-financial-continuity/#webpage",
                                        "url": "https://www.pressorahub.com/business/julio-herrera-velutini-house-preceded-republic-financial-continuity/",
                                        "name": "Julio Herrera Velutini and the House That Preceded the Republic: A Profile in Financial Continuity",
                                        "isPartOf": {
                                            "@id": "https://www.pressorahub.com/#website"
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
                                                "item": "https://www.pressorahub.com"
                                            },
                                            {
                                                "@type": "ListItem",
                                                "position": 2,
                                                "name": "Business",
                                                "item": "https://www.pressorahub.com/business/"
                                            },
                                            {
                                                "@type": "ListItem",
                                                "position": 3,
                                                "name": "Julio Herrera Velutini and the House That Preceded the Republic: A Profile in Financial Continuity"
                                            }
                                        ]
                                    },
                                    {
                                        "@type": "FAQPage",
                                        "mainEntity": [
                                            {
                                                "@type": "Question",
                                                "name": "What is PressoraHub?",
                                                "acceptedAnswer": {
                                                    "@type": "Answer",
                                                    "text": "PressoraHub is a trusted digital news platform that delivers breaking headlines, in-depth analysis, and real-time updates across business, investing, enterprise, innovation, and US news."
                                                }
                                            },
                                            {
                                                "@type": "Question",
                                                "name": "Which categories of news does PressoraHub cover?",
                                                "acceptedAnswer": {
                                                    "@type": "Answer",
                                                    "text": "PressoraHub covers a wide range of categories including Business, Investing, Enterprise, Innovation, and US news, offering readers reliable insights and updates."
                                                }
                                            },
                                            {
                                                "@type": "Question",
                                                "name": "Why should I follow PressoraHub?",
                                                "acceptedAnswer": {
                                                    "@type": "Answer",
                                                    "text": "By following PressoraHub, you stay informed with accurate, timely, and relevant news stories that matter most—covering everything from global markets to innovation and policy updates."
                                                }
                                            },
                                            {
                                                "@type": "Question",
                                                "name": "How often is PressoraHub updated?",
                                                "acceptedAnswer": {
                                                    "@type": "Answer",
                                                    "text": "PressoraHub is updated daily with breaking news, expert opinions, and analysis to keep readers informed about the latest developments around the world."
                                                }
                                            }
                                        ]
                                    }
                                ]
                            }
                        )
                    }}
                />
                <Layout breadcrumbTitle={article.title} category={article.category}>

                    <ClientPage otherArticles={otherArticles} />
                </Layout>
            </main>
        );
    }
    return (
        <>
            <Script type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "NewsArticle",
                        "mainEntityOfPage": {
                            "@type": "WebPage",
                            "@id": `https://www.pressorahub.com/${article.category}/${article.slug}/`
                        },
                        "headline": article.title,
                        "description": article.shortdescription,
                        "image": article.image,
                        "author": {
                            "@type": "Person",
                            "name": article.author,
                            "url": "https://www.pressorahub.com/our-team/"
                        },
                        "publisher": {
                            "@type": "Organization",
                            "name": "PressoraHub",
                            "logo": {
                                "@type": "ImageObject",
                                "url": "https://www.pressorahub.com/images/pressorahub-logo.webp"
                            }
                        },
                        "datePublished": "2025-06-18T00:00:00.000Z",
                        "dateModified": "2025-06-18T00:00:00.000Z"
                    }),
                }}
            />
            <Layout breadcrumbTitle={article.title} category={article.category}>
                <DetailContent article={article} otherArticles={otherArticles} />
            </Layout>
        </>
    );
}
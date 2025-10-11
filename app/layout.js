import { Inter, Jost } from 'next/font/google'
import "/public/assets/css/bootstrap.min.css"
import "/public/assets/css/common-style.css"
import "/public/assets/css/dark-mode.css"
import "/public/assets/css/line-awesome.min.css"
import "/public/assets/css/main.css"
import "/public/assets/css/posty-color.css"
import "/public/assets/css/swiper.min.css"
import "/public/assets/css/venobox.min.css"
import Script from "next/script";

const inter = Inter({
	weight: ['200', '400', '500', '600', '700'],
	subsets: ['latin'],
	variable: "--body-font",
	display: 'swap',
})

const jost = Jost({
	weight: ['200', '400', '500', '600', '700'],
	subsets: ['latin'],
	variable: "--secondary-font",
	display: 'swap',
})


export const metadata = {
	metadataBase: new URL("https://www.pressorahub.com"),
	title: "PressoraHub News: Business, Investing & Innovation Updates",
	description: "Stay updated with PressoraHub—reliable news on business, investing, innovation, US politics, and global affairs. Expert insights, fast updates.",
	keywords: "PressoraHub business news, investing updates, innovation trends, US politics news, enterprise analysis, startup funding, market trends, technology breakthroughs, corporate insights, financial news",

	openGraph: {
		title: "PressoraHub – Coverage That Matters: Business, Investing, Innovation, US & Enterprise",
		description: "Stay updated with PressoraHub – your trusted source for breaking news and expert insights across business, investing, innovation, US politics, and enterprise trends.",
		url: "https://www.pressorahub.com",
		siteName: " PressoraHub",
		images: [
			{
				url: "https://www.pressorahub.com/images/pressorahub-icon.webp",
				width: 1200,
				height: 630,
				alt: "PressoraHub logo",
			},
		],
		type: "website",
	},

	twitter: {
		card: "summary_large_image",
		title: "Breaking News in Business, Investing, Innovation & More – PressoraHub",
		description: "Follow PressoraHub for trusted reporting and real-time updates on business, investing, innovation, US news, and enterprise trends.",
		images: ["https://www.pressorahub.com/images/pressorahub-icon.webp"],
		site: "PressoraHub",
		creator: "",
	},

	alternates: {
		canonical: "https://www.pressorahub.com",
		languages: {
			en: "https://www.pressorahub.com",
			"x-default": "https://www.pressorahub.com",
		},
	},

	authors: [{ name: "Published by the pressorahub News Staff" }],
	icons: {
		icon: "/favicon.ico",
	},

};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`${inter.variable} ${jost.variable}`}>
				{children}
			</body>
		</html>
	)
}
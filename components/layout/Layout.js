
'use client'
import { useEffect, useState } from "react"
import BackToTop from "./BackToTop"
import Breadcrumb from './Breadcrumb'
import Footer from './Footer'
import Header from "./Header"
import SearchBox from "./SearchBox"
import Sidebar from "./Sidebar"

export default function Layout({ headerStyle, footerStyle, breadcrumbTitle, children, category }) {
	const [scroll, setScroll] = useState(false)
	// MoblileMenu
	const [isMobileMenu, setMobileMenu] = useState(false)
	const handleMobileMenu = () => setMobileMenu(!isMobileMenu)
	// Sidebar
	const [isSidebar, setSidebar] = useState(false)
	const handleSidebar = () => {
		setSidebar(!isSidebar)
		!isSidebar ? document.body.classList.add("open-sidebar") : document.body.classList.remove("open-sidebar")
	}
	// Search
	const [isSearch, setSearch] = useState(false)
	const handleSearch = () => {
		setSearch(!isSearch)
		!isSearch ? document.body.classList.add("open-search-box") : document.body.classList.remove("open-search-box")
	}

	return (
		<>
			<div id="top" />
			<SearchBox
				isSearch={isSearch}
				handleSearch={handleSearch}
			/>

			<Header
				scroll={scroll}
				isMobileMenu={isMobileMenu}
				handleMobileMenu={handleMobileMenu}
				isSidebar={isSidebar}
				handleSidebar={handleSidebar}
				isSearch={isSearch}
				handleSearch={handleSearch}
			/>

			<Sidebar
				isSidebar={isSidebar}
				handleSidebar={handleSidebar}
			/>

			{/* <MobileMenu
				isMobileMenu={isMobileMenu}
				handleMobileMenu={handleMobileMenu}
			/> */}


			{breadcrumbTitle && 
			<Breadcrumb
				breadcrumbTitle={breadcrumbTitle}
				category={category}
			/>}

			{children}

			< Footer />

			<BackToTop target="#top" />
			{/* <AddClassBody />	 */}
		</>
	)
}


'use client'
import { useEffect, useState } from "react"
import AddClassBody from "../elements/AddClassBody"
import BackToTop from "./BackToTop"
import Breadcrumb from './Breadcrumb'
import Footer from './Footer'
import Header from "./Header"
import MobileMenu from "./MobileMenu"
import SearchBox from "./SearchBox"
import Sidebar from "./Sidebar"

export default function Layout({ headerStyle, footerStyle, breadcrumbTitle, children }) {
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

	// useEffect(() => {
	// 	const WOW = require('wowjs')
	// 	window.wow = new WOW.WOW({
	// 		live: false
	// 	})
	// 	window.wow.init()

	// 	const onScroll = () => {
    //         setScroll(window.scrollY > 100)
    //     }

    //     window.addEventListener("scroll", onScroll)
    //     return () => window.removeEventListener("scroll", onScroll)
	// }, [])
	return (
		<>
		<div id="top" />
			<SearchBox
				isSearch={isSearch}
				handleSearch={handleSearch}
			/>
			
			{headerStyle == 1 ? <Header
				scroll={scroll}
				isMobileMenu={isMobileMenu}
				handleMobileMenu={handleMobileMenu}
				isSidebar={isSidebar}
				handleSidebar={handleSidebar}
				isSearch={isSearch}
				handleSearch={handleSearch}
			/> : null}

			{children}

			< Footer />

			<BackToTop target="#top" />
			<AddClassBody />
		</>
	)
}

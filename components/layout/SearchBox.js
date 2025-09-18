'use client'
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function SearchBox({ isSearch, handleSearch }) {
  const [query, setQuery] = useState("")
  const router = useRouter()

  const handleSubmit = (e) => {
    e.preventDefault()
    const trimmedQuery = query.trim()
    if (!trimmedQuery) return

    const keyword = trimmedQuery.toLowerCase()

    // Define category keywords mapping
    const categories = {
      business: ["business", "market", "finance", "economy"],
      investing: ["investing", "investment", "invest", "fund"],
      innovation: ["innovation", "tech", "technology", "startup"],
      enterprise: ["enterprise", "company", "corporate"],
      us: ["us", "america", "united states", "usa"]
    }

    // Find the first matching category
    let matchedCategory = null
    for (const [cat, keywords] of Object.entries(categories)) {
      if (keywords.some(kw => keyword.includes(kw))) {
        matchedCategory = cat
        break
      }
    }

    if (matchedCategory) {
      router.push(`/${matchedCategory}?q=${encodeURIComponent(trimmedQuery)}`)
    } else {
      // Redirect to a "search result not found" page
      router.push(`/search-not-found?q=${encodeURIComponent(trimmedQuery)}`)
    }

    handleSearch()
    setQuery("")
  }

  return (
    <div id="popup-search-box" className={isSearch ? "active" : ""}>
      <div className="box-inner-wrap d-flex align-items-center">
        <form id="form" onSubmit={handleSubmit} role="search">
          <input
            id="popup-search"
            type="text"
            name="s"
            placeholder="Type keywords here..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button id="popup-search-button" aria-label="submit" type="submit" name="submit">
            <i className="las la-search" />
          </button>
        </form>
        <div className="search-close" onClick={handleSearch}>
          <i className="las la-times" />
        </div>
      </div>
    </div>
  )
}

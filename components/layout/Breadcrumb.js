import Link from "next/link"
import { useEffect, useState } from "react"

export default function Breadcrumb({ category, breadcrumbTitle }) {
  const [displayTitle, setDisplayTitle] = useState(breadcrumbTitle)

  useEffect(() => {
    const updateTitle = () => {
      const width = window.innerWidth
      if (width <= 768) {
        // Mobile: first 3 words only
        const shortTitle = breadcrumbTitle.split(" ").slice(0, 3).join(" ")
        setDisplayTitle(shortTitle)
      } else {
        // Desktop: full title
        setDisplayTitle(breadcrumbTitle)
      }
    }

    updateTitle()
    window.addEventListener("resize", updateTitle)
    return () => window.removeEventListener("resize", updateTitle)
  }, [breadcrumbTitle])

  return (
    <section className="page-header">
      <div className="container">
        <div className="page-header-content">
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            {category && (
              <li>
                <Link href={`/${category.toLowerCase()}`}>
                  {category.charAt(0).toUpperCase() + category.slice(1).toLowerCase()}
                </Link>
              </li>
            )}
            <li className="active">
              <span>{displayTitle}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

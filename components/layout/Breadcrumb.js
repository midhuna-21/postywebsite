import Link from "next/link"

export default function Breadcrumb({ category, breadcrumbTitle }) {
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
              <span>
                {breadcrumbTitle.charAt(0).toUpperCase() +
                  breadcrumbTitle.slice(1).toLowerCase()}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

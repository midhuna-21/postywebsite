'use client'
import Link from 'next/link'
import Image from "next/image"

export default function Categories({ data }) {
  return (
    <section className="categories-section padding">
      <div className="container">
        <div className="row">
          {data.map((item, index) => (
            <div key={index} className="col-lg-3 col-md-6">
              <div className="categorie-item">
                <div className="categorie-thumb">
                  <Link title={item.category} href={`/${item.category}`}>
                    <Image
                      title={item.title}
                      src={item.image}
                      alt={item.title}
                      width={500}
                      height={300}
                      
                      style={{ objectFit: "cover", borderRadius: "8px" }}
                    />
                  </Link>
                </div>
                <div className="categorie-content">
                  <Link
                    title={item.category}
                    href={`/${item.category}`}
                    className="default-btn categorie-btn"
                  >
                    {item.category}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

'use client'
import Link from 'next/link'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import Image from "next/image";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 3,
  spaceBetween: 90,
  slidesPerGroup: 1,
  loop: true,
  autoplay: true,
  speed: 400,
  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 25,
    },
    767: {
      slidesPerView: 2,
      slidesPerGroup: 1,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3,
      slidesPerGroup: 1,
    },
    1200: {
      slidesPerView: 3,
      slidesPerGroup: 1,
    },
  },
}

export default function Trending1({ data }) {
  return (
    <section className="trending-area">
      <div className="container">
        <div className="trending-carousel swiper">
          <Swiper {...swiperOptions} className="swiper-wrapper swiper-container">
            {data?.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="trending-item">
                  <div className="trending-thumb">
                    <Link
                      title={item.slug}
                      href={`/${item.category}/${item.slug}`}
                      className="text-decoration-none"
                      style={{ color: 'inherit', display: 'block' }}
                    >
                      <Image
                        title={item.title}
                        src={item.image}
                        alt="trend"
                        width={80}
                        height={80}
                      />
                    </Link>
                  </div>
                  <div className="post-content trending-content">
                    <span>{item.category}</span>
                    <p className="title trending-title">
                      <Link
                        title={item.slug}
                        href={`/${item.category}/${item.slug}`}
                        className="text-decoration-none"
                        style={{ color: 'inherit', display: 'block' }}
                      >
                        {item.title}
                      </Link>
                    </p>
                    <div className="post-list">
                      <p style={{ margin: 0, fontSize: "0.55rem", color: "#333" }}>
                        by <Link href="#" title={item.author} style={{ fontSize: "0.65rem", color: "inherit", textDecoration: "none" }}>
                          {item.author}
                        </Link>, {item.date}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}

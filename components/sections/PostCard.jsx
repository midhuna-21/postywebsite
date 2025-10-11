import Link from "next/link";
import Image from "next/image";

export default function PostCard({ data }) {
  return (
    <div className="post-card news-post">
      <div className="post-thumb">
        <Link title={data.slug}
          href={`/${data.category}/${data.slug}`}>
          <Image
            title={data.title}
            src={data.image}
            alt={data.title}
            width={200}
            height={120}
            priority
          />
        </Link>
      </div>
      <div className="post-content">
        <h3 className="title">
          <Link title={data.slug}
            href={`/${data.category}/${data.slug}`}>{data.title}</Link>
        </h3>
        <ul className="post-list" style={{ listStyle: "none", padding: 0, margin: 0 }}>
          <li style={{ fontSize: "0.65rem", color: "#333" }}>
            by{" "}
            {data.author}
            , <span style={{ fontSize: "0.65rem", color: "#666" }}>{data.date}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

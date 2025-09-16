import Link from "next/link";

export default function PostCard({ data }) {
  console.log('data',data)
  return (
    <div className="post-card news-post">
      <div className="post-thumb">
        <Link title={data.slug}
												href={`/${data.category}/${data.slug}`}>
          <img src={data.image} alt="post" />
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

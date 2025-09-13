import Link from "next/link";

export default function PostCard({ data, imgSrc }) {
  return (
    <div className="post-card news-post">
      <div className="post-thumb">
        <Link title={data.slug}
												href={`/${data.category}/${data.slug}`}>
          <img src={imgSrc} alt="post" />
        </Link>
      </div>
      <div className="post-content">
        <h3 className="title">
          <Link title={data.slug}
												href={`/${data.category}/${data.slug}`}>{post.title}</Link>
        </h3>
        <ul className="post-list">
          <li className="author">
            by{" "}
            <span>
              <Link href="#">David Bin</Link>
            </span>
          </li>
          <li className="date">{data.date}</li>
          {data.comments && (
            <li>
              <i className="las la-comments" /> {data.comments}
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}

import PostCard from "./PostCard";

export default function RecentPosts({ data }) {
  return (
    <section className="recent-post-area padding">
      <div className="container">
        <div className="row">
          {/* Left Column */}
          <div className="col-lg-6">
            <div className="news-post-wrap">
              {data.slice(0, 5).map((post, index) => (
                <PostCard
                  key={index}
                  post={post}
                  imgSrc={`/assets/img/post/news-post-${index + 1}.jpg`}
                />
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="col-lg-6">
            <div className="news-post-wrap">
              {data.slice(5, 10).map((post, index) => (
                <PostCard
                  key={index + 5}
                  post={post}
                  imgSrc={`/assets/img/post/news-post-${index + 6}.jpg`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

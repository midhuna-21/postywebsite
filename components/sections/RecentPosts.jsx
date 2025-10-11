import PostCard from "./PostCard";

export default function RecentPosts({ data }) {

  return (
    <section className="recent-post-area padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="news-post-wrap">
              {data.slice(0, 5).map((post, index) => (
                <PostCard
                  key={index}
                  data={post}
                />
              ))}
            </div>
          </div>
          <div className="col-lg-6">
            <div className="news-post-wrap">
              {data.slice(5, 10).map((post, index) => (
                <PostCard
                  key={index + 5}
                  data={post}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

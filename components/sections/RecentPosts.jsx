import { useState } from "react";
import PostCard from "./PostCard";

export default function RecentPosts({ data }) {
  // Number of posts to load at once
  const POSTS_PER_PAGE = 10;

  // Track how many posts are visible
  const [visibleCount, setVisibleCount] = useState(POSTS_PER_PAGE);

  // Handle Load More button click
  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + POSTS_PER_PAGE);
  };

  // Slice only the visible posts
  const visiblePosts = data.slice(0, visibleCount);

  // Check if more posts are available
  const hasMore = visibleCount < data.length;

  return (
    <section className="recent-post-area padding">
      <div className="container">
        <div className="row">
          {/* Split posts into two columns */}
          <div className="col-lg-6">
            <div className="news-post-wrap">
              {visiblePosts
                .slice(0, Math.ceil(visiblePosts.length / 2))
                .map((post, index) => (
                  <PostCard key={index} data={post} />
                ))}
            </div>
          </div>
          <div className="col-lg-6">
            <div className="news-post-wrap">
              {visiblePosts
                .slice(Math.ceil(visiblePosts.length / 2))
                .map((post, index) => (
                  <PostCard key={index + 1000} data={post} />
                ))}
            </div>
          </div>
        </div>

        {/* Load More Button */}
        {hasMore && (
          <div className="text-center mt-4">
            <button
              onClick={handleLoadMore}
              className="btn btn-primary rounded-pill px-4 py-2"
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

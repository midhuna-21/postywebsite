"use client"
import { useState } from "react";
import PostCard from "./PostCard";

export default function RecentPosts({ data }) {
  const POSTS_PER_PAGE = 10;

  const [visibleCount, setVisibleCount] = useState(POSTS_PER_PAGE);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + POSTS_PER_PAGE);
  };

  // const visiblePosts = data.slice(0, visibleCount);

   const sortedPosts = [...data].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  const visiblePosts = sortedPosts.slice(0, visibleCount);
  // const hasMore = visibleCount < sortedPosts.length;
  const hasMore = visibleCount < data.length;

  return (
    <section className="recent-post-area padding">
      <div className="container">
        <div className="row">
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

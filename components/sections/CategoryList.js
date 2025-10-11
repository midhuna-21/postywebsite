"use client";
import Link from "next/link";

const categories = [
  { name: "Business", slug: "/business" },
  { name: "Investing", slug: "/investing" },
  { name: "Enterprise", slug: "/enterprise" },
  { name: "Innovation", slug: "/innovation" },
  { name: "U.S", slug: "/us" },
];

export default function CategoriesList() {
  return (
    <div className="categorie-wrap">
      <div className="section-heading mb-30">
        <h3 className="section-title title-border">
          <span>Categories</span>
        </h3>
      </div>
      <ul className="categorie-list">
        {categories.map((cat, index) => (
          <li key={index}>
            <Link href={cat.slug} title={cat.name}>
              <h4 className="list-title">{cat.name}</h4>
              <i className="las la-arrow-right" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

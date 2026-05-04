import { fetchBooksByCategory } from "@/data/FetchBooksData";
import Link from "next/link";
import React from "react";

const LeftCategorySideBar = async () => {
  const category = await fetchBooksByCategory();
  return (
    <div>
      <div className="mt-10">
        {category.map((c) => (
          <Link key={c.id} href={`?category=${c.category.toLowerCase()}`}>
            <button className="w-full mb-3 text-white bg-accent-soft hover:bg-accent-soft-hover cursor-pointer rounded-2xl py-1">
              {c.category}
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LeftCategorySideBar;

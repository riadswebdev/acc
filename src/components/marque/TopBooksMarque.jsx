import { fetchAllBooks } from "@/data/FetchBooksData";
import { Chip } from "@heroui/react";
import React from "react";
import Marquee from "react-fast-marquee";

const TopBooksMarque = async () => {
  const newBooks = await fetchAllBooks();

  return (
    <div className="mx-5 xl:mx-0 ">
      <div className="flex bg-black/10 backdrop-blur-2xl rounded-xl items-center gap-2 my-15 w-full max-w-300 mx-auto">
        <Chip color="accent" className="bg-transparent text-lg">
          New Arrivals
        </Chip>
        <Marquee className="my-3" pauseOnHover>
          <p className="flex items-center gap-20 ">
            {newBooks.slice(0, 4).map((b) => (
              <span
                key={b.id}
                className="text-gray-300 flex items-center gap-5 ml-5"
              >
                <Chip>{b.category}</Chip> {b?.title}
              </span>
            ))}
          </p>
        </Marquee>
      </div>
    </div>
  );
};

export default TopBooksMarque;

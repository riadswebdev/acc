import { Chip } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

const BooksCard = ({ b }) => {
  return (
    <div className=" gap-5 border border-white/5 p-6 rounded-2xl">
      <div className="relative aspect-square mb-6">
        <Image
          src={b?.image_url}
          fill
          alt={b?.title || "book"}
          unoptimized
          className="rounded-2xl mx-auto  object-contain hover:scale-105 duration-300"
        />
      </div>
      <div className="text-gray-200 flex flex-col justify-center text-start space-y-2">
        <p className="text-2xl">{b?.title}</p>
        <p className="text-lg">
          Author : <span className="text-base">{b?.author}</span>
        </p>

        <div className="flex flex-wrap items-center gap-5">
          <Chip>{b?.category}</Chip>
          <Link
            href={`/all-books/${b?.id}`}
            className="bg-linear-to-r from-blue-300 to-blue-600 bg-clip-text text-transparent font-semibold text-sm"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};
export default BooksCard;

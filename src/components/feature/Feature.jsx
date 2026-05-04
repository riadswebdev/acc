"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "@gravity-ui/icons";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import BooksCard from "../booksCard/BooksCard";
import RoundedLoading from "../Loading/RoundedLoading";

const FeaturePage = () => {
  const [topBooks, setTopBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("/api/books")
      .then((res) => res.json())
      .then((allBooks) => {
        setTopBooks(allBooks.slice(0, 8));
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });
  }, []);

  if (loading)
    return (
      <RoundedLoading/>
    );

  return (
    <div className="mb-10 mx-5 xl:mx-0 relative">
      <style>{`
        .swiper-pagination {
          margin-bottom: 20px !important;
        }
        .swiper-pagination-bullet {
          background: #3b82f6 !important;
        }
        .swiper-pagination-bullet-active {
          background: #1e40af !important;
        }
      `}</style>
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        modules={[Navigation, Pagination]}
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
        pagination={{ clickable: true }}
      >
        {topBooks.map((b) => (
          <SwiperSlide key={b.id}>
            <BooksCard b={b} />
          </SwiperSlide>
        ))}
      </Swiper>

      <button className="swiper-button-prev-custom absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full transition-all">
        <ChevronLeft width={24} height={24} />
      </button>
      <button className="swiper-button-next-custom absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full transition-all">
        <ChevronRight width={24} height={24} />
      </button>
    </div>
  );
};

export default FeaturePage;

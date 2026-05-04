import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const HeroSection = () => {
  return (
    <div
      className="lg:flex items-center mb-25 
bg-[url('https://i.ibb.co/Wp7QqyxF/coolbackgrounds-particles-compute.png')] 
bg-cover bg-center bg-no-repeat
justify-between mx-5 xl:mx-0 p-10 rounded-4xl"
    >
      <div className="drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
        <Image
          src="https://i.ibb.co.com/HLvHgLyY/Book.png"
          alt=""
          width={500}
          height={50}
          unoptimized
          className="mx-auto"
        />
      </div>
      <div className="text-center mt-10 lg:mr-15">
        <h2 className="text-5xl font-semibold mb-10 bg-linear-to-r from-gray-400 to-blue-400 bg-clip-text text-transparent">
          Find Your Next Read
        </h2>
        <Link href="/all-books">
          <Button
            className="bg-linear-to-r from-blue-500 to-blue-600
hover:scale-105 transition
shadow-lg shadow-blue-500/20"
          >
            Browse Now{" "}
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;

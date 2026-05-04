import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";

const Footer = () => {
  return (
    <div className="bg-linear-to-r from-gray-900 to-neutral-950 border-t pt-10 border-white/10 backdrop-blur-lg pb-10 px-5 xl:px-0">
      <footer className="   grid space-y-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 w-full max-w-300 mx-auto">
        <aside className="lg:col-span-2">
          <Image
            src="https://i.ibb.co.com/ds5NmBgD/Designer-3-removebg-preview.png"
            width={150}
            height={30}
            alt="footer Image"
            className=" mb-5"
          />
          <p className="text-gray-400 text-[12px] md:text-sm">
            A modern online library where users can explore, <br /> borrow, and
            manage books easily.
          </p>
        </aside>

        <ul>
          <h4 className="text-gray-300 font-semibold mb-3">Quick Links</h4>
          <li>
            <Link className="text-gray-400 hover:underline" href="/profile">
              Profile
            </Link>
          </li>
          <li>
            <Link className="text-gray-400 hover:underline" href="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="text-gray-400 hover:underline" href="/all-books">
              All Books
            </Link>
          </li>
          <li>
            <Link className="text-gray-400 hover:underline" href="#">
              About
            </Link>
          </li>
        </ul>

        <ul className="mb-4">
          <h4 className="text-gray-300 font-semibold mb-3">Legal</h4>
          <li>
            <Link className="text-gray-400 hover:underline" href="#">
              Terms
            </Link>
          </li>
          <li>
            <Link className="text-gray-400 hover:underline" href="#">
              Privacy
            </Link>
          </li>
        </ul>

        <ul className="mb-4">
          <h4 className="text-gray-300 font-semibold mb-3">Contact Us</h4>
          <li className="text-gray-400 text-sm">Email: info@booklibrary.com</li>
          <li className="text-gray-400 text-sm">Phone: +880 123 456 789</li>
        </ul>

        <div className="flex gap-3">
          <Link href="#">
            <FaLinkedinIn className="text-white text-xl" />
          </Link>
          <Link href="#">
            <IoLogoTwitter className="text-white text-xl" />
          </Link>
          <Link href="#">
            <FaGithub className="text-white text-xl" />
          </Link>
        </div>
      </footer>

      <p className="text-center mt-6 text-gray-400 text-sm">
        © 2026 Book Library | All rights reserved
      </p>
    </div>
  );
};

export default Footer;

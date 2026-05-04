import Image from "next/image";
import Link from "next/link";

const AppPromoSection = () => {
  return (
    <div className="flex flex-wrap justify-center items-center text-gray-200 text-center">
      <div className="">
        <Image
          src="https://i.ibb.co.com/tTm5PVWy/Project-image.png"
          width={400}
          height={150}
          unoptimized
          alt="Project ScreenShot Mockup"
        />
      </div>
      <div className="">
        <h2 className="text-2xl sm:text-3xl md:text-4xl leading-14 lg:text-5xl mb-3 font-bold bg-linear-to-r from-gray-400 to-gray-200 bg-clip-text text-transparent">
          The best reading and <br /> listening experience
        </h2>
        <p>
          Exploring Our Online Borrowing Books Platform is more inspiring <br />{" "}
          than ever before.
        </p>
        <Link
          href="/all-books"
          className="flex items-center font-bold bg-blue-400 w-fit px-4 rounded-sm hover:bg-transparent hover:border transition-colors duration-300 mx-auto mt-5"
        >
          Try
          <Image
            src="https://i.ibb.co.com/C3r6qpV3/Designer-3-removebg-preview.png"
            width={50}
            height={50}
            alt="Books"
          ></Image>
        </Link>
      </div>
      <div className="">
        <Image
          src="https://i.ibb.co.com/tTm5PVWy/Project-image.png"
          width={400}
          height={100}
          unoptimized
          alt="Project ScreenShot Mockup"
        />
      </div>
    </div>
  );
};

export default AppPromoSection;

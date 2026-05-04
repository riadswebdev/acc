"use client";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const BorrowButton = () => {
  const router = useRouter();
  const { data: session } = authClient.useSession();
  const handleBorrowButton = () => {
    if (session) {
      toast.success("borrow");
    } else {
      router.push("/signin");
    }
  };

  return (
    <>
      <button
        onClick={handleBorrowButton}
        className="mt-10 bg-linear-to-r from-blue-300 to-blue-800 cursor-pointer p-3 rounded-md text-gray-200 font-semibold"
      >
        Borrow This Book
      </button>
    </>
  );
};

export default BorrowButton;

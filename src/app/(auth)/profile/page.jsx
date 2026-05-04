"use client";

import { Avatar, Card } from "@heroui/react";
import Link from "next/link";
import { useEffect } from "react";
import { PencilToSquare } from "@gravity-ui/icons";
import { AiOutlineFileUnknown } from "react-icons/ai";
import { authClient } from "@/lib/auth-client";
import RoundedLoading from "@/components/Loading/RoundedLoading";

const ProfilePage = () => {
  useEffect(() => {
    document.title = "User Profile | Book Borrowing";
  }, []);

  const { data: session, isPending } = authClient.useSession();

  return (
    <div className="min-h-[60vh]">
      <div className="flex justify-center my-10 items-center text-center mx-5 sm:mx-0">
        <Card className="relative bg-transparent p-0 border border-gray-800 w-96 ">
          <div className="relative aspect-video h-30 w-full">
            <Avatar className="absolute flex items-center justify-center right-[40%] -bottom-15  mx-auto w-20 h-20 my-5">
              {isPending ?
                <RoundedLoading />
              : <>
                  <Avatar.Image
                    className="object-cover"
                    alt={session?.user?.name || "Guest User"}
                    src={
                      isPending ?
                        <div className="min-h-[60vh] flex items-center justify-center">
                          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
                        </div>
                      : session?.user?.image || "default"
                    }
                  />

                  <Avatar.Fallback>
                    {session?.user?.name?.charAt(0) || (
                      <p className="flex items-center justify-center flex-col gap-1">
                        <AiOutlineFileUnknown />
                        Unknown
                      </p>
                    )}
                  </Avatar.Fallback>
                </>
              }
            </Avatar>
          </div>
          <div className="text-gray-400 space-y-2 mb-5 mt-10">
            <h3>{session?.user?.name || "Guest User"}</h3>
            <h3>{session?.user?.email || "No email provided"}</h3>

            <Link
              className="flex justify-center items-center gap-2"
              href="/updateProfile"
            >
              <PencilToSquare /> Edit
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ProfilePage;

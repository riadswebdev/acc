"use client";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaCircleUser } from "react-icons/fa6";
import toast from "react-hot-toast";
import { isValidImageUrl } from "@/utils/validation";

import {
  Button,
  FieldError,
  Form,
  Input,
  Label,
  Spinner,
  TextField,
} from "@heroui/react";

const UpdateProfile = () => {
  useEffect(() => {
    document.title = "Update Profile | Book Borrowing";
  }, []);

  const [isLoading, setLoading] = useState(false);

  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const formData = Object.fromEntries(form.entries());

    if (!isValidImageUrl(formData.image)) {
      toast.error("Please enter a valid image URL (jpg, jpeg, png, webp, gif)");
      return;
    }

    setLoading(true);
    try {
      const { error } = await authClient.updateUser({
        image: formData.image,
        name: formData.name,
      });

      if (error) {
        toast.error(error.message || "Failed to update profile");
      } else {
        toast.success("Profile updated successfully");
        router.push("/profile");
      }
    } catch (err) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto flex rounded-md mb-20 w-full max-w-md flex-col items-center mt-10 justify-center gap-6 px-4 bg-black/35 text-white">
      <h4 className="mt-10 font-bold text-xl sm:text-2xl ">
        <FaCircleUser className="mx-auto mb-2" />
        Update Profile
      </h4>

      <Form onSubmit={onSubmit} className="flex w-96 flex-col  gap-4">
        <TextField isRequired name="name">
          <Label className="text-white">Full Name</Label>
          <Input
            className="bg-transparent border border-gray-700 text-gray-400"
            placeholder="Enter your full name"
          />
          <FieldError />
        </TextField>

        <TextField
          isRequired
          name="image"
          validate={(value) => {
            if (!isValidImageUrl(value)) {
              return "Please enter a valid image URL (jpg, jpeg, png, webp, gif)";
            }
            return null;
          }}
        >
          <Label className="text-white">Photo Url</Label>
          <Input
            className="bg-transparent border border-gray-700 text-gray-400"
            placeholder="Enter a Image url"
          />
          <FieldError />
        </TextField>

        <div className="">
          <Button isDisabled={isLoading} className="w-full mb-10" type="submit">
            {isLoading ?
              <span className="flex items-center gap-2 justify-center">
                Updating <Spinner color="current" size="sm" />
              </span>
            : "Update"}
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default UpdateProfile;

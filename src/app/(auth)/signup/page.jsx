"use client";

import { useEffect, useState } from "react";
import { Eye, EyeSlash } from "@gravity-ui/icons";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { isValidImageUrl } from "@/utils/validation";
import {
  Button,
  FieldError,
  Form,
  Input,
  InputGroup,
  Label,
  Spinner,
  TextField,
} from "@heroui/react";

const SignUpPage = () => {
  useEffect(() => {
    document.title = "Sign Up | Book Borrowing";
  }, []);

  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);
  const [signUpError, setSignUpError] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const form = new FormData(e.currentTarget);
    const formData = Object.fromEntries(form.entries());

    try {
      const { error } = await authClient.signUp.email({
        email: formData.email,
        password: formData.password,
        image: formData.image,
        name: formData.name,
      });

      if (error) {
        setSignUpError(error.message);
        toast.error(error.message);
      } else {
        setSignUpError("");
        toast.success("Successfully Account Created");
        router.push("/signin");
      }
    } catch (e) {
      setSignUpError("Something went wrong. Please try again.");
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    await authClient.signIn.social({
      provider: "google",
    });
  };

  return (
    <div className="mx-5 sm:mx-0">
      <div className="mx-auto mt-10 flex rounded-md mb-20 w-full max-w-md flex-col items-center justify-center gap-3 px-4   bg-black/35 text-white">
        <h4 className="mt-5 font-bold text-xl sm:text-2xl">Sign Up </h4>
        <p className="text-sm text-red-500">{signUpError}</p>
        <Form
          className="flex w-full px-2 sm:px-5 flex-col  gap-4"
          onSubmit={onSubmit}
        >
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

          <TextField
            isRequired
            name="email"
            type="email"
            validate={(value) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return "Please enter a valid email address";
              }

              return null;
            }}
          >
            <Label className="text-white">Email</Label>
            <Input
              className="bg-transparent border border-gray-700 text-gray-300"
              placeholder="Enter your email"
            />
            <FieldError />
          </TextField>

          <TextField
            name="password"
            isRequired
            minLength={8}
            type="password"
            validate={(value) => {
              if (value.length < 8) {
                return "Password must be at least 8 characters";
              }
              if (!/[A-Z]/.test(value)) {
                return "Password must contain at least one uppercase letter";
              }
              if (!/[0-9]/.test(value)) {
                return "Password must contain at least one number";
              }

              return null;
            }}
          >
            <Label className="text-white">Password</Label>
            <InputGroup className="bg-transparent border border-gray-700 text-gray-400 rounded-2xl overflow-hidden">
              <InputGroup.Input
                name="password"
                placeholder="Enter Your Password"
                type={isVisible ? "text" : "password"}
              />
              <InputGroup.Suffix className="pr-0">
                <Button
                  isIconOnly
                  aria-label={isVisible ? "Hide password" : "Show password"}
                  size="sm"
                  variant="ghost"
                  onPress={() => setIsVisible(!isVisible)}
                >
                  {isVisible ?
                    <Eye className="size-4 text-gray-500" />
                  : <EyeSlash className="size-4 text-gray-500" />}
                </Button>
              </InputGroup.Suffix>
            </InputGroup>
          </TextField>

          <div className="mt-5">
            <Button disabled={loading} className="w-full mb-2" type="submit">
              {loading ?
                <span className="flex items-center gap-2 justify-center">
                  Creating <Spinner color="current" size="sm" />
                </span>
              : "Sign Up"}
            </Button>
            <p className="text-center text-sm">
              Already have an account?{" "}
              <Link
                href="/signin"
                className="text-blue-800 font-semibold hover:underline"
              >
                Sign In
              </Link>
            </p>
          </div>
        </Form>
        <div className="">
          <p className="text-center font-semibold text-lg mb-3 ">
            Or Sign in with
          </p>
          <Button
            onClick={handleGoogleSignIn}
            className="flex justify-center mx-auto mb-6"
            variant="tertiary"
          >
            <Icon icon="devicon:google" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;

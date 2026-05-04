"use client";

import { authClient } from "@/lib/auth-client";
import { useEffect, useState } from "react";
import { Eye, EyeSlash } from "@gravity-ui/icons";
import { Icon } from "@iconify/react";
import Link from "next/link";
import toast from "react-hot-toast";
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

const SignInPage = () => {

  
  useEffect(() => {
    document.title = "Sign In | Book Borrowing";
  }, []);

  const [isVisible, setIsVisible] = useState(false);
  const [signInError, setSignInError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);
    const form = Object.fromEntries(formData.entries());

    try {
      const { error } = await authClient.signIn.email({
        email: form.email,
        password: form.password,
        callbackURL: "/",
      });

      if (error) {
        setSignInError(error.message);
        toast.error(error.message);
      } else {
        setSignInError("");
        toast("Welcome Back");
      }
    } catch (e) {
      setSignInError("Something went wrong. Please try again.");
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    await authClient.signIn.social({
      provider: "google",
    });
  };

  return (
    <div className="mx-5 md:mx-0">
      <div className="mx-auto flex rounded-md mb-20 w-full max-w-md flex-col items-center mt-10 justify-center gap-3 px-4 bg-black/35 backdrop-blur-2xl text-white ">
        <h4 className="mt-10 font-bold text-xl sm:text-2xl">Sign In </h4>

        <p className="text-sm text-red-500">{signInError}</p>
        <Form
          className="flex w-full px-2 sm:px-5 flex-col  gap-4"
          onSubmit={onSubmit}
        >
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
              className="bg-transparent border border-gray-700 text-gray-400"
              placeholder="Enter your email"
            />
            <FieldError />
          </TextField>

          <TextField
            isRequired
            minLength={8}
            type="password"
            validate={(value) => {
              if (value.length < 8) {
                return "Password must be at least 8 characters";
              }
              return null;
            }}
          >
            <Label className="text-white">Password</Label>
            <InputGroup className="bg-transparent border border-gray-700 text-gray-400 rounded-2xl overflow-hidden">
              <InputGroup.Input
                name="password"
                className="bg-transparent"
                placeholder="Enter Your Password"
                type={isVisible ? "text" : "password"}
              />
              <InputGroup.Suffix className="pr-0 bg-transparent">
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

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              name="rememberMe"
              id="remember"
              defaultChecked
              className="w-4 h-4 rounded border-gray-300 focus:ring-blue-500"
            />
            <label htmlFor="remember" className="text-sm cursor-pointer">
              Remember Me
            </label>
          </div>

          <div className="">
            <Button
              isDisabled={isLoading}
              className="w-full mb-2"
              type="submit"
            >
              {isLoading ?
                <span className="flex items-center gap-2 justify-center">
                  Login <Spinner color="current" size="sm" />
                </span>
              : "Login"}
            </Button>
            <p className="text-center text-sm">
              Don`t have an account?{" "}
              <Link
                href="/signup"
                className="text-blue-500 font-semibold hover:underline"
              >
                Sign up
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

export default SignInPage;

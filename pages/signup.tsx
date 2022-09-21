import Link from "next/link";
import Image from "next/image";
import { NextPage } from "next";
import { Input, Button } from "@material-tailwind/react";
import React, { ChangeEvent, FormEvent, useState } from "react";
import PasswordIcon from "../components/dashboard/components/PasswordIcon";

const SignUp: NextPage = () => {
  const theme = { color: "white" };
  const [visiblePassword, setvisiblePassword] = useState(true);
  const [formData, updateFormData] = useState({
    username: "",
    password: "",
    fullname: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    updateFormData({ ...formData, [e.target.name]: e.target.value.trim() });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center py-2">
      <form className="w-96 flex flex-col gap-8" onSubmit={handleSubmit}>
        <div className="w-full h-14 relative mb-5">
          <Image
            layout="fill"
            alt="W.O.V Logo"
            src="/img/wov.png"
            objectFit="contain"
          />
        </div>
        <Input
          style={theme}
          name="fullname"
          label="Full name"
          onChange={handleChange}
        />
        <Input
          style={theme}
          name="username"
          label="Username"
          onChange={handleChange}
        />
        <Input
          style={theme}
          label="Password"
          name="password"
          type={visiblePassword ? "text" : "password"}
          onChange={handleChange}
          icon={
            <PasswordIcon
              shown={visiblePassword}
              setShown={setvisiblePassword}
            />
          }
        />
        <Button type="submit" className="mt-4">
          Sign up
        </Button>
        <div className="flex justify-between">
          <span>Already have an account?</span>
          <Link href="/signin">
            <span className="text-blue-500 font-bold cursor-pointer">
              Sign In
            </span>
          </Link>
        </div>
      </form>
    </main>
  );
};

export default SignUp;

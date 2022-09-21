import Link from "next/link";
import Image from "next/image";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { Input } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import { ChangeEvent, FormEvent, useState } from "react";
import PasswordIcon from "../components/dashboard/components/PasswordIcon";

const SignIn: NextPage = () => {
  const router = useRouter();
  const theme = { color: "white" };
  const [visiblePassword, setvisiblePassword] = useState(true);
  const initialFormData = Object.freeze({ username: "", password: "" });
  const [formData, updateFormData] = useState(initialFormData);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    updateFormData({ ...formData, [e.target.name]: e.target.value.trim() });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push("/");
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
          Sign In
        </Button>
        <div className="flex justify-between">
          <span>Don't have an account?</span>
          <Link href="/signup">
            <span className="text-blue-500 font-bold cursor-pointer">
              Sign Up
            </span>
          </Link>
        </div>
      </form>
    </main>
  );
};

export default SignIn;

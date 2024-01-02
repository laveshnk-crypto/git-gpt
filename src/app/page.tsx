"use client"

import { useRouter } from "next/navigation";
import "./styles/globals.css";
import Link from "next/link";
import {signIn, useSession} from "next-auth/react"

export default function LoginPage() {

  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "authenticated") {
    router.replace("/home");
    return null; 
  }

  return (
    <div className="bg-gradient">
      <div className="flex items-center justify-center mt-auto">
        <h1 className="bg-text1 mt-60 scroll-animate">
          Welcome to GitGPT
        </h1>
      </div>
      <div className="flex items-center justify-center mt-10">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
        <button className="github-button mr-8 " onClick={() => signIn("github")}><i className="fa fa-github" style={{ fontSize: "24px" }}></i>&nbsp; Sign in with GitHub </button>
      </div>
      <div className=" flex items-center justify-center mt-10">
        <Link href = "/home"><button className="cool-button mr-8">Log in</button></Link>
        <Link href = "/home"><button className="cool-button mr-8">Sign up</button></Link>
      </div>
    </div>
  );
}



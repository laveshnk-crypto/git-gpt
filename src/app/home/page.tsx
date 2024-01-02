"use client"

import { useState } from "react";
import "../styles/globals.css";
import ChatComponent from "./components/chatComponent";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [showSignOutAlert, setShowSignOutAlert] = useState(false);

  const handleSignOut = async () => {
    await signOut();


    setTimeout(() => {
      setShowSignOutAlert(true);
    }), 30000;


  };

  if (status === "unauthenticated") {
    router.push("/");
  }

  return (    
    <div>
      <div className="bg-gradient relative">
        <div className="absolute top-4 right-4 z-50">
          <div className="cool-button-2" onClick={handleSignOut}>Sign out</div>
        </div>
        <div className="flex items-center justify-center">
          <h1 className="bg-text1 mt-16 scroll-animate">GitGPT</h1>
        </div>
        <div className="flex items-center justify-center">
          <div className="bg-slate-950 p-3 h-[800px] w-[800px] overflow-y:auto rounded-md text-white mt-10">
            <ChatComponent />
          </div>
        </div>
      </div>

      {showSignOutAlert && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-70">
          <div className="bg-white p-8 rounded-md">
            <p className="text-xl font-bold mb-4">Successfully Signed Out</p>
            <p>You will be redirected to the home screen shortly...</p>
          </div>
        </div>
      )}
    </div>
  );
}

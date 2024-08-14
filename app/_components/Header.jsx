"use client";
import { useRouter } from "next/navigation";
import React from "react";

function Header() {
  const router = useRouter();
  const handleGetStarted = () => {
    router.push("/dashboard");
  };

  return (
    <div className="p-8 flex justify-between items-center w-full bg-white fixed z-10">
      <h1 className="text-xl sm:text-2xl font-semibold text-primary uppercase">
        Attendance Monitoring
      </h1>
      <button
        onClick={handleGetStarted}
        className="px-3 py-1 sm:px-4 sm:py-2 bg-primary text-white rounded-sm"
      >
        Get Started
      </button>
    </div>
  );
}

export default Header;

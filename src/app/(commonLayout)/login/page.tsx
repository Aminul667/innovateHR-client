"use client";

import Login from "@/app/_components/Login/Login";
import React from "react";

const page = () => {
  return (
    <>
      <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
        <div className="w-full max-w-sm">
          <Login />
        </div>
      </div>
    </>
  );
};

export default page;

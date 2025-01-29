import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="h-screen flex flex-col items-center ">
      <div className="bg-lime-200 text-xl font-semibold text-center w-full">
        <h2>This is home page</h2>
      </div>
      <div className="mt-5">
        <Link
          href="/admin-dashboard"
          className="bg-colorButtonSecondary px-4 py-3 rounded-md"
        >
          Dashboard
        </Link>
      </div>
    </div>
  );
};

export default page;

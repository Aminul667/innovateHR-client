"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { BadgeHelp, BellDot } from "lucide-react";
import React from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

const DashboardNavbar = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };

  return (
    <nav className="h-20 flex items-center justify-between px-5">
      <div className="flex items-center gap-16">
        <h2 className="text-4xl font-semibold">InnovateHR</h2>
        {/* form */}
        <form
          className="font-inter my-8 w-[500px]"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="relative flex items-center w-full">
            <input
              type="text"
              {...register("employee", {
                required: "Please enter your employee name",
              })}
              placeholder="Search for employees"
              className="h-12 w-full py-4 pl-4 pr-44 rounded-3xl border border-black"
            />
            <button
              type="submit"
              className="absolute right-0 bg-colorButtonSecondary h-10 rounded-3xl px-7 py-4 flex items-center mr-1 font-semibold hover:bg-gray-500"
            >
              Search
            </button>
          </div>
        </form>
      </div>
      <div className="flex items-center justify-center gap-4">
        <BadgeHelp size={42} color="#4B93E7" />
        <BellDot size={42} color="#4B93E7" />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Avatar className="cursor-pointer">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-36">
            <DropdownMenuGroup>
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Setting</DropdownMenuItem>
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};

export default DashboardNavbar;

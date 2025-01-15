"use client";

import IHForm from "@/app/_components/UI/Form/IHForm";
import IHInput from "@/app/_components/UI/Form/IHInput";
import { Button } from "@/components/ui/button";
import { loginSchema } from "@/schema/login.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";

const page = () => {
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };

  return (
    <div className="w-[600px] h-full m-auto flex items-center justify-center">
      <IHForm onSubmit={onSubmit} resolver={zodResolver(loginSchema)}>
        <IHInput name="email" label="Enter your email" type="text" />
        <IHInput name="password" label="Password" type="Enter Your Password" />
        <Button type="submit">Login</Button>
      </IHForm>
    </div>
  );
};

export default page;

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
    <div>
      <IHForm onSubmit={onSubmit} resolver={zodResolver(loginSchema)}>
        <IHInput name="Email" label="Enter your email" />
        <Button type="submit">Submit</Button>
      </IHForm>
    </div>
  );
};

export default page;

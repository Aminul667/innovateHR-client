/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";
import { IFormConfig, IFormProps } from "@/types";
import { FormProvider, useForm } from "react-hook-form";

const IHForm = ({
  children,
  onSubmit,
  defaultValues,
  resolver,
}: IFormProps) => {
  const formConfig: IFormConfig = {};

  if (!!defaultValues) {
    formConfig["defaultValues"] = defaultValues;
  }

  if (!!resolver) {
    formConfig["resolver"] = resolver;
  }

  const methods = useForm(formConfig);

  const submitHandler = methods.handleSubmit;

  return (
    <FormProvider {...methods}>
      <form onSubmit={submitHandler(onSubmit)}>{children}</form>
    </FormProvider>
  );
};

export default IHForm;

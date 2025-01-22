/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode } from "react";
import { DefaultValues, SubmitHandler } from "react-hook-form";
import { ZodType } from "zod";

export type TIHForm<T> = {
  children: ReactNode;
  schema: ZodType<T>;
  onSubmit: (data: T) => void;
  defaultValues?: DefaultValues<T>;
};

export interface IFormConfig {
  defaultValues?: Record<string, any>;
  resolver?: any;
}

export interface IFormProps extends IFormConfig {
  children: ReactNode;
  onSubmit: SubmitHandler<any>;
}

export type TOptions = {
  value: string;
  select: string;
};

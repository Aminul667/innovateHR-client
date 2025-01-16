/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import { FloatingInput, FloatingLabel } from "@/components/ui/FlotingInput";
import { useFormContext } from "react-hook-form";

const IHInput = ({
  name,
  label,
  type,
}: {
  name: string;
  label?: string;
  type: string;
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext<Record<string, any>>();

  return (
    <div>
      <div className="relative">
        <FloatingInput type={type} id={name} {...register(name)} />
        <FloatingLabel htmlFor={name}>{label}</FloatingLabel>
      </div>
      {errors[name] && (
        <p className="text-red-500">
          {(errors[name] as { message?: string })?.message}
        </p>
      )}
    </div>
  );
};

export default IHInput;

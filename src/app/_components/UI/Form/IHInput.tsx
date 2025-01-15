/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import { FloatingInput, FloatingLabel } from "@/components/ui/FlotingInput";
import { useFormContext } from "react-hook-form";

const IHInput = ({ name, label }: { name: string; label: string }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext<Record<string, any>>();

  return (
    <div className="relative">
      <FloatingInput
        id={name}
        {...register(name)}
        placeholder={`Enter ${label}`}
      />
      <FloatingLabel htmlFor={name}>{label}</FloatingLabel>
      {errors[name] && (
        <p style={{ color: "red" }}>
          {(errors[name] as { message?: string })?.message}
        </p>
      )}
    </div>
  );
};

export default IHInput;

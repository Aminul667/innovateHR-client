"use client";

import IHForm from "@/app/_components/UI/Form/IHForm";
import IHInput from "@/app/_components/UI/Form/IHInput";
import { Button } from "@/components/ui/button";
import {
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { addEmployeeSchema } from "@/schema/addEmployee.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, SubmitHandler } from "react-hook-form";

const Modal = () => {
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };

  return (
    <DialogContent className="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>Add Your Employee</DialogTitle>
        {/* <DialogDescription>
          Make changes to your profile here. Click save when you re done.
        </DialogDescription> */}
      </DialogHeader>

      {/* modal contents */}
      <IHForm onSubmit={onSubmit} resolver={zodResolver(addEmployeeSchema)}>
        <div className="flex flex-col gap-6">
          <IHInput name="email" label="Enter your email" type="text" />
          <IHInput name="role" label="Enter Employee's role" type="text" />
          <IHInput name="Set a password" label="Password" type="text" />
        </div>
        <DialogFooter>
          <Button type="submit">Send</Button>
        </DialogFooter>
      </IHForm>
    </DialogContent>
  );
};

export default Modal;

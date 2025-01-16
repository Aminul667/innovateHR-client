import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import React from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import IHForm from "../UI/Form/IHForm";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "@/schema/login.schema";
import IHInput from "../UI/Form/IHInput";

const Login = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) => {
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <IHForm onSubmit={onSubmit} resolver={zodResolver(loginSchema)}>
            <div className="flex flex-col gap-6">
              <IHInput name="email" label="Enter your email" type="text" />
              <IHInput name="password" label="Password" type="text" />

              <Button type="submit" className="w-full">
                Login
              </Button>
              <Button variant="outline" type="submit" className="w-full">
                Login with Google
              </Button>
            </div>
            <div className="mt-4 text-center text-sm">
              Don&apos;t have an account?{" "}
              <a href="#" className="underline underline-offset-4">
                Sign up
              </a>
            </div>
          </IHForm>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;

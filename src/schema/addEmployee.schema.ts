import { z } from "zod";

export const addEmployeeSchema = z.object({
  email: z.string().email("Invalid email address"),
  role: z.string().min(1, "Role is required"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

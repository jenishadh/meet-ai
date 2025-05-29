import { z } from "zod"

export const emailSchema = z
  .string()
  .email({ message: "Please enter a valid email." })
  .trim()

export const passwordSchema = z
  .string()
  .min(8, { message: "Must be at least 8 characters long" })
  .regex(/[a-zA-Z]/, { message: "Contain at least one letter." })
  .regex(/[0-9]/, { message: "Contain at least one number." })
  .regex(/[^a-zA-Z0-9]/, {
    message: "Contain at least one special character.",
  })
  .trim()

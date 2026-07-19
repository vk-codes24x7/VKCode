"use server";

import * as Sentry from "@sentry/nextjs";
import { headers } from "next/headers";
export async function submitForm(formData: FormData) {
  return Sentry.withServerActionInstrumentation(
    "submitForm", // Action name for Sentry
    {
      headers: await headers(), // Connect client and server traces
      formData, // Attach form data to events
      recordResponse: true, // Include response data
    },
    async () => {
      // Your server action logic
     
      return { success: true, data: "" };
    },
  );
}
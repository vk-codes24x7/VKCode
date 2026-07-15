import { inngest } from "./client";

export default inngest.createFunction(
  {id : "hello-world"},
  {event: "demo/event.sent"},
  async ({ event, step, runId }) => {
    return {
      message: `Hello ${event.name}!`,
    };
  }
);
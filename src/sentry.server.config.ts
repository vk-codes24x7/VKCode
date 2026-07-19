import * as Sentry from "@sentry/nextjs";
Sentry.init({
  dsn: "https://a8f8d3599e0f9029835f93219e2427d6@o4511764487274496.ingest.us.sentry.io/4511764490485760",
  // Capture 100% in dev, 10% in production
  // Adjust based on your traffic volume
  tracesSampleRate: process.env.NODE_ENV === "development" ? 1.0 : 0.1,
  // Enable logs to be sent to Sentry
  enableLogs: true,
});
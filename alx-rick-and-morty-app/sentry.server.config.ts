import * as sentry from "@sentry/react";

sentry.init({
    dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
    environment: process.env.NEXT_PUBLIC_SENTRY_ENVIRONMENT,
    tracesSampleRate: 1.0, // Adjust this value based on your needs
});
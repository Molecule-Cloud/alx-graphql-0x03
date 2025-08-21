import * as Sentry from "@sentry/react";

Sentry.init({
    dsn: 'process.env.NEXT_PUBLIC_SENTRY_DSN',
    environment: process.env.NEXT_PUBLIC_SENTRY_ENVIRONMENT,
    tracesSampleRate: 1.0, // Adjust this value based on your needs
    debug: false, // Set to true for debugging Sentry issues


    beforeSend(event) {
        if (event.exception) {
            // Optionally filter out specific errors
            const error = event.exception.values?.[0];
            if (error?.value?.includes('Non-Error promise rejection')) {
                return null; // Ignore this error
            }
        }
        return event
    }
})
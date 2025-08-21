import React from "react";
import * as Sentry from "@sentry/nextjs";

interface State {
    hasError: boolean;
}

interface ErrorBoundaryProps {
    children: React.ReactNode;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, State> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: Error): State {
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        // Log to console for development
        Sentry.captureException(error, { extra: { ...errorInfo } });

        // Report to Sentry
        Sentry.withScope((scope) => {
            scope.setTag("section", "error-boundary");
            scope.setContext("errorInfo", { ...errorInfo });
            Sentry.captureException(error);
        });
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="error-boundary">
                    <h2>Oops, something went wrong!</h2>
                    <p>We&apos;ve been notified of this error and are working to fix it.</p>
                    <button
                        onClick={() => {
                            this.setState({ hasError: false });
                            // Optional: Report recovery attempt
                            Sentry.addBreadcrumb({
                                message: "User attempted error recovery",
                                level: "info",
                            });
                        }}
                    >
                        Try again?
                    </button>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
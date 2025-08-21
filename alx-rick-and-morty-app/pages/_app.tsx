import "@/styles/globals.css";
// import { ApolloProvider } from "@apollo/client";
import type { AppProps } from "next/app";
// import client from "@/graphql/apolloClient";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary>
        <Component {...pageProps} />
    </ErrorBoundary>
  )
}
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ApolloProvider, NormalizedCacheObject } from "@apollo/client";
import { useApollo } from "../src/apollo/apollo";

function MyApp({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo({
    initialState: pageProps.initialApolloState as NormalizedCacheObject,
  });

  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;

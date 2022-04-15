import { useMemo } from "react";
import { ApolloClient } from "@apollo/client";
import type { NormalizedCacheObject } from "@apollo/client";
import { createApolloClient } from "./client";
import type { InitApolloProps } from "./client";
import dayjs from "dayjs";

let apolloClient: ApolloClient<NormalizedCacheObject>;

export function initializeApollo(args?: InitApolloProps) {
  const { initialState, ctx, lang, ipSource } = args ?? {};
  const _apolloClient =
    apolloClient ?? createApolloClient({ initialState, ctx, lang, ipSource });
  dayjs.locale(lang ?? "vi");
  // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // get hydrated here
  if (initialState) {
    const existingCache = _apolloClient.extract();
    _apolloClient.cache.restore({ ...existingCache, ...initialState });
  }
  // For SSG and SSR always create a new Apollo Client
  if (typeof window === "undefined") return _apolloClient;
  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient;

  return _apolloClient;
}

export function useApollo(args?: InitApolloProps) {
  const { initialState, lang, ipSource } = args ?? {};
  const store = useMemo(
    () => initializeApollo({ initialState, lang, ipSource }),
    [initialState, lang, ipSource]
  );
  return store;
}

import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject,
} from "@apollo/client";
import { GetServerSidePropsContext } from "next";
import type { LangSupport } from "../types";
import possibleTypes from "./possibleTypes.json";
import { getClientIp } from "request-ip";

const langs: LangSupport[] = ["en", "vi"];
export type InitApolloProps = {
  initialState?: NormalizedCacheObject;
  ctx?: GetServerSidePropsContext;
  lang?: LangSupport;
  ipSource?: string | null;
};
export function createApolloClient({
  initialState,
  lang,
  ipSource,
  ctx,
}: InitApolloProps) {
  const isServer = typeof window === "undefined";
  const headers = {};

  const apiURL = "http://localhost:3001/graphql";
  if (isServer) {
    Object.assign(headers, {
      "x-client-ip": ipSource ?? (ctx ? getClientIp(ctx.req) : undefined),
    });
  }

  const cache = new InMemoryCache({
    addTypename: true,
    possibleTypes: possibleTypes.possibleTypes,
    typePolicies: {
      MenuModel: {
        fields: {
          children: {
            merge(existing = [], incoming: unknown[]) {
              // return [...existing, ...incoming];
              return incoming;
            },
          },
        },
      },
    },
  });

  return new ApolloClient({
    link: new HttpLink({
      uri: apiURL,
      headers,
    }),
    assumeImmutableResults: true,
    // ssrForceFetchDelay: 100,
    name: "NEXT-BASIC",
    // ssrMode: isServer,
    cache: initialState ? cache.restore(initialState) : cache,
    // defaultOptions: {
    //   query: {
    //     fetchPolicy: "cache-first",
    //     errorPolicy: "ignore",
    //   },
    //   watchQuery: {
    //     fetchPolicy: "cache-first",
    //   },
    // },
  });
}

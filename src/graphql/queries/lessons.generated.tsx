import type * as Types from "../type.interface";

import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
const defaultOptions = {};
export type LessonsQueryVariables = Types.Exact<{ [key: string]: never }>;

export type LessonsQueryResponse = { __typename?: "Query" } & {
  lessons: Array<
    { __typename?: "lesson" } & Pick<
      Types.Lesson,
      "id" | "name" | "startDate" | "endDate"
    >
  >;
};

export const LessonsDocument = gql`
  query lessons {
    lessons {
      id
      name
      startDate
      endDate
    }
  }
`;
export function useLessonsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    LessonsQueryResponse,
    LessonsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<LessonsQueryResponse, LessonsQueryVariables>(
    LessonsDocument,
    options
  );
}
export function useLessonsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    LessonsQueryResponse,
    LessonsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<LessonsQueryResponse, LessonsQueryVariables>(
    LessonsDocument,
    options
  );
}
export type LessonsQueryHookResult = ReturnType<typeof useLessonsQuery>;
export type LessonsLazyQueryHookResult = ReturnType<typeof useLessonsLazyQuery>;
export type LessonsQueryResult = Apollo.QueryResult<
  LessonsQueryResponse,
  LessonsQueryVariables
>;

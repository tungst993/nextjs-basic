import type * as Types from "../type.interface";

import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
const defaultOptions = {};
export type LessonQueryVariables = Types.Exact<{
  id: Types.Scalars["String"];
}>;

export type LessonQueryResponse = { __typename?: "Query" } & {
  lesson: { __typename?: "lesson" } & Pick<
    Types.Lesson,
    "id" | "name" | "startDate" | "endDate"
  >;
};

export const LessonDocument = gql`
  query lesson($id: String!) {
    lesson(id: $id) {
      id
      name
      startDate
      endDate
    }
  }
`;
export function useLessonQuery(
  baseOptions: Apollo.QueryHookOptions<
    LessonQueryResponse,
    LessonQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<LessonQueryResponse, LessonQueryVariables>(
    LessonDocument,
    options
  );
}
export function useLessonLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    LessonQueryResponse,
    LessonQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<LessonQueryResponse, LessonQueryVariables>(
    LessonDocument,
    options
  );
}
export type LessonQueryHookResult = ReturnType<typeof useLessonQuery>;
export type LessonLazyQueryHookResult = ReturnType<typeof useLessonLazyQuery>;
export type LessonQueryResult = Apollo.QueryResult<
  LessonQueryResponse,
  LessonQueryVariables
>;

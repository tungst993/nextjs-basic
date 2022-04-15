import type * as Types from "../type.interface";

import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
const defaultOptions = {};
export type CreateLessonMutationVariables = Types.Exact<{
  name: Types.Scalars["String"];
  startDate: Types.Scalars["String"];
  endDate: Types.Scalars["String"];
}>;

export type CreateLessonMutationResponse = { __typename?: "Mutation" } & {
  createLesson: { __typename?: "lesson" } & Pick<
    Types.Lesson,
    "id" | "name" | "startDate" | "endDate"
  >;
};

export const CreateLessonDocument = gql`
  mutation createLesson(
    $name: String!
    $startDate: String!
    $endDate: String!
  ) {
    createLesson(name: $name, startDate: $startDate, endDate: $endDate) {
      id
      name
      startDate
      endDate
    }
  }
`;
export function useCreateLessonMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateLessonMutationResponse,
    CreateLessonMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreateLessonMutationResponse,
    CreateLessonMutationVariables
  >(CreateLessonDocument, options);
}
export type CreateLessonMutationHookResult = ReturnType<
  typeof useCreateLessonMutation
>;
export type CreateLessonMutationResult = Apollo.MutationResult<
  CreateLessonMutationResponse
>;
export type CreateLessonMutationOptions = Apollo.BaseMutationOptions<
  CreateLessonMutationResponse,
  CreateLessonMutationVariables
>;

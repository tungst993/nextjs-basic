export type Maybe<T> = T | null | undefined;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Mutation = {
  __typename?: "Mutation";
  createLesson: Lesson;
};

export type MutationCreateLessonArgs = {
  name: Scalars["String"];
  startDate: Scalars["String"];
  endDate: Scalars["String"];
};

export type Query = {
  __typename?: "Query";
  lessons: Array<Lesson>;
  lesson: Lesson;
};

export type QueryLessonArgs = {
  id: Scalars["String"];
};

export type Lesson = {
  __typename?: "lesson";
  id: Scalars["ID"];
  name: Scalars["String"];
  startDate: Scalars["String"];
  endDate: Scalars["String"];
};

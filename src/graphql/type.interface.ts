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
  signUp: User;
  signIn: Jwt;
};

export type MutationCreateLessonArgs = {
  name: Scalars["String"];
  startDate: Scalars["String"];
  endDate: Scalars["String"];
};

export type MutationSignUpArgs = {
  username: Scalars["String"];
  password: Scalars["String"];
};

export type MutationSignInArgs = {
  username: Scalars["String"];
  password: Scalars["String"];
};

export type Query = {
  __typename?: "Query";
  lessons: Array<Lesson>;
  lesson: Lesson;
  test: Array<User>;
};

export type QueryLessonArgs = {
  id: Scalars["String"];
};

export type Jwt = {
  __typename?: "jwt";
  accessToken: Scalars["String"];
};

export type Lesson = {
  __typename?: "lesson";
  id: Scalars["ID"];
  name: Scalars["String"];
  startDate: Scalars["String"];
  endDate: Scalars["String"];
};

export type User = {
  __typename?: "user";
  id: Scalars["ID"];
  username: Scalars["String"];
  password: Scalars["String"];
};

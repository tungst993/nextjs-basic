import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useLessonQuery } from "../src/graphql/queries/lesson.generated";
import { ApolloPageProps, LangSupport } from "../src/types";
import { initializeApollo } from "../src/apollo/apollo";

import styles from "../styles/Home.module.css";
import {
  LessonsDocument,
  LessonsQueryResponse,
  LessonsQueryVariables,
  useLessonsQuery,
} from "../src/graphql/queries/lessons.generated";

const Home: NextPage = () => {
  const { data } = useLessonsQuery();

  return (
    <div className={styles.container}>
      <input
        type="text"
        id="input"
        className="Input-text"
        placeholder="Your first name, e.g. Nicholas"
      ></input>
      <div className={styles.wrapList}>
        {data?.lessons.map((item, index) => (
          <div className={styles.lessonItem} key={index}>
            <div className={styles.lessonName}>{item.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps<ApolloPageProps> = async (
  ctx
) => {
  const { params, query, res } = ctx;

  const lang: LangSupport = "vi";
  const apolloClient = initializeApollo({ lang, ctx });
  try {
    const [pageInfo] = await Promise.all([
      apolloClient.query<LessonsQueryResponse, LessonsQueryVariables>({
        query: LessonsDocument,
      }),
    ]);

    // set error status code
    if (pageInfo.error || !pageInfo.data) {
      res.statusCode = 404;
    }
  } catch (err) {
    res.statusCode = 404;
    console.error(err);
  }

  return {
    props: {
      errorCode: res.statusCode,
      initialApolloState: apolloClient.cache.extract(),
      slug: params?.slug ?? "",
    },
  };
};

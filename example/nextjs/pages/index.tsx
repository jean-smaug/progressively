import type { NextPage } from "next";
import Head from "next/head";
import React from "react";
import styles from "../styles/Home.module.css";
import { ProgressivelyProvider, useFlags } from "@progressively/react";
import { getSSRProps } from "@progressively/react/lib/ssr";

const FlaggedComponent = () => {
  const { flags } = useFlags();

  if (flags.newHomepage) {
    return <div style={{ background: "red", color: "white" }}>New variant</div>;
  }

  return <div style={{ background: "lightblue" }}>Old variant</div>;
};

const Home: NextPage = ({ progressivelyProps }: any) => {
  return (
    <ProgressivelyProvider {...progressivelyProps}>
      <div className={styles.container}>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <FlaggedComponent />
        </main>
      </div>
    </ProgressivelyProvider>
  );
};

export async function getServerSideProps() {
  const ssrProps = await getSSRProps("valid-sdk-key", {
    fields: {
      email: "marvin.frachet@gmail.com",
      id: "1",
    },
  });

  return {
    props: {
      progressivelyProps: ssrProps,
    },
  };
}

export default Home;

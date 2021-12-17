import React from "react";
import Main from "../../layouts/main";
import { Helmet } from "react-helmet";
import helmetInfo from "../../data/helmet";

const Home = () => {
  const {
    home: { title, desc, keywords, ogTitle, ogDescription, ogImage },
  } = helmetInfo;

  return (
    <>
      <Helmet
        title={title}
        meta={[
          { name: "description", content: desc },
          { name: "keywords", content: keywords },
          { property: "og:title", content: ogTitle },
          { property: "og:description", content: ogDescription },
          { property: "og:image", content: ogImage },
          { name: "twitter:card", content: "summary" },
        ]}
      />

      <Main isHeader={false}>
        <h1>Home</h1>
      </Main>
    </>
  );
};

export default Home;

import { Helmet } from "react-helmet";
import helmetInfo from "../../../data/helmet";
import Main from "../../../layouts/main";
import Stack from "../../../layouts/stack";

const Contents = () => {
  const {
    projects: {
      contents: { title, desc, keywords, ogTitle, ogDescription },
    },
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
          { name: "twitter:card", content: "summary" },
        ]}
      />

      <Main title="Projects">
        <Stack></Stack>
      </Main>
    </>
  );
};

export default Contents;

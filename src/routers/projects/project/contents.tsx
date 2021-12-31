import { Helmet } from "react-helmet";
import helmetInfo from "../../../data/helmet";
import Main from "../../../layouts/main";
import Stack from "../../../layouts/stack";
import useImage from "../../../hooks/useImage";

import MY_POPTFOLIO_THUMBNAIL from "../../../assets/projects/portfolio-thumbnail.png";
import COVID19_THUMBNAIL from "../../../assets/projects/covid19-thumbnail.png";
import MNTN_THUMBNAIL from "../../../assets/projects/mntn-thumbnail.png";

const Contents = () => {
  const {
    projects: {
      contents: { title, desc, keywords, ogTitle, ogDescription },
    },
  } = helmetInfo;

  useImage([MY_POPTFOLIO_THUMBNAIL, COVID19_THUMBNAIL, MNTN_THUMBNAIL]);

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

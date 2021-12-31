import { Helmet } from "react-helmet";
import helmetInfo from "../../../data/helmet";
import Main from "../../../layouts/main";
import Stack from "../../../layouts/stack";
import useImage from "../../../hooks/useImage";
import imagePath from "../../../data/image_path";

const Contents = () => {
  const {
    projects: {
      contents: { title, desc, keywords, ogTitle, ogDescription },
    },
  } = helmetInfo;

  const {
    projects: { covid19, mntn, portfolio },
    home,
  } = imagePath;

  useImage([
    covid19.sm,
    covid19.md,
    covid19.lg,
    mntn.md,
    mntn.md,
    mntn.lg,
    portfolio.sm,
    portfolio.md,
    portfolio.lg,
    home.bg.sm,
    home.bg.md,
    home.bg.lg,
  ]);

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

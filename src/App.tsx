import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Spinner from "./components/spinner";
import imagePath from "./data/image_path";
import useImage from "./hooks/useImage";
import Navbar from "./layouts/navbar";
import Home from "./routers/home/home";
import Projects from "./routers/projects/projects";

const AboutMe = lazy(() => import("./routers/aboutMe/aboutMe"));
const Skills = lazy(() => import("./routers/skills/skills"));
const Contact = lazy(() => import("./routers/contact/contact"));

const Contents = lazy(() => import("./routers/projects/project/contents"));
const MyPortfolio = lazy(
  () => import("./routers/projects/project/myPortfolio")
);
const CovidInfo = lazy(() => import("./routers/projects/project/covidInfo"));
const MountainLanding = lazy(
  () => import("./routers/projects/project/mountainLanding")
);

function App() {
  useImage([imagePath.home.bg.sm, imagePath.home.bg.md, imagePath.home.bg.lg]);

  return (
    <BrowserRouter>
      <Navbar />
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="aboutme" element={<AboutMe />} />
          <Route path="skills" element={<Skills />} />
          <Route path="projects" element={<Projects />}>
            <Route index element={<Contents />} />
            <Route path="my-portfolio" element={<MyPortfolio />} />
            <Route path="covid19-info" element={<CovidInfo />} />
            <Route path="mountain-landing" element={<MountainLanding />} />
            <Route path="*" element={<Contents />} />
          </Route>
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Suspense>

      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;

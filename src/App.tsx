import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Spinner from "./components/spinner";
import imagePath from "./data/image_path";
import useImage from "./hooks/useImage";
import Navbar from "./layouts/navbar";
import HomePage from "./routers/home/home";
import Projects from "./routers/projects/projects";

const lazyLoading = (path: string) => {
  return lazy(() => import(`./routers/${path}`));
};

const AboutMePage = lazyLoading("aboutMe/aboutMe");
const SkillsPage = lazyLoading("skills/skills");
const ContactPage = lazyLoading("contact/contact");

const ProjectsContentsPage = lazyLoading("projects/project/contents");
const MyPortfolioPage = lazyLoading("projects/project/myPortfolio");
const CovidInfoPage = lazyLoading("projects/project/covidInfo");
const MountainLandingPage = lazyLoading("projects/project/mountainLanding");

function App() {
  useImage([imagePath.home.bg.sm, imagePath.home.bg.md, imagePath.home.bg.lg]);

  return (
    <BrowserRouter>
      <Navbar />
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="aboutme" element={<AboutMePage />} />
          <Route path="skills" element={<SkillsPage />} />
          <Route path="projects" element={<Projects />}>
            <Route index element={<ProjectsContentsPage />} />
            <Route path="my-portfolio" element={<MyPortfolioPage />} />
            <Route path="covid19-info" element={<CovidInfoPage />} />
            <Route path="mountain-landing" element={<MountainLandingPage />} />
            <Route path="*" element={<ProjectsContentsPage />} />
          </Route>
          <Route path="contact" element={<ContactPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;

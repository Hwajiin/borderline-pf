import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/footer";
import Spinner from "./components/spinner";
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

// TODO: Refactoring code...
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="aboutme"
          element={
            <Suspense fallback={<Spinner />}>
              <AboutMe />
            </Suspense>
          }
        />
        <Route
          path="skills"
          element={
            <Suspense fallback={<Spinner />}>
              <Skills />
            </Suspense>
          }
        />
        <Route path="projects" element={<Projects />}>
          <Route
            index
            element={
              <Suspense fallback={<Spinner />}>
                <Contents />
              </Suspense>
            }
          />
          <Route
            path="my-portfolio"
            element={
              <Suspense fallback={<Spinner />}>
                <MyPortfolio />
              </Suspense>
            }
          />
          <Route
            path="covid19-info"
            element={
              <Suspense fallback={<Spinner />}>
                <CovidInfo />
              </Suspense>
            }
          />
          <Route
            path="mountain-landing"
            element={
              <Suspense fallback={<Spinner />}>
                <MountainLanding />
              </Suspense>
            }
          />
          <Route path="*" element={<Contents />} />
        </Route>
        <Route
          path="contact"
          element={
            <Suspense fallback={<Spinner />}>
              <Contact />
            </Suspense>
          }
        />
        <Route path="*" element={<Home />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;

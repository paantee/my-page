import { HashRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./components/HomePage";
import { ProjectsPage } from "./components/ProjectsPage";

export const Approuter = () => {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
      </HashRouter>
    </>
  )
};
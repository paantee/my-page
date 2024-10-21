import { HashRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./components/HomePage";
import { ProjectsPage } from "./components/ProjectsPage";
import { NavigationBar } from "./components/NavigationBar";

export const Approuter = () => {
  return (
    <>
      <HashRouter>
      <NavigationBar/>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
      </HashRouter>
    </>
  )
};

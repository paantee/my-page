import { HashRouter, Route, Routes, useLocation } from "react-router-dom";
import { NavigationBar } from "./components/NavigationBar";
import HomePage from "./components/HomePage";
import ProjectsPage from "./components/ProjectsPage";
import transition from "./components/Transition";

const Approuter = () => {

  return (
    <>
      <HashRouter>
      <NavigationBar />
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
      </HashRouter>
    </>
  )
};

export default transition(Approuter);

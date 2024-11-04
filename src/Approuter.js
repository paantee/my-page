import { Route, Routes, useLocation } from "react-router-dom";
import { NavigationBar } from "./components/NavigationBar";
import HomePage from "./components/HomePage";
import ProjectsPage from "./components/ProjectsPage";
import transition from "./components/Transition";
import { AnimatePresence } from "framer-motion";

const Approuter = () => {
  const location = useLocation()
  return (
    <>
      <NavigationBar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route index element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
      </AnimatePresence>
    </>
  )
};

export default Approuter;

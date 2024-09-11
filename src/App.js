import './App.css';
import { Routes, Route, HashRouter } from "react-router-dom";
import { HomePage } from './components/HomePage';
import { ProjectsPage } from './components/ProjectsPage';
import { Approuter } from './Approuter';

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Approuter />}>
            <Route index path="/home" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
          </Route>
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;

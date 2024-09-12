import './App.css';
import { Routes, Route, HashRouter } from "react-router-dom";
import { MyPage } from './components/MyPage';
import { ProjectsPage } from './components/ProjectsPage';
import { Approuter } from './Approuter';

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Approuter />}></Route>
            <Route index path="/home" element={<MyPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;

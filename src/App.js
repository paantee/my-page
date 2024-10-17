import './App.css';
import { Routes, Route, HashRouter } from "react-router-dom";
import { MyPage } from './components/HomePage';
import { ProjectsPage } from './components/ProjectsPage';
import { Approuter } from './Approuter';

function App() {
  return (
    <>
      <Approuter></Approuter>
    </>
  );
}

export default App;

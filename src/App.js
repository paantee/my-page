import './App.css';
import Approuter from './Approuter';

function App() {
  return (
    <>
      <div style={{ maxWidth: '100%' }} id="allContent" className="min-h-screen top-0 z-[-2] w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
        <Approuter />
      </div>
    </>
  );
}

export default App;

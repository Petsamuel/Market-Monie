import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StateSelection from "./pages/StateSelection";
import HubSelection from "./pages/HubSelection";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StateSelection />} />
        <Route path="/apply/hub" element={<HubSelection />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


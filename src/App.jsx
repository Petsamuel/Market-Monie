import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HubSelection from "./Screens/HubSelection";
import SelectState from "./Screens/SelectState";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SelectState />} />
        <Route path="/apply/hub" element={<HubSelection />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import DiningAreas from "./pages/DiningAreas";
import ReserveTable from "./pages/ReserveTable";
import ReservationHistory from "./pages/ReservationHistory";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/areas" element={<DiningAreas />} />
        <Route path="/reserve" element={<ReserveTable />} />
        <Route path="/history" element={<ReservationHistory />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
import { BrowserRouter, Routes, Route } from "react-router";
import { HomeApp } from "./pages/Home/HomeApp";
import { Navbar } from "./components/ui/Navbar/Navbar";
import { CreateHeroe } from "./pages/Characters/CreateHeroe";
import { UpdateHeroe } from "./pages/Characters/UpdateHeroe";
import { CreatePlanet } from "./pages/Planets/CreatePlanet";
import { UpdatePlanet } from "./pages/Planets/UpdatePlanet";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<HomeApp />} />
          <Route path="/add-character" element={<CreateHeroe />} />
          <Route path="/update-character" element={<UpdateHeroe />} />
          <Route path="/add-planet" element={<CreatePlanet />} />
          <Route path="/update-planet" element={<UpdatePlanet />} />
        </Routes>
    </BrowserRouter>
  );
}

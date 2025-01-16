import { BrowserRouter, Routes, Route } from "react-router";
import { HomeApp } from "./pages/Home/HomeApp";
import { Navbar } from "./components/Navbar";
import { CreateHeroe } from "./pages/Characters/CreateHeroe";
import { UpdateHeroe } from "./pages/Characters/UpdateHeroe";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<HomeApp />} />
          <Route path="/add-character" element={<CreateHeroe />} />
          <Route path="/update-character" element={<UpdateHeroe />} />
        </Routes>
    </BrowserRouter>
  );
}

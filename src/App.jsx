import { BrowserRouter, Routes, Route } from "react-router";
import { HomeApp } from "./HomeApp";
import { Navbar } from "./components/Navbar";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<HomeApp />} />
        </Routes>
    </BrowserRouter>
  );
}

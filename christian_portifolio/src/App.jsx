import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { AboutPage } from "./components/AboutPage";
import { ExperiencePage } from "./components/ExperiencePage";
import { PublicationsPage } from "./components/PublicationsPage";
import Contacts from "./components/Contacts";
import { Header } from "../src/components/Header/index";
import { Home } from "./components/Home";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/footer" element={<Footer />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/about" element={<AboutPage />}></Route>
          <Route path="/experience" element={<ExperiencePage />}></Route>
          <Route path="/publications" element={<PublicationsPage />}></Route>
          <Route path="/contact" element={<Contacts />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

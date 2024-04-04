import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/";
import APropos from "./pages/APropos/";
import Header from "./components/Header";
import PageErreur from "./pages/Erreur";
import Footer from "./components/Footer";
import "./styles/Global.scss";
import Logements from "./pages/Logements";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/a-propos" element={<APropos />} />
        <Route path="*" element={<PageErreur />} />
        <Route path=":id" element={<Logements />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/";
import Logements from "./pages/Logements/";
import APropos from "./pages/APropos/";
import Header from "./components/Header";
import Error from "./components/Error";
import Footer from "./components/Footer";
import "./styles/Global.scss";
import LogementDetail from "./pages/Logements";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/logements" element={<Logements />} />
        <Route path="/a-propos" element={<APropos />} />
        <Route path="*" element={<Error />} />
        <Route path=":id" element={<LogementDetail />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

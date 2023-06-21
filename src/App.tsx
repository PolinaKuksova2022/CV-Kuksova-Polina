import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Footer } from "./components/footer/Footer";
import { AppRouter } from "./components/router/AppRouter";
import { Header } from "./components/header/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <AppRouter />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
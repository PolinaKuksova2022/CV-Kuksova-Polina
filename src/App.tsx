import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Footer } from "./components/Footer/Footer";
import { AppRouter } from "./components/router/AppRouter";
import { Header } from "./components/Header/Header";

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
import { useState, React } from "react";
import "./styles/App.css";

import { Header } from "./components/ui/Composents-Racine/Header";
import { Main } from "./components/ui/Composents-Racine/Main";
import { Footer } from "./components/ui/Composents-Racine/Footer";

import { TextAnimate } from "@/components/ui/text-animate";
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";

function App() {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-start justify-start overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-background z-0">
        <BackgroundRippleEffect />
      </div>

      <div className="relative z-10">
        <Header />

        <Main />

        <Footer />
      </div>
    </div>
  );
}


export default App;

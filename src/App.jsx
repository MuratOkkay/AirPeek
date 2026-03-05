import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Bgvideo from "./assets/video/Bg3.mp4";
import Bgvideo2 from "./assets/video/Bg4.mp4";
import Navbar from "./component/Navbar/Navbar";
import Hero from "./component/Hero/Hero";
import WeatherDetail from "./component/WeatherDetail/WeatherDetail";

function App() {
  const [darkMode, setDarkMode] = React.useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  const videoSource = darkMode ? Bgvideo : Bgvideo2;

  return (
    <>
      <Routes>
        {/* Ana Sayfa */}
        <Route
          path="/"
          element={
            <div className="h-full relative">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="fixed right-0 top-0 h-full w-full object-cover z-0"
                src={videoSource}
              ></video>
              <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
              <Hero />
            </div>
          }
        />

        {/* Hava Durumu Sayfası */}
        <Route
          path="/weather/:city"
          element={
            <div className="h-full relative ">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="fixed right-0 top-0 h-full w-full object-cover z-0"
                src={videoSource}
              ></video>
              <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
              <WeatherDetail />
            </div>
          }
        />
      </Routes>
    </>
  );
}

export default App;

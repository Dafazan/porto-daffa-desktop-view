import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Explorer from "./pages/explorer";
import Taskbar from "./components/taskbar";
import { AppProvider } from "./AppContext";

const App: React.FC = () => {
  return (
    <AppProvider>
      <main className="App">
        <div className=" w-screen h-screen relative overflow-hidden">
          <img
            src="/wall.jpg"
            alt="wallpaper"
            className=" h-full w-full absolute object-center object-cover"
          />
          <div className="absolute w-full h-full">
            <Router>
              <Routes>
                <Route path="/" element={<Explorer />} />
              </Routes>
            </Router>
          </div>
          <div className="absolute w-full h-full flex flex-col pointer-events-none">
            <div className="w-full h-full"></div>
            <div className="w-full h-16 p-3 flex justify-center items-center pointer-events-auto">
              <Taskbar />
            </div>
          </div>
        </div>
      </main>
    </AppProvider>
  );
};

export default App;

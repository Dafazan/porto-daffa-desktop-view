import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Explorer from "./pages/explorer";
import Taskbar from "./components/taskbar";

const App: React.FC = () => {
  return (
    <main className="App">
      <div className="bg-violet-400 w-screen h-screen relative">
        <div className="absolute w-full h-full">
          <Router>
            <Routes>
              <Route path="/" element={<Explorer />} />
            </Routes>
          </Router>
        </div>
        <div className="absolute w-full h-full flex flex-col">
          <div className="w-full h-full"></div>
          <div className="w-full h-16 p-3 flex justify-center items-center">
            <Taskbar />
          </div>
        </div>
      </div>
    </main>
  );
};

export default App;

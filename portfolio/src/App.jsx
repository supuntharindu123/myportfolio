import "./App.css";

import Home from "./components/home";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  const [mytheme, setMytheme] = useState("");
  useEffect(() => {
    const mythemes = localStorage.getItem("theme");
    setMytheme(mythemes);
    console.log(mythemes);
  }, []);

  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <div>
                  <Home></Home>
                </div>
              }
            />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;

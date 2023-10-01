import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import News from "./components/News";
import AboutUs from "./components/page/AboutUs";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import LoadingBar from "react-top-loading-bar";

const App = () => {
  const pageSize = 6;
  const apiKey = process.env.REACT_APP_NEWS_API;
  const [progress, setProgress] = useState(0);

  return (
    <>
      <Router>
        <LoadingBar color="#ffff00" height={4} progress={progress} />
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <News
                setProgress={setProgress}
                apikey={apiKey}
                key="general"
                pageSize={pageSize}
                category="general"
              />
            }
          />
          <Route
            path="/general"
            element={
              <News
                setProgress={setProgress}
                apikey={apiKey}
                key="general"
                pageSize={pageSize}
                category="general"
              />
            }
          />
          <Route
            path="/business"
            element={
              <News
                setProgress={setProgress}
                apikey={apiKey}
                key="business"
                pageSize={pageSize}
                category="business"
              />
            }
          />
          <Route
            path="/entertainment"
            element={
              <News
                setProgress={setProgress}
                apikey={apiKey}
                key="entertainment"
                pageSize={pageSize}
                category="entertainment"
              />
            }
          />
          <Route
            path="/health"
            element={
              <News
                setProgress={setProgress}
                apikey={apiKey}
                key="health"
                pageSize={pageSize}
                category="health"
              />
            }
          />
          <Route
            path="/science"
            element={
              <News
                setProgress={setProgress}
                apikey={apiKey}
                key="science"
                pageSize={pageSize}
                category="science"
              />
            }
          />
          <Route
            path="/sports"
            element={
              <News
                setProgress={setProgress}
                apikey={apiKey}
                key="sports"
                pageSize={pageSize}
                category="sports"
              />
            }
          />
          <Route
            path="/technology"
            element={
              <News
                setProgress={setProgress}
                apikey={apiKey}
                key="technology"
                pageSize={pageSize}
                category="technology"
              />
            }
          />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
      </Router>
      <ScrollToTop smooth />
    </>
  );
};

export default App;

import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />

        <footer>
          This project was coded by{" "}
          <a
            href="mailto:mahoomah.curl@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mahuma Ribane
          </a>{" "}
          and is open-sourced on {" "} <a
            href="https://github.com/wecodeschool/react-weather-app"
            target="_blank"
            rel="noopener noreferrer"
          > GitHub
          </a>{" "}
          and hosted on{" "}
          <a
            href="https://suspicious-beaver-111c4d.netlify.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
             Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}

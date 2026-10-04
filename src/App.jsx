import "./App.css";

import { Link, Route, Routes } from "react-router-dom";

function Home() {
  return <h1 style={{ textAlign: "center" }}>Home Page</h1>;
}

function About() {
  return <h1 style={{ textAlign: "center" }}>About Page</h1>;
}

function App() {
  return (
    <div>
      <nav style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          path="*"
          element={<h1 style={{ textAlign: "center" }}>404 Not Found</h1>}
        />
      </Routes>
    </div>
  );
}

export default App;

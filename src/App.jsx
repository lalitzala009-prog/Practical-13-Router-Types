import { HashRouter, NavLink, Routes, Route } from "react-router-dom";
import "./App.css";

function Home() {
  return (
    <div className="content-card">
      <h2>Welcome to Home Page</h2>
      <p>This is the Home page of our React application.</p>
      <p>Router Type: HashRouter</p>
    </div>
  );
}

function About() {
  return (
    <div className="content-card">
      <h2>About Page</h2>
      <p>
        HashRouter allows navigation between pages using the hash (#)
        in the URL.
      </p>
      <p>Current Route: /about</p>
    </div>
  );
}

function App() {
  return (
    <HashRouter>
      <div className="app">
        <main className="main-card">
          <header className="header">
            <h1>React Router <span>Types</span></h1>
          </header>

          <nav className="navigation">
            <NavLink to="/" end>Home</NavLink>
            <NavLink to="/about">About</NavLink>
          </nav>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>

      </div>
    </HashRouter>
  );
}

export default App;
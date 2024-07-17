import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

const App = () => {
  return (
    <>
    <div>
      <div>
        <h1>React App</h1>
      </div>
    </div>
      <div className="absolute bottom-0 left-0 min-w-full">
          <Navigation />
      </div>
    </>
  );
};

const Navigation = () => {
  return (
    <>
      <nav className="nav">
        <div className="nav-btn">
          <i className="bi bi-house-door-fill nav-icon"></i>
          <h1 className="nav-title">Home</h1>
        </div>
        <div className="nav-btn">
          <i className="bi bi-envelope-fill nav-icon"></i>
          <h1 className="nav-title">Undangan</h1>
        </div>
        <div className="nav-btn">
          <i className="bi bi-person-heart nav-icon"></i>
          <h1 className="nav-title">Mempelai</h1>
        </div>
        <div className="nav-btn">
          <i className="bi bi-geo-alt-fill nav-icon"></i>
          <h1 className="nav-title">Lokasi</h1>
        </div>
        <div className="nav-btn">
          <i className="bi bi-gift-fill nav-icon"></i>
          <h1 className="nav-title">Beri kado</h1>
        </div>
      </nav>
    </>
  );
};

export default App;

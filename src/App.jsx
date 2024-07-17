import React, { useEffect, useState } from "react";
import Images from "./assets/images";
import "bootstrap-icons/font/bootstrap-icons.css";

const App = () => {
  const [page, setPage] = useState("Home");

  const toHome = () => {
    setPage("Home");
  };
  const toUndangan = () => {
    setPage("Undangan");
  };
  const toMempelai = () => {
    setPage("Mempelai");
  };
  const toLokasi = () => {
    setPage("Lokasi");
  };
  const toBeriKado = () => {
    setPage("BeriKado");
  };

  return (
    <>
      <Content page={page} />
      <Navigation
        func={{ toHome, toUndangan, toMempelai, toLokasi, toBeriKado }}
      />
    </>
  );
};

//Tombol Navigasi
const Navigation = (props) => {
  const func = props.func;
  return (
    <>
      <div className="absolute bottom-0 left-0 min-w-full">
        <nav className="nav">
          <div className="nav-btn" onClick={func.toHome}>
            <i className="bi bi-house-door-fill nav-icon"></i>
            <h1 className="nav-title">Home</h1>
          </div>
          <div className="nav-btn" onClick={func.toUndangan}>
            <i className="bi bi-envelope-fill nav-icon"></i>
            <h1 className="nav-title">Undangan</h1>
          </div>
          <div className="nav-btn" onClick={func.toMempelai}>
            <i className="bi bi-person-heart nav-icon"></i>
            <h1 className="nav-title">Mempelai</h1>
          </div>
          <div className="nav-btn" onClick={func.toLokasi}>
            <i className="bi bi-geo-alt-fill nav-icon"></i>
            <h1 className="nav-title">Lokasi</h1>
          </div>
          <div className="nav-btn" onClick={func.toBeriKado}>
            <i className="bi bi-gift-fill nav-icon"></i>
            <h1 className="nav-title">Beri kado</h1>
          </div>
        </nav>
      </div>
    </>
  );
};

//Content
const Content = (props) => {
  const page = props.page;
  switch (page) {
    case "Home":
      return <Home />;
    case "Undangan":
      return "Hello Undangan";
    case "Mempelai":
      return "Hello Mempelai";
    case "Lokasi":
      return "Hello Lokasi";
    case "BeriKado":
      return "Hello BeriKado";
    default:
      return <Home />;
  }
};

const Home = () => {
  return (
    <>
      {/* Frame */}
      <div className="flex flex-col ">
        {/* Frame top */}
        <img
          src={Images["f-home"]}
          className="absolute w-32 left-0 top-0 opacity-50 scale-y-[-1]"
        />
        <img
          src={Images["f-home"]}
          className="absolute w-32 right-0 top-0 opacity-50 scale-[-1]"
        />
        {/* Frame Bottom */}
        <img
          src={Images["f-home"]}
          className="absolute w-32 left-0 bottom-24 opacity-50"
        />
        <img
          src={Images["f-home"]}
          className="absolute w-32 right-0 bottom-24 opacity-50 scale-x-[-1]"
        />
      </div>
      {/* End Frame */}

      {/* Content */}
      <h1 className="titleHome">Undangan Pernikahan</h1>
      <div>
        <img src="" />
      </div>
      {/* End Content */}
    </>
  );
};
export default App;

import React from "react";

// reactstrap components

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";


// index sections
import SectionButtons from "views/index-sections/SectionButtons.js";
import SectionCarousel from "views/index-sections/SectionCarousel.js";
import Narrativa from "./vistasRocio/narrativa";
import Niveles from "./vistasRocio/niveles";
import Recompensas from "./vistasRocio/recompensas";
import Presentacion from "./vistasRocio/presentacion";
import Aventureros from "./vistasRocio/aventureros";
import Retos from "./vistasRocio/retos";


function Index() {
  const path = window.location.pathname
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("index");
    return function cleanup() {
      document.body.classList.remove("index");
    };

  });

  return (
    <>
    {path === "/" && <><IndexNavbar />
      <IndexHeader />
      <div className="main">
      <SectionCarousel />
        <SectionButtons />
      </div></>}
    {path === "/narrativa" && <Narrativa />}
    {path === "/presentacion" && <Presentacion />}
    {path === "/niveles" && <Niveles />}
    {path === "/recompensas" && <Recompensas />}
    {path === "/aventureros" && <Aventureros />}
    {path === "/retos" && <Retos />}
    </>

  );
}

export default Index;

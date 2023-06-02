import React from 'react';
import { Container } from 'reactstrap';
import ReactPlayer from 'react-player'
import SectionNavbar from 'components/Navbars/SectionsNavbar';

function Niveles(props) {
  return (
<div style={{ minHeight: "100vh",  backgroundImage: "url(" + require("assets/img/niveles.png") + ")"}}>
          <SectionNavbar/>

      <div className="section-buttons" style={{padding: "0 !important"}}>
        <Container>
        <div style={{textAlign: "center", padding: "60px 0 40px 0", }}>
            <h2 style={{marginTop: 60, fontWeight: 'bold', color: 'black'}}>Niveles y tipos de jugadores</h2>
          </div>
          <div>
            <p style={{fontSize: 20, fontWeight: 600, marginBottom: 40, color: 'black'}}>
            La vuelta al mundo deportiva se consigue con mucho esfuerzo, superación y trabajo en equipo.
Os convertiréis en unos auténticos aventureros hasta alcanzar el éxito como “el aventurero
Fogg”. ¡Sólo algunos de vosotros seréis capaces de conseguirlo!
            </p>
          </div>
          <div style={{display: 'flex',justifyContent: 'center', marginBottom: 50}}>
          <ReactPlayer url={'https://youtu.be/xiAO_dwxONg'} controls={true}/>
          </div>          
          <br />
          <div style={{ width: "100%", paddingBottom: 20}}>
          <div style={{ width: "100%" }}>
  <div style={{ position: "relative", paddingBottom: "56.25%", paddingTop: 0, height: 0 }}>
  <div style={{display: "flex", justifyContent: "center", textAlign: "center", padding: "0"}}>
          <div 
            style={{ display: 'flex', margin: "5px", justifyContent: 'center', marginBottom: 50, height: 600, width: "30%", backgroundSize:"100% 100%",
              backgroundImage:
                "url(" + require("assets/img/niveles.jpg") + ")"
            }}/>
            </div>
            <h3 style={{ fontWeight: 'bold', color: 'black'}}>¿Y CÓMO PUEDO AVANZAR HASTA CONVERTIRME EN EL AVENTURERO FOGG?</h3>
            <div style={{display: "flex", justifyContent: "center", textAlign: "center", padding: "0"}}>
          <div 
            style={{ display: 'flex', margin: "5px", justifyContent: 'center', marginBottom: 50, height: 400, width: "80%", backgroundSize:"100% 100%",
              backgroundImage:
                "url(" + require("assets/img/nivelespuntos.jpg") + ")"
            }}/>
            </div>
            <h3 style={{ fontWeight: 'bold', color: 'black'}}>¡PODRÉIS VER VUESTRO PROGRESO EN ESTE LEADERBOARD!</h3>
            <div style={{display: "flex", justifyContent: "center", textAlign: "center", padding: "0"}}>
            <div 
            style={{ display: 'flex', margin: "5px", justifyContent: 'center', marginBottom: 50, height: 400, width: "80%", backgroundSize:"100% 100%",
              backgroundImage:
                "url(" + require("assets/img/leaderboard.jpg") + ")"
            }}/>
            </div>
  </div>
</div>

        </div>
        </Container>
      </div>
    </div>
  );
}

export default Niveles;
import React from 'react';
import { Container } from 'reactstrap';
import ReactPlayer from 'react-player'
import SectionNavbar from 'components/Navbars/SectionsNavbar';

function Retos(props) {
  return (
<div style={{ minHeight: "100vh",  backgroundImage: "url(" + require("assets/img/biblio2.png") + ")"}}>
          <SectionNavbar/>

      <div className="section-buttons" style={{padding: "0 !important"}}>
        <Container>
        <div style={{textAlign: "center", padding: "60px 0 40px 0"}}>
            <h2 style={{marginTop: 60, marginBottom: 30, fontWeight: 'bold', color: 'black'}}>Retos deportivos</h2>
            <p style={{fontSize: 20, fontWeight: 600, color: 'black'}}>
            EN CADA PAÍS QUE VISITÉIS TENDRÉIS QUE AFRONTAR RETOS DEPORTIVOS QUE OS
PERMITIRÁN ACUMULAR PUNTOS Y RECOMPENSAS HASTA ALCANZAR EL MÁXIMO NIVEL. ¡SIGUE AQUÍ EL
ITINERARIO DE TU VIAJE!
            </p>
            
          </div>
          <div style={{display: 'flex',justifyContent: 'center', marginBottom: 30}}>
          <div style={{position: 'relative', width: '100%', height: 0, paddingBottom: '70.7071%', marginBottom: '0.9em', marginTop: '1.6em', overflow: 'hidden', borderRadius: 8, boxShadow: '0 2px 8px 0 rgba(63,69,81,0.16)', willChange: 'transform'}}>
          <iframe 
            title="la vuelta al mundo en EF"
            frameBorder="0"
            width="100%"
            height="100%"
            style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
            src="https://view.genial.ly/647461e4f15f470011c6087b"
            type="text/html"
            allowScriptAccess="always"
            allowFullScreen={true}
            scrolling="yes"
            allowNetworking="all"
            />
</div>
          </div>
          <div>
          </div>
        
          
          
          <br />
          <div style={{ width: "100%", paddingBottom: 40}}>
       
        <h3 style={{marginTop: 50, fontWeight: 'bold', color: 'black'}}>¡ACUMULA PUNTOS, SUPERA RETOS!</h3>
        <div style={{display: "flex", justifyContent: "center", textAlign: "center", padding: "60px 0 40px 0"}}>
        
        <div style={{position: 'relative', width: '100%', height: 0, paddingBottom: '70.7071%', marginBottom: '0.9em', marginTop: '1.6em', overflow: 'hidden', borderRadius: 8, boxShadow: '0 2px 8px 0 rgba(63,69,81,0.16)', willChange: 'transform'}}>
          <iframe 
            title="la vuelta al mundo en EF"
            frameBorder="0"
            width="100%"
            height="100%"
            style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
            src="https://view.genial.ly/6475cd73b265b70013125478"
            type="text/html"
            allowScriptAccess="always"
            allowFullScreen={true}
            scrolling="yes"
            allowNetworking="all"
            />
</div>
            
            </div>
        </div>
        </Container>
      </div>
    </div>
  );
}

export default Retos;
import React from 'react';
import { Container } from 'reactstrap';
import ReactPlayer from 'react-player'
import SectionNavbar from 'components/Navbars/SectionsNavbar';

function Aventureros(props) {
  return (
<div style={{ minHeight: "100vh",  backgroundImage: "url(" + require("assets/img/biblio2.png") + ")"}}>
          <SectionNavbar/>

      <div className="section-buttons" style={{padding: "0 !important"}}>
        <Container>
        <div style={{textAlign: "center", padding: "60px 0 40px 0"}}>
            <h2 style={{marginTop: 60, marginBottom: 30, fontWeight: 'bold', color: 'black'}}>Nuestros aventureros</h2>
            <div>
            <p style={{fontSize: 20, fontWeight: 600, marginBottom: 40, color: 'black'}}>
            ¿QUÉ ADJETIVOS TE DEFINEN COMO AVENTURERO? ¡QUIERO CONOCERTE!
            ¿TIENES TODO LO QUE HAY QUE TENER PARA AFRONTAR NUEVAS AVENTURAS? ESTE AÑO, EN EDUCACIÓN
            FÍSICA, ¡¡¡TENDRÁS QUE ENFRENTARTE A MUCHAS AVENTURAS DEPORTIVAS!!!
            </p>
          </div>
            <a style={{fontSize: 24, fontWeight: 'bold'}} href="https://www.menti.com/al7zbn2kyutd" target="_blank" rel="noreferrer">https://www.menti.com/al7zbn2kyutd</a>
          </div>
          <div style={{display: 'flex',justifyContent: 'center', marginBottom: 50}}>
          <div 
              style={{ display: 'flex',justifyContent: 'center', marginBottom: 50, height: 300, width: 300, backgroundSize:"100% 100%",
                backgroundImage:
                  "url(" + require("assets/img/QR.png") + ")"
              }}>
            </div>
          </div>
          <br />
          <div style={{ width: "100%", paddingBottom: 40}}>
        <div style={{ position: "relative", paddingBottom: "56.25%", paddingTop: 0, height: 0}}>
            <iframe 
            title="la vuelta al mundo en EF"
            frameBorder="0"
            width="100%"
            height="100%"
            style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
            src="https://view.genial.ly/645394e606dcbc00194b2f7b"
            type="text/html"
            allowScriptAccess="always"
            allowFullScreen={true}
            scrolling="yes"
            allowNetworking="all"
            />
        </div>
        <h3 style={{marginTop: 50, fontWeight: 'bold', color: 'black'}}>Nuestra clase: Inspiración para el aula</h3>
        <div style={{display: "flex", justifyContent: "center", textAlign: "center", padding: "60px 0 40px 0"}}>
        <div 
              style={{ display: 'flex', margin: "5px", justifyContent: 'center', marginBottom: 50, height: 600, width: 300, backgroundSize:"100% 100%",
                backgroundImage:
                  "url(" + require("assets/img/aula1.png") + ")"
              }}>
            </div>
            <div 
              style={{ display: 'flex',justifyContent: 'center', margin: "5px", marginBottom: 50, height: 400, width: 300, backgroundSize:"100% 100%",
                backgroundImage:
                  "url(" + require("assets/img/aula2.jpg") + ")"
              }}>
            </div>
            <div 
              style={{ display: 'flex',justifyContent: 'center',  margin: "5px",marginBottom: 50, height: 400, width: 300, backgroundSize:"100% 100%",
                backgroundImage:
                  "url(" + require("assets/img/aula3.jpg") + ")"
              }}>
            </div>
            </div>
        </div>
        </Container>
      </div>
    </div>
  );
}

export default Aventureros;
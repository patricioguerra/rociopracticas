import React from 'react';
import { Container } from 'reactstrap';
import ReactPlayer from 'react-player'
import SectionNavbar from 'components/Navbars/SectionsNavbar';

function Presentacion(props) {
  return (
<div style={{ minHeight: "100vh",  backgroundColor: "#8BC7C5"}}>
          <SectionNavbar/>

      <div className="section-buttons" style={{padding: "0 !important"}}>
        <Container>
        <div style={{textAlign: "center", padding: "60px 0 40px 0"}}>
          </div>
          <div style={{display: 'flex',justifyContent: 'center', marginBottom: 50}}>
          </div>
          <div>
          <div 
              style={{ display: 'flex',justifyContent: 'center', marginBottom: 50, height: 600, width: "100%", backgroundSize:"100% 100%",
                backgroundImage:
                  "url(" + require("assets/img/presentacionproyecto.jpg") + ")"
              }}>
            </div>
          </div>
        
          
          
          <br />
          <div style={{ width: "100%", paddingBottom: 40}}>
        </div>
        </Container>
      </div>
    </div>
  );
}

export default Presentacion;

import React from "react";
// plugin that creates slider


// reactstrap components
import {
 
  Container,
  
} from "reactstrap";

function SectionButtons() {

  return (
    <>
      <div className="section-buttons" style={{padding: "0 !important"}}>
        <Container>
        <div style={{textAlign: "center", marginBottom: "60px"}}>
            
          </div>
        
      
          
          
          <div  style={{textAlign: "center", marginBottom: "60px", marginTop: "80px"}}>
            <h2>¡Síguenos!</h2>
          </div>
          
          <div className="cajaContenedoraIg">
            <div>
              <a href="https://instagram.com/educacionfisik" target="_blank" rel="noreferrer">
              <div style={{textAlign: "center", fontSize: "18px", fontWeight: "bold", marginBottom: "10px"}}>
                @educacionfisik
              </div>
              <div className="conteneur-principal"
              style={{
                backgroundImage:
                  "url(" + require("assets/img/instagram.png") + ")"
              }}>
            </div>
            </a>
            </div>
            <div>
            <a href="https://instagram.com/oposiciones.ef" target="_blank" rel="noreferrer">
              <div style={{textAlign: "center", fontSize: "18px", fontWeight: "bold", marginBottom: "10px"}}>
                @oposiciones.ef
              </div>
                <div className="conteneur-principal"
                style={{
                  backgroundImage:
                    "url(" + require("assets/img/instagram.png") + ")"
                }}>
              </div>
              </a>
            </div>
          
          </div>
          
          
          <br />
          
        </Container>
      </div>
    </>
  );
}

export default SectionButtons;

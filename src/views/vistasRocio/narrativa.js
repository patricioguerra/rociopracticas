import React from 'react';
import { Container } from 'reactstrap';
import ReactPlayer from 'react-player'
import SectionNavbar from 'components/Navbars/SectionsNavbar';

function Narrativa(props) {
  return (
<div style={{ minHeight: "100vh",  backgroundImage: "url(" + require("assets/img/biblio2.png") + ")"}}>
          <SectionNavbar/>

      <div className="section-buttons" style={{padding: "0 !important"}}>
        <Container>
        <div style={{textAlign: "center", padding: "60px 0 40px 0"}}>
            <h2 style={{marginTop: 60, fontWeight: 'bold', color: 'black'}}>Narrativa</h2>
          </div>
          <div style={{display: 'flex',justifyContent: 'center', marginBottom: 50}}>
          <ReactPlayer url={'https://youtu.be/sbzdZAZI3B0'} controls={true}/>
          </div>
          <div>
          <div style={{display: "flex", justifyContent: "center", textAlign: "center", padding: "0"}}>
          <div 
            style={{ display: 'flex', margin: "5px", justifyContent: 'center', marginBottom: 50, height: 500, width: 600, backgroundSize:"100% 100%",
              backgroundImage:
                "url(" + require("assets/img/narrativa.jpg") + ")"
            }}/>
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
            src="https://view.genial.ly/6448e44bb43cb9001bc8a8a4"
            type="text/html"
            allowScriptAccess="always"
            allowFullScreen={true}
            scrolling="yes"
            allowNetworking="all"
            />
        </div>
        </div>
        </Container>
      </div>
    </div>
  );
}

export default Narrativa;
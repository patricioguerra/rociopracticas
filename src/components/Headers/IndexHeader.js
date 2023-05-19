/*!

=========================================================
* Paper Kit React - v1.3.1
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function IndexHeader() {
  return (
    <>
      <div
        className="page-header section-dark"
        style={{
          backgroundImage:
            "url(" + require("assets/img/principio2.jpg") + ")"
        }}
      >
        <div className="filter" />
        <div className="content-center">
          <Container>
          </Container>
        </div>
        
        <h6 className="category category-absolute">
          Un proyecto de Rocío Jiménez Benítez con la colaboración de Oposiciones Educación Fisica
        </h6>
      </div>
    </>
  );
}

export default IndexHeader;

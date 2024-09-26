import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Container from "react-bootstrap/Container";
import Header from "./Layouts/Headers/Header.js";
import Footer from "./Layouts/Footers/Footer.js";
import InvoiceForm from "./Components/InvoiceForm.js";

class App extends Component {
  render() {
    return (
      <div className="App d-flex flex-column align-items-center justify-content-center w-100">
        <Container>
          <Header />
          <InvoiceForm />
          <Footer />
        </Container>
      </div>
    );
  }
}

export default App;

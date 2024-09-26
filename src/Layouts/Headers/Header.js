import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "../Headers/Header.css";

function Header() {
  return (
    <Navbar className="navbar">
      <Container>
        <Navbar.Brand href="#" className="navbar-head">
          Janani Traders
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text className="navbar-head2">
            Signed in as : Elamugilan
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;

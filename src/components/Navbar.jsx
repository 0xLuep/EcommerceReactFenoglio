import { CartWidget } from "./CartWidget";
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


export const NavBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="/">Librería JSX</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title="Filtros" id="collapsible-nav-dropdown">
                            <NavDropdown.Item><Nav.Link as={NavLink} to="/category/Ciencia Ficción">Ciencia Ficción</Nav.Link></NavDropdown.Item>
                            <NavDropdown.Item><Nav.Link as={NavLink} to="/category/Romance">Romance</Nav.Link></NavDropdown.Item>
                            <NavDropdown.Item><Nav.Link as={NavLink} to="/category/Novela Historica">Novela Historica</Nav.Link></NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#"><CartWidget /></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
};
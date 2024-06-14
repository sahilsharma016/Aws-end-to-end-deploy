import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function SiteNav() {
    return(
    <Navbar bg="light" data-bs-theme="light">
        <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/contacts">Contacts</Nav.Link>
                <Nav.Link href="/login">Login</Nav.Link>
                <Nav.Link href="/Register">Register</Nav.Link>
            </Nav>
        </Container>
    </Navbar>
    )
}
export default SiteNav;



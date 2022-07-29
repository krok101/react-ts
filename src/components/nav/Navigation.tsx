import { Nav, Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <Navbar bg="primary" variant="dark">
        <Container>
          <Nav className="me-auto">
            <Link to="/">
              <Nav.Link href="/">Home</Nav.Link>
            </Link>
            <Link to="/posts">
              <Nav.Link href="/posts">Posts</Nav.Link>
            </Link>
          </Nav>
        </Container>
      </Navbar>
  )
}

export default Navigation
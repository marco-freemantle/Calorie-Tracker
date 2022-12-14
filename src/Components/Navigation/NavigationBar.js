import "bootstrap/dist/css/bootstrap.min.css";
import "./NavigationBar.css";
import { Button } from "react-bootstrap";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";

/**
 * @returns The navigation bar at the top of the page
 */
function NavigationBar() {
  /**
   * Logs the user out
   */
  function Logout() {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        console.log("Signout successful");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <Navbar collapseOnSelect expand="lg" bg="something">
      <Container>
        <Navbar.Brand>
          <Link to="/" className="link">
            Calorie Tracker
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className="menu-icon-mobile"
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Link to="/account" className="link">
              Account
            </Link>
            <Link to="/login" className="logout-button">
              <Button variant="link" className="logout-button" onClick={Logout}>
                Log out
              </Button>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;

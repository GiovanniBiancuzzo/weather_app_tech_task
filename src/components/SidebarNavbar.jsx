import { Container, Navbar } from "react-bootstrap";
import { BsHouse, BsSearch, BsGeoAlt, BsHeart } from "react-icons/bs";
import { NavLink, useLocation } from "react-router-dom";

const SidebarNavbar = () => {
    const location = useLocation();

    return (
        <Navbar className="stickyNavbar">
            <Container className="miniNavbar shadowCornersSecondary">
                <Navbar.Brand>
                    <NavLink
                        to={"/"}
                        className={
                            location.pathname === "/"
                                ? "activeLinkNavbar"
                                : "inactiveLinkNavbar"
                        }
                    >
                        <BsHouse />
                    </NavLink>
                </Navbar.Brand>
                <Navbar.Brand>
                    <NavLink
                        to={"/favourites"}
                        className={
                            location.pathname === "/favourites"
                                ? "activeLinkNavbar"
                                : "inactiveLinkNavbar"
                        }
                    >
                        <BsHeart />
                    </NavLink>
                </Navbar.Brand>
                <Navbar.Brand>
                    <NavLink
                        to={"/search"}
                        className={
                            location.pathname === "/search"
                                ? "activeLinkNavbar"
                                : "inactiveLinkNavbar"
                        }
                    >
                        <BsSearch />
                    </NavLink>
                </Navbar.Brand>
                <Navbar.Brand>
                    <NavLink
                        to={"geolocation"}
                        className={
                            location.pathname === "/geolocation"
                                ? "activeLinkNavbar"
                                : "inactiveLinkNavbar"
                        }
                    >
                        <BsGeoAlt />
                    </NavLink>
                </Navbar.Brand>
            </Container>
        </Navbar>
    );
};

export default SidebarNavbar;

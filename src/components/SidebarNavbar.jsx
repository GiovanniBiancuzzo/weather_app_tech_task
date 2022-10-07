import { Col, Container, Navbar } from "react-bootstrap";
import ButtonGeolocation from "./ButtonGeolocation";
import FavouritesCitiesComponent from "./FavouritesCitiesComponent";
import FormSearch from "./FormSearch";
import { useMediaQuery } from "react-responsive";
import { BsHouse, BsSearch, BsGeoAlt } from "react-icons/bs";
import { NavLink, useLocation } from "react-router-dom";

const SidebarNavbar = () => {
    const location = useLocation();

    const isDesktopOrLaptop = useMediaQuery({
        query: "(min-width: 768px)",
    });

    return (
        <>
            {isDesktopOrLaptop ? (
                <Col md={6} lg={4}>
                    <FavouritesCitiesComponent />
                    <FormSearch />
                    <ButtonGeolocation />
                </Col>
            ) : (
                <>
                    <Navbar>
                        <Container className="miniNavbar shadowCorners">
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
                                    to={"/geolocation"}
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
                </>
            )}
        </>
    );
};

export default SidebarNavbar;

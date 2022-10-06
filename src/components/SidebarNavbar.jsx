import { Col } from "react-bootstrap";
import ButtonGeolocation from "./ButtonGeolocation";
import FavouritesCitiesComponent from "./FavouritesCitiesComponent";
import FormSearch from "./FormSearch";

const SidebarNavbar = () => {
    return (
        <Col md={6} lg={4}>
            <FavouritesCitiesComponent />
            <FormSearch />
            <ButtonGeolocation />
        </Col>
    );
};

export default SidebarNavbar;

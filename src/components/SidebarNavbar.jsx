import { Col } from "react-bootstrap";
import ButtonGeolocation from "./ButtonGeolocation";
import FormSearch from "./FormSearch";
import RecentCitiesComponent from "./RecentCitiesComponent";

const SidebarNavbar = () => {
    return (
        <Col md={6} lg={4}>
            <RecentCitiesComponent />
            <FormSearch />
            <ButtonGeolocation />
        </Col>
    );
};

export default SidebarNavbar;

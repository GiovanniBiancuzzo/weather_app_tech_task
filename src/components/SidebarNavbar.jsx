import { Col } from "react-bootstrap";
import FormSearch from "./FormSearch";
import RecentCitiesComponent from "./RecentCitiesComponent";

const SidebarNavbar = () => {
    return (
        <Col md={6} lg={4}>
            <RecentCitiesComponent />
            <FormSearch />
        </Col>
    );
};

export default SidebarNavbar;

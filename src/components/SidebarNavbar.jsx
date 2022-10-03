import FormSearch from "../features/FormSearch";
import RecentCitiesComponent from "./RecentCitiesComponent";
import ButtonGeolocation from "../features/ButtonGeolocation";
import { Col, Row } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";
import MediaQuery from "react-responsive";

const SidebarNavbar = () => {
    const isDesktopOrLaptop = useMediaQuery({ minWidth: 1224 });
    const isBigScreen = useMediaQuery({ minWidth: 1824 });
    const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 });
    const isPortrait = useMediaQuery({ orientation: "portrait" });
    const isRetina = useMediaQuery({ minResolution: "2dppx" });

    return (
        <>
            <Row>
                <RecentCitiesComponent />
            </Row>
            {/* <Row>
                <FormSearch />
            </Row>
            <Row>
                <ButtonGeolocation />
            </Row> */}
        </>
    );
};

export default SidebarNavbar;

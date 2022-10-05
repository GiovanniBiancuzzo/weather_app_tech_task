import { useSelector } from "react-redux";
import CityCard from "./CityCard";
import { BsPlusSquare } from "react-icons/bs";
import { Button, Col, Container, Modal, Row } from "react-bootstrap";
import { useState } from "react";
import FormSearch from "./FormSearch";

const RecentCitiesComponent = () => {
    const recents = useSelector((state) =>
        Object.values(state.weatherInfos.cities)
    );

    const [show, setShow] = useState(false);

    const handleShow = () => setShow(!show);

    return (
        <>
            <Row>
                <h5
                    onClick={handleShow}
                    style={{
                        fontWeight: "900",
                        color: "#01175f",
                        marginTop: "1.5em",
                        textAlign: "center",
                    }}
                >
                    <BsPlusSquare /> Add city
                </h5>
            </Row>
            <Container className="recentCitiesContainer">
                {recents &&
                    recents.map((cityInfo) => (
                        <CityCard key={cityInfo.city.id} cityInfo={cityInfo} />
                    ))}
            </Container>

            <Modal show={show} onHide={handleShow}>
                <Modal.Header closeButton></Modal.Header>
                <Modal.Body>
                    <FormSearch />
                </Modal.Body>
            </Modal>
        </>
    );
};

export default RecentCitiesComponent;

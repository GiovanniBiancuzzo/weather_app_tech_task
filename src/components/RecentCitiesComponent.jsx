import { useSelector } from "react-redux";
import CityCard from "./CityCard";
import { BsPlusSquare, BsFillHouseDoorFill } from "react-icons/bs";
import { Button, Col, Container, Modal, Row } from "react-bootstrap";
import { useState } from "react";
import FormSearch from "../features/FormSearch";
import MediaQuery from "react-responsive";

const RecentCitiesComponent = () => {
    const recents = useSelector((state) =>
        Object.values(state.weatherInfos.cities)
    );

    const [show, setShow] = useState(false);

    const handleShow = () => setShow(!show);

    return (
        <>
            <MediaQuery maxWidth={770}>
                <Col xs={4}>
                    <Button>
                        <BsFillHouseDoorFill />
                        <RecentCitiesComponent />
                    </Button>
                </Col>
            </MediaQuery>
            <MediaQuery minWidth={770}>
                <Col>
                    <Row style={{ textAlign: "center" }}>
                        <h4 onClick={handleShow}>
                            <BsPlusSquare /> Aggiungi città
                        </h4>
                    </Row>
                    <Container className="recentCitiesContainer">
                        {recents &&
                            recents.map((cityInfo) => (
                                <CityCard
                                    key={cityInfo.city.id}
                                    cityInfo={cityInfo}
                                />
                            ))}
                    </Container>
                </Col>

                <Modal show={show} onHide={handleShow}>
                    <Modal.Header closeButton>
                        <Modal.Title></Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <FormSearch />
                    </Modal.Body>
                </Modal>
            </MediaQuery>
        </>
    );
};

export default RecentCitiesComponent;

import { useSelector } from "react-redux";
import CityCard from "./CityCard";
import { BsPlusSquare } from "react-icons/bs";
import { Button, Col, Modal, Row } from "react-bootstrap";
import { useState } from "react";
import FormSearch from "../features/FormSearch";

const RecentCitiesComponent = () => {
    const recents = useSelector((state) =>
        Object.values(state.weatherInfos.cities)
    );

    const [show, setShow] = useState(false);

    const handleShow = () => setShow(!show);

    const addCity = () => {};

    return (
        <>
            <>
                <Row>
                    <h4 onClick={handleShow}>
                        <BsPlusSquare /> Aggiungi città
                    </h4>
                </Row>
                {recents &&
                    recents.map((cityInfo) => (
                        <CityCard key={cityInfo.city.id} cityInfo={cityInfo} />
                    ))}
            </>

            <Modal show={show} onHide={handleShow}>
                <Modal.Header closeButton>
                    <Modal.Title></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FormSearch />
                </Modal.Body>
                {/* <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer> */}
            </Modal>
        </>
    );
};

export default RecentCitiesComponent;

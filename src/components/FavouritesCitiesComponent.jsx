import { Container, Modal, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import CityCard from "./CityCard";
import { BsHeartFill } from "react-icons/bs";
import RecentCitiesComponent from "./RecentCitiesComponent";
import { useState } from "react";
import { getActualWeatherAction } from "../redux/actions";

const FavouritesCitiesComponent = () => {
    const favourites = useSelector((state) => state.favourites.list);

    const [show, setShow] = useState(false);

    const handleShow = () => setShow(!show);

    const dispatch = useDispatch();
    const setActualCity = (cityInfo) =>
        dispatch(getActualWeatherAction(cityInfo));

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
                    <BsHeartFill /> Add to favourites
                </h5>
            </Row>
            <Container className="recentCitiesContainer">
                {favourites &&
                    favourites.map((cityInfo) => (
                        <div
                            onClick={() => {
                                setActualCity(cityInfo);
                            }}
                        >
                            <CityCard
                                key={cityInfo.city.id}
                                cityInfo={cityInfo}
                            />
                        </div>
                    ))}
            </Container>

            <Modal show={show} onHide={handleShow}>
                <Modal.Header closeButton>
                    Click on a city to add it your favourites
                </Modal.Header>
                <Modal.Body>
                    <RecentCitiesComponent />
                </Modal.Body>
            </Modal>
        </>
    );
};

export default FavouritesCitiesComponent;
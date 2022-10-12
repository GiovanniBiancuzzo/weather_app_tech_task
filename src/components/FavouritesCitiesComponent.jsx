import { Container, Modal, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import CityCard from "./CityCard";
import { BsHeartFill } from "react-icons/bs";
import RecentCitiesComponent from "./RecentCitiesComponent";
import { useState } from "react";
import { getActualWeatherAction } from "../redux/actions";

const FavouritesCitiesComponent = (props) => {
    const favourites = useSelector((state) => state.favourites.list);

    const [show, setShow] = useState(false);

    const handleShow = () => setShow(!show);

    const dispatch = useDispatch();

    const setActualCity = (cityInfo) => {
        dispatch(getActualWeatherAction(cityInfo));
    };

    return (
        <>
            <Row>
                <h5
                    onClick={handleShow}
                    style={{
                        marginTop: "1.5em",
                        textAlign: "center",
                        cursor: "pointer",
                    }}
                    className="titles"
                >
                    <BsHeartFill /> Add to favourites
                </h5>
            </Row>
            <Container className="favouritesCitiesContainer">
                {favourites &&
                    favourites.map((cityInfo) => (
                        <div
                            onClick={() => {
                                setActualCity(cityInfo);
                                props.showHome();
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
                    <RecentCitiesComponent handleShow={handleShow} />
                </Modal.Body>
            </Modal>
        </>
    );
};

export default FavouritesCitiesComponent;

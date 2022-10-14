import { Container, Modal, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import CityCard from "./CityCard";
import { BsHeartFill } from "react-icons/bs";
import RecentCitiesComponent from "./RecentCitiesComponent";
import { useState } from "react";
import { getActualWeatherAction } from "../redux/actions";
import MiniTopNavbar from "./MiniTopNavbar";
import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";

const FavouritesCitiesComponent = () => {
    const favourites = useSelector((state) => state.favourites.list);

    const [recents, setRecents] = useState(false);
    const handleRecents = () => setRecents(!recents);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const setActualCity = (cityInfo) => {
        dispatch(getActualWeatherAction(cityInfo));
        navigate("/");
    };

    const isTabletOrMobile = useMediaQuery({
        query: process.env.REACT_APP_RES_SMARTPHONE,
    });

    return (
        <>
            <Row
                style={{
                    textAlign: "center",
                }}
            >
                {isTabletOrMobile && ( //mostra mininavbar con pulsanti indietro e home, solo quando siamo sotto i 768px
                    <MiniTopNavbar navigate={""} />
                )}
                {isTabletOrMobile && (
                    <h2
                        className="titles"
                        style={{
                            color: "#01175f",
                        }}
                    >
                        Welcome
                        <p>Giovanni</p>
                    </h2>
                )}
                <h5
                    onClick={handleRecents}
                    style={{
                        cursor: "pointer",
                    }}
                    className="titles"
                >
                    <BsHeartFill /> Add to favourites
                </h5>
            </Row>
            <Container className="favouritesCitiesContainer">
                {favourites.length > 0 || isTabletOrMobile ? (
                    favourites.map((cityInfo) => (
                        <div onClick={() => setActualCity(cityInfo)}>
                            <CityCard
                                key={cityInfo.city.id}
                                cityInfo={cityInfo}
                            />
                        </div>
                    ))
                ) : (
                    <h4
                        className="titles"
                        style={{
                            textAlign: "center",
                            color: "#01175f",
                        }}
                    >
                        Welcome
                        <p>Giovanni</p>
                    </h4>
                )}
            </Container>

            <Modal show={recents} onHide={handleRecents}>
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

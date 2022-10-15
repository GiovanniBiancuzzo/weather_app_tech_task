import { useEffect } from "react";
import { Button, Container } from "react-bootstrap";
import { BsGeoAlt } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";
import { getGeolocationAction } from "../redux/actions";

const ButtonGeolocation = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleGeolocation = () => {
        navigator.geolocation.getCurrentPosition(
            (res) => {
                dispatch(
                    getGeolocationAction(
                        res.coords.latitude,
                        res.coords.longitude
                    )
                );
                navigate("/");
            },
            () =>
                alert(
                    "Impossibile ottenere la posizione. Cercare manualmente una città oppure concedere i permessi di geolocalizzazione"
                )
        );
    };

    const isTabletOrMobile = useMediaQuery({
        query: process.env.REACT_APP_RES_SMARTPHONE,
    });

    useEffect(() => {
        if (!isTabletOrMobile) {
            //quando ci si trova nel componente buttonGeolocation come route e sopra i 768px, si viene ridirezionati alla root. ovvero dashboard componenent
            navigate("/");
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Container>
            <h4 className="titles">Localization</h4>
            <Button
                onClick={handleGeolocation}
                className="mainGradient miniContainer shadowCorners"
                style={{ border: "none" }}
            >
                <BsGeoAlt />
                <p>Add localization</p>
            </Button>
        </Container>
    );
};

export default ButtonGeolocation;

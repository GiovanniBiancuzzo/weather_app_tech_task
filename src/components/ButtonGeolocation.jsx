import { Button } from "react-bootstrap";
import { BsGeoAlt } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getWeatherInfosAction } from "../redux/actions";

const ButtonGeolocation = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // const key = "428520568944956458551x39764 ";

    const handleGeolocation = () => {
        navigator.geolocation.getCurrentPosition(
            (res) => {
                fetch(
                    `https://geocode.xyz/${res.coords.latitude},${res.coords.longitude}?geoit=json`
                ) //attraverso il reverse coding dell'api, otteniamo il nome della città come query di ricerca
                    .then((result) => result.json())
                    .then((data) => dispatch(getWeatherInfosAction(data.city)))
                    .then(() => navigate("/"))
                    .catch((error) => console.log(error));
            },
            () => alert("impossibile ottenere la posizione")
        );
    };

    return (
        <>
            <h4 className="titles">Localization</h4>
            <Button
                onClick={handleGeolocation}
                className="mainGradient miniContainer shadowCorners"
                style={{ border: "none" }}
            >
                <BsGeoAlt />
                <p>Add localization</p>
            </Button>
        </>
    );
};

export default ButtonGeolocation;

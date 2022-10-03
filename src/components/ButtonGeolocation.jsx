import { Button } from "react-bootstrap";
import { BsGeoAlt } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { getWeatherInfosAction } from "../redux/actions";

const ButtonGeolocation = () => {
    const dispatch = useDispatch();

    const handleGeolocation = () => {
        navigator.geolocation.getCurrentPosition(
            (res) => {
                dispatch(getWeatherInfosAction(res.coords));
            },
            () => alert("impossibile ottenere la posizione")
        );
    };

    return (
        <div>
            <h3 className="titles">Localization</h3>
            <Button
                onClick={handleGeolocation}
                className="mainGradient miniContainer"
                style={{ border: "none" }}
            >
                <BsGeoAlt />
                <p>Add localization</p>
            </Button>
        </div>
    );
};

export default ButtonGeolocation;

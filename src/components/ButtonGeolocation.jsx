import { Button } from "react-bootstrap";
import { BsGeoAlt } from "react-icons/bs";
import { useDispatch } from "react-redux";
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
            () => alert("impossibile ottenere la posizione")
        );
    };

    return (
        <div className="responsivePadding">
            <h4 className="titles">Localization</h4>
            <Button
                onClick={handleGeolocation}
                className="mainGradient miniContainer shadowCorners"
                style={{ border: "none" }}
            >
                <BsGeoAlt />
                <p>Add localization</p>
            </Button>
        </div>
    );
};

export default ButtonGeolocation;

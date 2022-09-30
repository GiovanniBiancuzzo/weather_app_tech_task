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
            <h3>Localization</h3>
            <button onClick={handleGeolocation}>
                <BsGeoAlt />
                <p>Add localization</p>
            </button>
        </div>
    );
};

export default ButtonGeolocation;

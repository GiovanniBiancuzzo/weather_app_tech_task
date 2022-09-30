import { BsGeoAlt } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { getWeatherInfosAction } from "../redux/actions";

const ButtonGeolocation = () => {
    const dispatch = useDispatch();
    // const key = "428520568944956458551x39764 ";

    const handleGeolocation = () => {
        navigator.geolocation.getCurrentPosition(
            (res) => {
                fetch(
                    `https://geocode.xyz/${res.coords.latitude},${res.coords.longitude}?geoit=json`
                ) //attraverso il reverse coding dell'api, otteniamo il nome della città come query di ricerca
                    .then((result) => result.json())
                    .then((data) => dispatch(getWeatherInfosAction(data.city)))
                    .catch((error) => console.log(error));
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

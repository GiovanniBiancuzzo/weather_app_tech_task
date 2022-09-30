import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWeatherInfosAction } from "../redux/actions";

const LogicComponent = () => {
    const [query, setQuery] = useState("");
    const actualCity = useSelector((state) => state.weatherInfos.actualCity);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(getWeatherInfosAction(query));
        setQuery(""); //pulisco l'input field
    };

    useEffect(() => {
        if (navigator.geolocation) {
            //geolocalizzazione
            navigator.geolocation.getCurrentPosition(
                (res) => {
                    const coords = res.coords;
                    dispatch(getWeatherInfosAction(coords));
                    // console.log(latitude, longitude);
                },
                () => alert("impossibile ottenere la posizione")
            );
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <h2>Componente di prova chiamate</h2>
            <form onSubmit={handleSubmit}>
                <label>Cerca città</label>
                <input
                    type="text"
                    value={query}
                    onChange={(e) => {
                        setQuery(e.target.value);
                    }}
                />
            </form>
            {Object.keys(actualCity).length !== 0 ? (
                <>
                    <h3>Città: {actualCity.city.name}</h3>
                    <ul>
                        <li>Temperatura: {actualCity.list[0].main.temp}</li>
                    </ul>
                </>
            ) : (
                <h4>Cerca una città sopra</h4>
            )}
        </>
    );
};

export default LogicComponent;

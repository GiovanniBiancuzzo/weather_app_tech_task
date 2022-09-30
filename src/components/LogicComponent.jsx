import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWeatherInfosAction } from "../redux/actions";
import ButtonGeolocation from "./ButtonGeolocation";

const LogicComponent = () => {
    const [query, setQuery] = useState("");
    const actualCity = useSelector((state) => state.weatherInfos.actualCity);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(getWeatherInfosAction(query));
        setQuery(""); //pulisco l'input field
    };

    return (
        <>
            <h2>Componente di prova chiamate</h2>
            <form onSubmit={handleSubmit}>
                <label>Cerca città oppure premi il pulsante accanto </label>
                <input
                    type="text"
                    value={query}
                    onChange={(e) => {
                        setQuery(e.target.value);
                    }}
                />
                <ButtonGeolocation />
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

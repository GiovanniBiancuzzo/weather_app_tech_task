import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    getActualWeatherAction,
    getWeatherInfosAction,
    setQueryAction,
    setHistoryAction,
} from "../redux/actions";

const LogicComponent = () => {
    const [query, setQuery] = useState("");
    const actualCity = useSelector((state) => state.weatherInfos.actualCity);
    const cities = useSelector((state) => state.weatherInfos.cities);

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const myQuery = capitalizeFirstLetter(query);
        dispatch(setHistoryAction(myQuery));
        dispatch(setQueryAction(myQuery));
        if (Object.keys(cities).includes(myQuery)) {
            //controllo se è una citta già cercata
            dispatch(getActualWeatherAction(cities[myQuery])); //se è già stata cercata, la estraggo dall'elenco delle città nello store
        } else dispatch(getWeatherInfosAction(myQuery)); //se non è stata già cercata faccio partire la fetch
        setQuery(""); //pulisco l'input field
    };

    const dispatch = useDispatch();
    // useEffect(() => dispatch(getWeatherInfosAction(query)), []);

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

import { useSelector } from "react-redux";
import ButtonGeolocation from "../features/ButtonGeolocation";
import FormSearch from "../features/FormSearch";

const LogicComponent = () => {
    const actualCity = useSelector((state) => state.weatherInfos.actualCity);

    return (
        <>
            <h2>Componente di prova chiamate</h2>
            <FormSearch />
            <ButtonGeolocation />
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

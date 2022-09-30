import { useSelector } from "react-redux";
import CityCard from "./CityCard";
import { BsPlusSquare } from "react-icons/bs";

const RecentCitiesComponent = () => {
    const recents = useSelector((state) => state.weatherInfos.recents);

    const addCity = () => {};

    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <h4 onClick={addCity}>
                <BsPlusSquare /> Aggiungi città
            </h4>
            {recents &&
                recents.map((cityInfo) => (
                    <CityCard key={cityInfo.city.id} cityInfo={cityInfo} />
                ))}
        </div>
    );
};

export default RecentCitiesComponent;

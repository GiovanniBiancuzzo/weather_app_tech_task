import { useDispatch, useSelector } from "react-redux";
import CityCard from "./CityCard";
import { addToFavouritesAction, setActualCityAction } from "../redux/actions";
import { useNavigate } from "react-router-dom";

const RecentCitiesComponent = (props) => {
    const recents = useSelector((state) =>
        Object.values(state.weatherInfos.history).reverse()
    );

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const addFavCity = (cityInfo) => {
        dispatch(addToFavouritesAction(cityInfo));
        dispatch(setActualCityAction(cityInfo));
        navigate("/");
    };

    return (
        <div className="recentCitiesContainer">
            {recents.length > 0 ? (
                recents.map((cityInfo) => (
                    <div onClick={() => addFavCity(cityInfo)}>
                        <CityCard key={cityInfo.city.id} cityInfo={cityInfo} />
                    </div>
                ))
            ) : (
                <span>Search a city before adding to favourites.</span>
            )}
        </div>
    );
};

export default RecentCitiesComponent;

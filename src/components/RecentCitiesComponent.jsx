import { useDispatch, useSelector } from "react-redux";
import CityCard from "./CityCard";
import { Container } from "react-bootstrap";
import { addToFavouritesAction } from "../redux/actions";

const RecentCitiesComponent = () => {
    const recents = useSelector((state) =>
        Object.values(state.weatherInfos.cities).reverse()
    );

    const dispatch = useDispatch();
    const addFavCity = (cityInfo) => dispatch(addToFavouritesAction(cityInfo));

    return (
        <>
            <Container className="recentCitiesContainer">
                {recents.length > 0 ? (
                    recents.map((cityInfo) => (
                        <div
                            onClick={() => {
                                addFavCity(cityInfo);
                            }}
                        >
                            <CityCard
                                key={cityInfo.city.id}
                                cityInfo={cityInfo}
                            />
                        </div>
                    ))
                ) : (
                    <span>Search a city before adding to favourites.</span>
                )}
            </Container>
        </>
    );
};

export default RecentCitiesComponent;

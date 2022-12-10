import { useSelector } from 'react-redux';
import CityCard from './CityCard';

const RecentCitiesComponent = () => {
    const recents = useSelector((state) =>
        Object.values(state.weatherInfos.history).reverse()
    );

    return (
        <div className="recentCitiesContainer">
            {recents.length > 0 ? (
                recents.map((cityInfo) => (
                    <CityCard key={cityInfo.city.id} cityInfo={cityInfo} />
                ))
            ) : (
                <span>Search a city before adding to favourites.</span>
            )}
        </div>
    );
};

export default RecentCitiesComponent;

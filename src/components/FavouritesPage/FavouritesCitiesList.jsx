import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import CityCard from '../Modules/CityCard';

const FavouritesCitiesList = () => {
    const favourites = useSelector((state) => state.favourites.cities);

    return (
        <Container className="favouritesCitiesContainer">
            {favourites.length > 0 ? (
                favourites.map((cityInfo) => (
                    <CityCard key={cityInfo.city.id} cityInfo={cityInfo} />
                ))
            ) : (
                <h4
                    className="titles"
                    style={{
                        textAlign: 'center',
                        color: '#01175f',
                    }}
                >
                    Welcome
                    <p>Giovanni</p>
                </h4>
            )}
        </Container>
    );
};

export default FavouritesCitiesList;

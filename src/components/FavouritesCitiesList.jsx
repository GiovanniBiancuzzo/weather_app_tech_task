import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import CityCard from './CityCard';
import { useMediaQuery } from 'react-responsive';

const FavouritesCitiesList = () => {
    const favourites = useSelector((state) => state.favourites.cities);

    const isTabletOrMobile = useMediaQuery({
        query: process.env.REACT_APP_RES_SMARTPHONE,
    });

    return (
        <Container className="favouritesCitiesContainer">
            {favourites.length > 0 || isTabletOrMobile ? (
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

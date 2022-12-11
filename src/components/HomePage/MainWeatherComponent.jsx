import { useMediaQuery } from 'react-responsive';
import FloatingTempMainWeatherCard from './FloatingTempMainWeatherCard';
import MainWeatherCard from './MainWeatherCard';

const MainWeatherComponent = ({ actualCity }) => {
    const isTabletOrMobile = useMediaQuery({
        query: '(max-width: 768px)',
    });

    return (
        <div
            className={'mainCardContainer shadowCorners'}
            style={{
                backgroundImage: `url(${actualCity.image}) `,
            }}
        >
            <MainWeatherCard
                actualCity={actualCity}
                isTabletOrMobile={isTabletOrMobile}
            />

            <FloatingTempMainWeatherCard today={actualCity.list[0]} />
        </div>
    );
};

export default MainWeatherComponent;

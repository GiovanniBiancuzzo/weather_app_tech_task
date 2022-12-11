import { Image } from 'react-bootstrap';
import { useMediaQuery } from 'react-responsive';
import { switchGradient } from '../../functions/functions';

const FloatingTempMainWeatherCard = ({ today }) => {
    const isTabletOrMobile = useMediaQuery({
        query: process.env.REACT_APP_RES_SMARTPHONE,
    });

    return (
        <div
            className={
                isTabletOrMobile
                    ? 'temperautureSection'
                    : `temperautureSection ${switchGradient(
                          today.weather[0].icon
                      )}`
            }
        >
            <div className="tempFont">{Math.trunc(today.main.temp)}°</div>
            <Image
                alt="weatherCondition"
                src={`https://openweathermap.org/img/wn/${today.weather[0].icon}@2x.png`}
                fluid
            />
        </div>
    );
};

export default FloatingTempMainWeatherCard;

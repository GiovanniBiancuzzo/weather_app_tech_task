import { Card, Image } from "react-bootstrap";
import format from "date-fns/format";
import { useMediaQuery } from "react-responsive";
import switchGradient from "../functions/switchGradient";

const MainWeatherCard = ({ actualCity }) => {
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const isTabletOrMobile = useMediaQuery({
        query: process.env.REACT_APP_RES_SMARTPHONE,
    });

    return (
        <div
            className={
                isTabletOrMobile
                    ? "mainCardContainer"
                    : "mainCardContainer shadowCorners"
            }
            style={{ position: "relative" }}
        >
            <Card className="mainCard">
                <Card.Body>
                    <Card.Title
                        className={isTabletOrMobile ? "themedTitles" : "titles"}
                        as="h3"
                    >
                        {actualCity.city.name}, {actualCity.city.country}
                    </Card.Title>
                    <Card.Text style={{ fontWeight: "bold" }}>
                        {format(
                            new Date(actualCity.list[0].dt_txt),
                            "EEEE d, LLLL"
                        )}
                    </Card.Text>
                    <Card.Text>
                        {capitalizeFirstLetter(
                            actualCity.list[0].weather[0].description
                        )}
                    </Card.Text>
                </Card.Body>
            </Card>
            <div
                className={
                    isTabletOrMobile
                        ? "temperautureSection"
                        : `temperautureSection ${switchGradient(
                              actualCity.list[0].weather[0].icon
                          )}`
                }
            >
                <div className="tempFont">
                    {Math.trunc(actualCity.list[0].main.temp)}°
                </div>
                <Image
                    alt="weatherCondition"
                    src={`https://openweathermap.org/img/wn/${actualCity.list[0].weather[0].icon}@2x.png`}
                    fluid
                />
            </div>
        </div>
    );
};

export default MainWeatherCard;

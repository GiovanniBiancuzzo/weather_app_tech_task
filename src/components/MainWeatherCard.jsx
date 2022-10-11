import { Card, Col, Container, Image } from "react-bootstrap";
import { useSelector } from "react-redux";
import format from "date-fns/format";
import MediaQuery from "react-responsive";

const MainWeatherCard = () => {
    const actualCity = useSelector((state) => state.weatherInfos.actualCity);

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    return (
        <>
            {Object.keys(actualCity).length !== 0 ? (
                <>
                    <MediaQuery maxWidth={768}></MediaQuery>
                    {
                        // <MediaQuery minWidth={768}>
                    }
                    <div
                        className="mainCardContainer shadowCorners"
                        style={{ position: "relative" }}
                    >
                        <div className="temperautureSection mainGradient">
                            <div className="tempFont">
                                {Math.trunc(actualCity.list[0].main.temp)}°
                            </div>
                            <Image
                                alt="weatherCondition"
                                src={`http://openweathermap.org/img/wn/${actualCity.list[0].weather[0].icon}@2x.png`}
                                fluid
                            />
                        </div>
                        <Card className="mainCard">
                            <Card.Body>
                                <Card.Title className="titles" as="h3">
                                    {actualCity.city.name},{" "}
                                    {actualCity.city.country}
                                </Card.Title>
                                <Card.Text style={{ fontWeight: "bold" }}>
                                    {format(
                                        new Date(actualCity.list[0].dt_txt),
                                        "EEEE d, LLLL"
                                    )}
                                </Card.Text>
                                <Card.Text>
                                    {capitalizeFirstLetter(
                                        actualCity.list[0].weather[0]
                                            .description
                                    )}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    {/* </MediaQuery> */}
                </>
            ) : (
                <p>Costruire il componente caricamento</p>
            )}
        </>
    );
};

export default MainWeatherCard;

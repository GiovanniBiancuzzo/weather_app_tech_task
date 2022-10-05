import { Card, Col, Image, Row } from "react-bootstrap";
import { getActualWeatherAction } from "../redux/actions";
import format from "date-fns/format";
import { useDispatch } from "react-redux";

const CityCard = ({ cityInfo }) => {
    const dispatch = useDispatch();
    const setActualCity = () => dispatch(getActualWeatherAction(cityInfo));

    return (
        <Card
            onClick={setActualCity}
            className="miniCard shadowCorners mainGradient"
        >
            <Card.Body>
                <Row>
                    <Col xs={4}>
                        <h4 style={{ fontWeight: "900" }}>
                            {cityInfo.city.name}
                        </h4>
                        <p>
                            {format(
                                new Date(cityInfo.list[0].dt_txt),
                                "EEEE d, LLLL"
                            )}
                        </p>
                        {/* <small>
                            {format(new Date(cityInfo.list[0].dt), "h:mm aaaa")}
                        </small> */}
                        {
                            //meglio la data attuale
                        }
                        <small>{format(new Date(), "h:mm aaaa")}</small>
                    </Col>
                    <Col xs={4}>
                        <Image
                            fluid
                            src={`http://openweathermap.org/img/wn/${cityInfo.list[0].weather[0].icon}@2x.png`}
                        />
                    </Col>
                    <Col
                        xs={4}
                        className="tempFont"
                        style={{ textAlign: "center", margin: "auto 0" }}
                    >
                        {Math.trunc(cityInfo.list[0].main.temp)}°
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
};

export default CityCard;

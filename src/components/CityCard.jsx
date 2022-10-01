import { Card, Col, Row } from "react-bootstrap";
import { getActualWeatherAction } from "../redux/actions";
import format from "date-fns/format";

const CityCard = ({ cityInfo }) => {
    const setActualCity = () => getActualWeatherAction(cityInfo);

    return (
        <Card onClick={setActualCity} className="p-3 m-3">
            <Row>
                <Col xs={4}>
                    <h3>{cityInfo.city.name}</h3>
                    <h6>
                        {format(
                            new Date(cityInfo.list[0].dt_txt),
                            "EEEE d, LLLL"
                        )}
                    </h6>
                    {/* <small>
                        {format(new Date(cityInfo.list[0].dt), "h:mm aaaa")}
                    </small> */}
                    {
                        //meglio la data attuale
                    }
                    <small>{format(new Date(), "h:mm aaaa")}</small>
                </Col>
                <Col xs={4}>
                    <Card.Img
                        src={`http://openweathermap.org/img/wn/${cityInfo.list[0].weather[0].icon}@2x.png`}
                    />
                </Col>
                <Col xs={4}>{Math.trunc(cityInfo.list[0].main.temp)}°</Col>
            </Row>
        </Card>
    );
};

export default CityCard;

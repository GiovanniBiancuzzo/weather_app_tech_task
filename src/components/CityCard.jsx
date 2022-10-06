import { Card, Col, Image, Row } from "react-bootstrap";
import format from "date-fns/format";

const CityCard = (props) => {
    return (
        <Card className="miniCard shadowCorners mainGradient">
            <Card.Body>
                <Row>
                    <Col xs={4}>
                        <h4 style={{ fontWeight: "900" }}>
                            {props.cityInfo.city.name}
                        </h4>
                        <p>
                            {format(
                                new Date(props.cityInfo.list[0].dt_txt),
                                "EEEE d, LLLL"
                            )}
                        </p>
                        {/* <small>
                            {format(new Date(props.cityInfo.list[0].dt), "h:mm aaaa")}
                        </small> */}
                        {
                            //meglio la data attuale
                        }
                        <small>{format(new Date(), "h:mm aaaa")}</small>
                    </Col>
                    <Col xs={4}>
                        <Image
                            fluid
                            src={`http://openweathermap.org/img/wn/${props.cityInfo.list[0].weather[0].icon}@2x.png`}
                        />
                    </Col>
                    <Col
                        xs={4}
                        className="tempFont"
                        style={{ textAlign: "center", margin: "auto 0" }}
                    >
                        {Math.trunc(props.cityInfo.list[0].main.temp)}°
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
};

export default CityCard;

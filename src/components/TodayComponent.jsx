import { format } from "date-fns";
import { Col, ListGroup, ListGroupItem, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { BsFillCircleFill, BsAlignBottom } from "react-icons/bs";

const TodayComponent = () => {
    const actualCityToday = useSelector((state) =>
        state.weatherInfos.actualCity.list.slice(0, 8)
    );
    return (
        <div className="my-4">
            <h4 className="titles">Today</h4>
            <div className="todayContainer mainGradient shadowCorners">
                {actualCityToday.map((singleWeather) => (
                    <Row key={singleWeather.dt}>
                        <Row>
                            <Col>{Math.trunc(singleWeather.main.temp)}°</Col> -{" "}
                            <Col>
                                <BsFillCircleFill />
                            </Col>{" "}
                            -{" "}
                            <Col>
                                {format(
                                    new Date(singleWeather.dt_txt),
                                    "h aaaa"
                                )}
                            </Col>
                        </Row>
                        <Row>
                            <BsAlignBottom />
                        </Row>
                    </Row>
                ))}
            </div>
        </div>
    );
};

export default TodayComponent;

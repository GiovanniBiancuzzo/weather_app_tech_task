import { format } from "date-fns";
import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { BsFillCircleFill, BsAlignBottom } from "react-icons/bs";

const TodayComponent = () => {
    const actualCityToday = useSelector((state) =>
        state.weatherInfos.actualCity.list?.slice(0, 8)
    ); //viste le limitazioni dell'api nella sua versione grauita le informazioni fetchate sono intervallate ogni 3 ore. Per ottenere un ciclo di 24 ore, prenderò i primi 8 oggetti, 3*8=24

    return (
        <div>
            <h4 className="titles">Today</h4>
            <div className="todayContainer mainGradient shadowCorners">
                {actualCityToday ? (
                    actualCityToday.map((day) => (
                        <Row key={day.dt}>
                            <Row>
                                <Col>{Math.trunc(day.main.temp)}°</Col> -{" "}
                                <Col>
                                    <BsFillCircleFill />
                                </Col>{" "}
                                -{" "}
                                <Col>
                                    {format(new Date(day.dt_txt), "h aaaa")}
                                </Col>
                            </Row>
                            <Row>
                                <BsAlignBottom />
                            </Row>
                        </Row>
                    ))
                ) : (
                    <span>caricamento</span>
                )}
            </div>
        </div>
    );
};

export default TodayComponent;

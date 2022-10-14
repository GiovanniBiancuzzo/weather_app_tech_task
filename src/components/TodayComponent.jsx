import { format } from "date-fns";
import { Col, Row } from "react-bootstrap";
import { BsFillCircleFill, BsAlignBottom, BsAlignEnd } from "react-icons/bs";
import { useMediaQuery } from "react-responsive";
import switchGradient from "../functions/switchGradient";

const TodayComponent = ({ actualCity }) => {
    const actualCityToday = actualCity.list.slice(0, 8); //viste le limitazioni dell'api nella sua versione grauita le informazioni fetchate sono intervallate ogni 3 ore. Per ottenere un ciclo di 24 ore, prenderò i primi 8 oggetti, 3*8=24

    const isTabletOrMobile = useMediaQuery({
        query: process.env.REACT_APP_RES_SMARTPHONE,
    });

    return (
        <>
            <h4 className={isTabletOrMobile ? "themedTitles" : "titles"}>
                Today
            </h4>
            <Col
                className={
                    isTabletOrMobile
                        ? "todayContainer"
                        : `todayContainer ${switchGradient(
                              actualCity.list[0].weather[0].icon
                          )} shadowCorners`
                }
            >
                {actualCityToday.map((day) => (
                    <Row key={day.dt}>
                        <Col>{Math.trunc(day.main.temp)}°</Col> -{" "}
                        <Col>
                            {isTabletOrMobile ? (
                                <Row
                                    style={{
                                        flexWrap: "nowrap",
                                    }}
                                >
                                    <BsFillCircleFill />
                                    <BsAlignEnd />
                                </Row>
                            ) : (
                                <Row>
                                    <BsFillCircleFill />
                                    <BsAlignBottom />
                                </Row>
                            )}
                        </Col>{" "}
                        - <Col>{format(new Date(day.dt_txt), "p")}</Col>
                    </Row>
                ))}
            </Col>
        </>
    );
};

export default TodayComponent;

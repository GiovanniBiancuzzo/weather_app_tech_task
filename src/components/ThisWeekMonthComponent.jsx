import { useState } from "react";
import { Carousel, Col, Row, Tab, Tabs } from "react-bootstrap";
import MonthDetails from "./MonthDetails";
import WeekElementCarousel from "./WeekElementCarousel";
import { useMediaQuery } from "react-responsive";

const ThisWeekMonthComponent = ({ actualCity }) => {
    const actualCityWeek = actualCity.list.filter(
        (el, index) => index % 8 === 0
    ); //visto che ogni 8 elementi fetchati abbiamo un ciclo di 24 ore
    const [actualCityDay, setActualCityDay] = useState(actualCityWeek[0]); //giorno per giorno, info dettagliate, di default, il primo giorno

    const [key, setKey] = useState("thisWeek");
    const handleDay = (day) => {
        setActualCityDay(day);
        setKey("thisMonth");
    };

    const isTabletOrMobile = useMediaQuery({
        query: process.env.REACT_APP_RES_SMARTPHONE,
    });

    // const actualCityTest = actualCityWeek.map((el, index) =>
    //     Array.fill([actualCityWeek[0]], 0, actualCityWeek % 3)
    // );
    // const carousel = document.getElementById("carousel");
    return (
        <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className={`titles thisWeekMonthContainer ${
                key === "thisWeek" ? "tabWeekActive" : "tabWeekInactive"
            }`}
        >
            <Tab
                eventKey="thisWeek"
                title="This week"
                className={
                    isTabletOrMobile
                        ? "p-1"
                        : "mainGradient shadowCornersTabWeek p-2"
                }
            >
                <Carousel>
                    {/* {actualCityWeek.map((pages, index) => (
                        <>
                            if (index % 3 === 0){" "}
                            {
                                <Carousel.Item key={index}>
                                    <Row className="threeDayRow">
                                        {
                                            <Col
                                                xs={4}
                                                onClick={() =>
                                                    handleDay(
                                                        actualCityWeek[index]
                                                    )
                                                }
                                            >
                                                <WeekElementCarousel
                                                    day={actualCityWeek[index]}
                                                    key={
                                                        actualCityWeek[index].dt
                                                    }
                                                />
                                            </Col>
                                        }
                                    </Row>
                                </Carousel.Item>
                            }{" "}
                            else{" "}
                            {
                                <Row className="threeDayRow">
                                    {
                                        <Col
                                            xs={4}
                                            onClick={() =>
                                                handleDay(actualCityWeek[index])
                                            }
                                        >
                                            <WeekElementCarousel
                                                day={actualCityWeek[index]}
                                                key={actualCityWeek[index].dt}
                                            />
                                        </Col>
                                    }
                                </Row>
                            }
                        </>
                    ))} */}
                    <Carousel.Item>
                        <Row className="threeDayRow">
                            {actualCityWeek
                                .slice(0, 3)
                                .map((day, indexCarousel) => (
                                    <Col xs={4} onClick={() => handleDay(day)}>
                                        <WeekElementCarousel
                                            day={day}
                                            key={day.dt}
                                        />
                                    </Col>
                                ))}
                        </Row>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Row className="threeDayRow">
                            {actualCityWeek
                                .slice(3, 6)
                                .map((day, indexCarousel) => (
                                    <Col xs={4} onClick={() => handleDay(day)}>
                                        <WeekElementCarousel
                                            day={day}
                                            key={day.dt}
                                        />
                                    </Col>
                                ))}
                        </Row>
                    </Carousel.Item>
                </Carousel>
            </Tab>

            <Tab
                eventKey="thisMonth"
                title="This month"
                className={
                    isTabletOrMobile ? "p-2" : "mainGradient shadowCorners p-3"
                }
            >
                <MonthDetails day={actualCityDay} />
            </Tab>
        </Tabs>
    );
};

export default ThisWeekMonthComponent;

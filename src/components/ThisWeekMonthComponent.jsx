import { useState } from "react";
import { Card, Carousel, Col, Row, Tab, Tabs } from "react-bootstrap";
import { useSelector } from "react-redux";
import MonthDetails from "./MonthDetails";
import WeekElementCarousel from "./WeekElementCarousel";

const ThisWeekMonthComponent = () => {
    // const actualCity = useSelector(
    //     (state) => state.weatherInfos.actualCity.list
    // );

    const actualCityWeek = useSelector((state) =>
        state.weatherInfos.actualCity.list?.filter(
            (el, index) => index % 8 === 0
        )
    ); //visto che ogni 8 elementi fetchati abbiamo un ciclo di 24 ore

    const [actualCityDay, setActualCityDay] = useState(null);

    const [key, setKey] = useState("thisWeek");

    return (
        <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className=" titles thisWeekMonthContainer"
        >
            {actualCityWeek ? (
                <Tab
                    eventKey="thisWeek"
                    title="This week"
                    className="mainGradient shadowCorners"
                >
                    <Carousel>
                        {/* {actualCityWeek.map((pages, index) => (
                            <Carousel.Item
                                className="mainGradient shadowCorners"
                                key={index}
                            >
                                <Row>
                                    {actualCityWeek
                                        .slice(
                                            Math.floor(index / 3) * 3,
                                            Math.floor(index / 3) * 3 + 3
                                        )
                                        .map((day, indexCarousel) => (
                                            <WeekElementCarousel
                                                day={day}
                                                key={day.dt}
                                            />
                                        ))}
                                </Row>
                            </Carousel.Item>
                        ))} */}
                        <Carousel.Item className="mainGradient shadowCorners">
                            <Row>
                                {actualCityWeek
                                    .slice(0, 3)
                                    .map((day, indexCarousel) => (
                                        <Col
                                            xs={4}
                                            onClick={() => {
                                                setActualCityDay(day);
                                                setKey("thisMonth");
                                            }}
                                        >
                                            <WeekElementCarousel
                                                day={day}
                                                key={day.dt}
                                            />
                                        </Col>
                                    ))}
                            </Row>
                        </Carousel.Item>
                        <Carousel.Item className="mainGradient shadowCorners">
                            <Row>
                                {actualCityWeek
                                    .slice(3, 6)
                                    .map((day, indexCarousel) => (
                                        <Col
                                            xs={4}
                                            onClick={() => {
                                                setActualCityDay(day);
                                                setKey("thisMonth");
                                            }}
                                        >
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
            ) : (
                <span>Caricamento</span>
            )}
            {actualCityDay ? (
                <Tab
                    eventKey="thisMonth"
                    title="This month"
                    className="mainGradient shadowCorners p-4"
                    style={{ height: "37vh" }}
                >
                    <MonthDetails day={actualCityDay} />
                </Tab>
            ) : (
                <span>Caricamento</span>
            )}
        </Tabs>
    );
};

export default ThisWeekMonthComponent;

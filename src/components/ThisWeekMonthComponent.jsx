import { useState } from "react";
import { Carousel, Col, Row, Tab, Tabs } from "react-bootstrap";
import { useSelector } from "react-redux";
import MonthDetails from "./MonthDetails";
import WeekElementCarousel from "./WeekElementCarousel";
import { useMediaQuery } from "react-responsive";

const ThisWeekMonthComponent = () => {
    // const actualCity = useSelector(
    //     (state) => state.weatherInfos.actualCity.list
    // );

    const actualCityWeek = useSelector((state) =>
        state.weatherInfos.actualCity.list?.filter(
            (el, index) => index % 8 === 0
        )
    ); //visto che ogni 8 elementi fetchati abbiamo un ciclo di 24 ore

    const [actualCityDay, setActualCityDay] = useState(actualCityWeek[0]); //giorno per giorno, info dettagliate, di default, il primo giorno
    const [key, setKey] = useState("thisWeek");

    const isTabletOrMobile = useMediaQuery({
        query: process.env.REACT_APP_RES_SMARTPHONE,
    });

    return (
        <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className="titles thisWeekMonthContainer"
        >
            <Tab
                eventKey="thisWeek"
                title="This week"
                className={
                    isTabletOrMobile ? "" : "mainGradient shadowCorners p-4"
                }
                style={{ height: "37vh" }}
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
                    <Carousel.Item
                        className={
                            isTabletOrMobile ? "" : "mainGradient shadowCorners"
                        }
                    >
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
                    <Carousel.Item
                        className={
                            isTabletOrMobile ? "" : "mainGradient shadowCorners"
                        }
                    >
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

            <Tab
                eventKey="thisMonth"
                title="This month"
                className={
                    isTabletOrMobile ? "" : "mainGradient shadowCorners p-4"
                }
                style={{ height: "37vh" }}
            >
                <MonthDetails day={actualCityDay} />
            </Tab>
        </Tabs>
    );
};

export default ThisWeekMonthComponent;

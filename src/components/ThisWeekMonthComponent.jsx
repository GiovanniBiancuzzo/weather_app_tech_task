import { useState } from "react";
import { Carousel, Col, Row, Tab, Tabs } from "react-bootstrap";
import { useSelector } from "react-redux";
import MonthDetails from "./MonthDetails";
import WeekElementCarousel from "./WeekElementCarousel";

const ThisWeekMonthComponent = () => {
    const calcAverage = (array, element) => {
        const count = {};

        switch (element) {
            // case "wind":
            //     for (const el of array.wind) {
            //         if (count[el]) {
            //             count[el] += 1;
            //         } else {
            //             count[el] = 1;
            //         }
            //     }
            //     return count.values().sort().slice(0, 1);
            // case "weather[0]":
            //     for (const el of element.icon) {
            //         if (count[el]) {
            //             count[el] += 1;
            //         } else {
            //             count[el] = 1;
            //         }
            //     }
            //     return count.values().sort().slice(0, 1);
            default:
                return Math.trunc(
                    array.reduce((acc, curr) => acc + curr.main[element], 0) /
                        array.length
                );
        }
    };

    const actualCity = useSelector(
        (state) => state.weatherInfos.actualCity.list
    );

    const actualCityWeek = actualCity.filter((el, index) => index % 8 === 0);
    const actualCityMonth = {
        temperature: calcAverage(actualCity, "temp"),
        lows: calcAverage(actualCity, "temp_min"),
        highs: calcAverage(actualCity, "temp_max"),
        humidity: calcAverage(actualCity, "humidity"),
        windSpeed: calcAverage(actualCity, "wind"),
        // icon: calcAverage(actualCity, "weather[0]"),
    };
    // const averageTemperature = Math.trunc(
    //     actualCity.reduce((acc, curr) => acc + curr.main.temp, 0) /
    //         actualCity.length
    // );

    // const actualCityWeekLength = actualCityWeek.length;
    // const carouselItemsPages = Math.ceil(actualCityWeek.length / 3);
    // const actualCityWeekLengthSpare = actualCityWeek.length % 3;

    const [key, setKey] = useState("thisWeek");
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className="mb-3 secondGradient"
        >
            <Tab
                eventKey="thisWeek"
                title="This week"
                className="secondGradient"
            >
                <Carousel activeIndex={index} onSelect={handleSelect}>
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
                                    <Col xs={4}>
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
                                    <Col xs={4}>
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
                className="secondGradient"
            >
                <div className="p-4">
                    <MonthDetails month={actualCityMonth} />
                </div>
            </Tab>
        </Tabs>
    );
};

export default ThisWeekMonthComponent;

import { format } from "date-fns";
import { useState } from "react";
import { Carousel, Col, Row } from "react-bootstrap";

const WeekElementCarousel = ({ day }) => {
    return (
        <Row className="weekElement shadowCorners">
            <h6>{format(new Date(day.dt_txt), "EEEE")}</h6>

            <p className="tempFont">{Math.trunc(day.main.temp)}°</p>

            <img
                className="d-block w-100"
                src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
                alt="weather logo"
            />
        </Row>
    );
};

export default WeekElementCarousel;

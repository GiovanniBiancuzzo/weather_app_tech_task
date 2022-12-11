import { useState } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import MonthDetails from './MonthDetails';
import { useMediaQuery } from 'react-responsive';
import CarouselComponent from './CarouselComponent';

const ThisWeekMonthComponent = ({ actualCity }) => {
    const actualCityWeek = actualCity.list.filter(
        (el, index) => index % 8 === 0
    ); //visto che ogni 8 elementi fetchati abbiamo un ciclo di 24 ore
    const [actualCityDay, setActualCityDay] = useState(actualCityWeek[0]); //giorno per giorno, info dettagliate, di default, il primo giorno

    const [key, setKey] = useState('thisWeek');
    const handleDay = (day) => {
        setActualCityDay(day);
        setKey('thisMonth');
    };

    const isTabletOrMobile = useMediaQuery({
        query: '(max-width: 768px)',
    });

    return (
        <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className={`titles thisWeekMonthContainer ${
                key === 'thisWeek' ? 'tabWeekActive' : 'tabWeekInactive'
            }`}
        >
            <Tab
                eventKey="thisWeek"
                title="This week"
                className={
                    isTabletOrMobile
                        ? 'p-1'
                        : 'mainGradient shadowCornersTabWeek p-2'
                }
            >
                <CarouselComponent
                    actualCity={actualCity}
                    setActualCityDay={setActualCityDay}
                    handleDay={handleDay}
                />
            </Tab>

            <Tab
                eventKey="thisMonth"
                title="This month"
                className={
                    isTabletOrMobile ? 'p-2' : 'mainGradient shadowCorners p-3'
                }
            >
                <MonthDetails day={actualCityDay} />
            </Tab>
        </Tabs>
    );
};

export default ThisWeekMonthComponent;

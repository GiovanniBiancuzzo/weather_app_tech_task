import { Card } from 'react-bootstrap';
import format from 'date-fns/format';
import { capitalizeFirstLetter } from '../../functions/functions';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

const MainWeatherCard = (props) => {
    return (
        <Card className="mainCard">
            <Card.Body>
                <Card.Title
                    className={
                        props.isTabletOrMobile ? 'themedTitles' : 'titles'
                    }
                    as="h3"
                >
                    {props.actualCity.city.name},{' '}
                    {props.actualCity.city.country}
                </Card.Title>
                <Card.Text style={{ fontWeight: 'bold' }}>
                    {format(
                        new Date(props.actualCity.list[0].dt_txt),
                        'EEEE d, LLLL'
                    )}
                </Card.Text>
                <Card.Text>
                    {capitalizeFirstLetter(
                        props.actualCity.list[0].weather[0].description
                    )}
                </Card.Text>
                <p className="elapesdTime">
                    {formatDistanceToNow(
                        new Date(props.actualCity.list[0].dt_txt)
                    )}
                </p>
            </Card.Body>
        </Card>
    );
};

export default MainWeatherCard;

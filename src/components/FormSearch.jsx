import { useEffect, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { BsSearch } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { getWeatherInfosAction } from '../redux/actions';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import RecentCitiesComponent from './RecentCitiesComponent';

const FormSearch = () => {
    const [query, setQuery] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const isTabletOrMobile = useMediaQuery({
        query: process.env.REACT_APP_RES_SMARTPHONE,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(getWeatherInfosAction(query)); //dispatch della ricerca
        navigate('/'); //finita la ricerca, mi faccio rimandare alla home
        setQuery(''); //pulisco l'input field
    };

    useEffect(() => {
        if (!isTabletOrMobile) {
            //quando ci si trova nel componente formsearch come route e sopra i 768px, si viene ridirezionati alla root. ovvero dashboard componenent
            navigate('/');
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Container>
            <h4 className="titles">Search</h4>
            <Form
                onSubmit={handleSubmit}
                role="search"
                className="miniContainer"
                style={{ position: 'relative' }}
            >
                <Form.Control
                    className="searchForm shadowCorners"
                    type="search"
                    required
                    autoComplete="on"
                    aria-label="search city"
                    pattern="^[A-zÀ-ú\s\,\-]*$"
                    value={query}
                    placeholder="ex: Miami"
                    onChange={(e) => {
                        setQuery(e.target.value);
                    }}
                ></Form.Control>
                <Button className="mainGradient searchBtn" type="submit">
                    <BsSearch />
                </Button>
            </Form>
            {isTabletOrMobile && (
                <>
                    <h4 className="titles">History</h4>
                    <RecentCitiesComponent />
                </>
            )}
        </Container>
    );
};

export default FormSearch;

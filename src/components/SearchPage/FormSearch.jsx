import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { BsSearch } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { getWeatherInfosAction } from '../../redux/actions';
import { useNavigate } from 'react-router-dom';

const FormSearch = () => {
    const [query, setQuery] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = (e) => {
        e.preventDefault();
        setQuery(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(getWeatherInfosAction(query)); //dispatch della ricerca
        navigate('/'); //finita la ricerca, mi faccio rimandare alla home
        setQuery(''); //pulisco l'input field
    };

    return (
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
                onChange={handleChange}
            ></Form.Control>
            <Button className="mainGradient searchBtn" type="submit">
                <BsSearch />
            </Button>
        </Form>
    );
};

export default FormSearch;

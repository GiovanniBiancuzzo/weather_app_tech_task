import { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import FormSearch from './FormSearch';
import RecentCitiesComponent from './RecentCitiesComponent';

const SearchComponent = () => {
    const navigate = useNavigate();

    const isTabletOrMobile = useMediaQuery({
        query: '(max-width: 768px)',
    });

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
            <FormSearch />
            {isTabletOrMobile && (
                <>
                    <h4 className="titles">History</h4>
                    <RecentCitiesComponent />
                </>
            )}
        </Container>
    );
};

export default SearchComponent;

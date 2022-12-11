import { Modal, Row } from 'react-bootstrap';
import { BsHeartFill } from 'react-icons/bs';
import RecentCitiesComponent from '../SearchPage/RecentCitiesComponent';
import { useState } from 'react';
import MiniTopNavbar from '../Navigation/MiniTopNavbar';
import { useMediaQuery } from 'react-responsive';
import FavouritesCitiesList from './FavouritesCitiesList';

const FavouritesCitiesComponent = () => {
    const [recents, setRecents] = useState(false);
    const handleRecents = () => setRecents(!recents);

    const isTabletOrMobile = useMediaQuery({
        query: process.env.REACT_APP_RES_SMARTPHONE,
    });

    return (
        <>
            <Row
                style={{
                    textAlign: 'center',
                }}
            >
                {isTabletOrMobile && ( //mostra mininavbar con pulsanti indietro e home, solo quando siamo sotto i 768px
                    <MiniTopNavbar navigate={''} />
                )}
                {isTabletOrMobile && (
                    <h2
                        className="titles"
                        style={{
                            color: '#01175f',
                        }}
                    >
                        Welcome
                        <p>Giovanni</p>
                    </h2>
                )}
                <h5
                    onClick={handleRecents}
                    style={{
                        cursor: 'pointer',
                    }}
                    className="titles"
                >
                    <BsHeartFill /> Add to favourites
                </h5>
            </Row>
            <FavouritesCitiesList />

            <Modal show={recents} onHide={handleRecents}>
                <Modal.Header closeButton>
                    Click on a city to add it your favourites
                </Modal.Header>
                <Modal.Body>
                    <RecentCitiesComponent />
                </Modal.Body>
            </Modal>
        </>
    );
};

export default FavouritesCitiesComponent;

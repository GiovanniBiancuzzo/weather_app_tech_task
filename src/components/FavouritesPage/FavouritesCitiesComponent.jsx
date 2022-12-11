import { Modal, Row } from 'react-bootstrap';
import { BsHeartFill } from 'react-icons/bs';
import RecentCitiesComponent from '../SearchPage/RecentCitiesComponent';
import { useState } from 'react';
import MiniTopNavbar from '../Navigation/MiniTopNavbar';
import FavouritesCitiesList from './FavouritesCitiesList';

const FavouritesCitiesComponent = () => {
    const [recents, setRecents] = useState(false);
    const handleRecents = () => setRecents(!recents);

    return (
        <>
            <Row
                style={{
                    textAlign: 'center',
                }}
            >
                <MiniTopNavbar navigate={''} />

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

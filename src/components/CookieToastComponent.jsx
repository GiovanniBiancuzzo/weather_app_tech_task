import { Col, Row, Toast } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { acceptedCookiesAction } from '../redux/actions';
import { BiCookie } from 'react-icons/bi';

const CookieToastComponent = () => {
    const cookies = useSelector((state) => state.favourites.cookies); //variabile per i cookies conservata nello store persistente

    const dispatch = useDispatch();

    return (
        <Toast //piccolo banner che avvisa della localizzazione tramite ip
            onClose={() => dispatch(acceptedCookiesAction())}
            show={cookies}
            className="bannerCookies "
        >
            <Toast.Header>
                <span>
                    <BiCookie />
                </span>
                <strong className="mr-auto">Weather App</strong>
            </Toast.Header>
            <Toast.Body>
                L'app usa una localizzazione approssimativa per stimare la tua
                posizione
            </Toast.Body>
        </Toast>
    );
};

export default CookieToastComponent;

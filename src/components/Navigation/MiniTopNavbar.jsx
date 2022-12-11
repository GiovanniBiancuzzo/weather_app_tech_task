import { BsArrowLeft, BsSearch } from 'react-icons/bs';
import { useMediaQuery } from 'react-responsive';
import { useNavigate } from 'react-router-dom';

const MiniTopNavbar = (props) => {
    const isTabletOrMobile = useMediaQuery({
        query: '(max-width: 768px)',
    });
    const navigate = useNavigate();

    return (
        <>
            {isTabletOrMobile && (
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        fontWeight: 900,
                        padding: '24px',
                    }}
                >
                    <BsArrowLeft
                        style={{
                            cursor: 'pointer',
                            fontSize: '1.3em',
                        }}
                        onClick={() => navigate(`/${props.navigate}`)}
                    />

                    <BsSearch
                        style={{
                            cursor: 'pointer',
                            fontSize: '1.3em',
                        }}
                        onClick={() => navigate(`/search`)}
                    />
                </div>
            )}
        </>
    );
};

export default MiniTopNavbar;

import { BsArrowLeft, BsSearch } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const MiniTopNavbar = (props) => {
    const navigate = useNavigate();

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "space-between",
                fontWeight: 900,
                padding: "24px",
            }}
        >
            <BsArrowLeft
                style={{
                    cursor: "pointer",
                    fontSize: "1.3em",
                }}
                onClick={() => navigate(`/${props.navigate}`)}
            />

            <BsSearch
                style={{
                    cursor: "pointer",
                    fontSize: "1.3em",
                }}
                onClick={() => navigate(`/search`)}
            />
        </div>
    );
};

export default MiniTopNavbar;

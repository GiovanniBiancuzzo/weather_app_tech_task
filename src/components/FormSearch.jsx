import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { getWeatherInfosAction } from "../redux/actions";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import RecentCitiesComponent from "./RecentCitiesComponent";

const FormSearch = () => {
    const [query, setQuery] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const isTabletOrMobile = useMediaQuery({
        query: process.env.REACT_APP_RES_SMARTPHONE,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(getWeatherInfosAction(query));
        navigate("/");
        setQuery(""); //pulisco l'input field
    };

    return (
        <div className="responsivePadding">
            <h4 className="titles">Search</h4>
            <Form
                onSubmit={handleSubmit}
                role="search"
                className="miniContainer"
                style={{ position: "relative" }}
            >
                <Form.Control
                    className="searchForm shadowCorners"
                    type="search"
                    required
                    autoFocus
                    autoComplete="on"
                    aria-label="search city"
                    pattern="^[A-zÀ-ú\s]*$"
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
        </div>
    );
};

export default FormSearch;

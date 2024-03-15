import PropTypes from "prop-types";

import "./Delimiter.scss";

const Delimiter = ({text}) => (
    <div className="delimiter">
        <div className="left"/>
        <span className="text">{text}</span>
        <div className="right"/>
    </div>
);

Delimiter.propTypes = {
    text: PropTypes.string
}

export default Delimiter;
import PropTypes from "prop-types";
import "./ThirdPartyButton.scss";

const ThirdPartyButton = ({icon, text}) => (
    <div className="third-party-btn">
        <div className="icon">
            {icon}
        </div>
        <span className="text">{text}</span>
    </div>
);

ThirdPartyButton.propTypes = {
    icon: PropTypes.node,
    text: PropTypes.string.isRequired
}

export default ThirdPartyButton;
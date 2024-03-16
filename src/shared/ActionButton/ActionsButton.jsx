import PropTypes from "prop-types";

import "./ActionButton.scss";

const ActionButton = ({
    disabled,
    text,
    onClick,
    isCancelBtn = false,
    type = "submit"
}) => (
    <button
        className={`action-btn${isCancelBtn ? "-cancel" : ""}`}
        type={type}
        disabled={disabled}
        onClick={onClick}
    >
        {text}
    </button>
);

ActionButton.propTypes = {
    disabled: PropTypes.bool,
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    isCancelBtn: PropTypes.bool,
    type: PropTypes.string
}

export default ActionButton;
import "./ActionButton.scss";

const ActionButton = ({disabled, text, onClick, isCancelBtn = false}) => (
    <button
        className={`action-btn${isCancelBtn ? "-cancel" : ""}`}
        type="submit"
        disabled={disabled}
        onClick={onClick}
    >
        {text}
    </button>
);

export default ActionButton;
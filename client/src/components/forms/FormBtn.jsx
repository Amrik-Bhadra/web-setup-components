import PropTypes from "prop-types";

const FormBtn = ({btnText, onClick}) => {
  return (
    <button className="w-full bg-primary-btn hover:bg-primary-btn-hover text-white px-4 py-2 rounded-md" onClick={onClick}>
      {btnText}
    </button>
  );
};

FormBtn.propTypes = {
    btnText: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  };

export default FormBtn;
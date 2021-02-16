import PropTypes from 'prop-types';

import '../styles/button.scss';

const Button = (props) => {
    return (
        <button className={`btn btn-primary ${props.classes}`}>{props.text}</button>
    )
}

Button.defaultProps = {
    text: 'Submit'
}

Button.propTypes = {
	title: PropTypes.string
}

export default Button;
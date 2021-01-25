import React from 'react';

import '../styles/buton.scss';

const Button = (props) => {
    return (
        <button className={`btn ${props.classes}`}>{props.text}</button>
    )
}

export default Button;
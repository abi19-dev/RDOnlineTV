import React from 'react';

const Button = ({ onClick, children, className }) => {
    return (
        <button className={className} onClick={onClick}>
            <span className="button-text">{children}</span>
        </button>
    );
};

export default Button;
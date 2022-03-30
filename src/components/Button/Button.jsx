import React from 'react';

const Button = ({ color, title }) => {
    return (
        <Button variant="contained" color={color}>
            {title}
        </Button>
    );
};

export default Button;

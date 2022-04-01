import React from 'react'


const Categories = (props) => {
    return (
        <button className="catButt" onClick={props.onClick}>
            {props.name}
        </button>
    );
};

export { Categories }
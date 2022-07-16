import React from "react";

const CategorySelect = ({ category, setSelected, setHome }) => {
    return (
    <div>
        <button className="catButts"
            onClick={() => {
            setSelected(category.id);
            setHome(true)
        }}>
        {category.name}
        </button>
    </div>
    );
};

export default CategorySelect;
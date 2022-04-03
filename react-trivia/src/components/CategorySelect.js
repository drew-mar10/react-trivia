import React from "react";

const CategorySelect = ({ category, setSelected, setHome }) => {
    return (
    <div>
        <button
            onClick={() => {
                console.log("category selected!");
            setSelected(category.id);
            setHome(false)
        }}>
        {category.name}
        </button>
    </div>
    );
};

export default CategorySelect;
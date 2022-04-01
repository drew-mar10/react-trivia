import React from "react";

const CategorySelect = ({ category, setSelected }) => {
  return (
    <div>
      <button
        onClick={() => {
          console.log("category selected!");
          setSelected(category.id);
        }}
      >
        {category.name}
      </button>
    </div>
  );
};

export default CategorySelect;
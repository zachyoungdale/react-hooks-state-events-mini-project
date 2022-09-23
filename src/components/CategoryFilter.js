import React from "react";

function CategoryFilter({ categories, handleSelectedCategory, selectedCategory }) {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {categories.map((category) => {
        return (
          <button
            key={category}
            onClick={handleSelectedCategory}
            value={category}
            className={category === selectedCategory ? "selected" : ""}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}

export default CategoryFilter;

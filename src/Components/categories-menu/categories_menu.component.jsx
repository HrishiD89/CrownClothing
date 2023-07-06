import React from "react";
import CategoryItem from "../category-item/category_item_component";
import "./categories_menu.componenet.scss";
import categories from "./categories_menu.json";

function CategoriesMenu() {
  return (
    <div className="categoriesMenu-container">
      {categories.map((category) => {
        return <CategoryItem key={category.id} category={category} />;
      })}
    </div>
  );
}

export default CategoriesMenu;

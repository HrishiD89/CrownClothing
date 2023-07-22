import React from "react";
import DirectoryItem from "../directory-item/directory_item_component";
import directories from "./directories.json";
import "./directories.styles.scss";

function Directories() {
  return (
    <div className="categoriesMenu-container">
      {directories.map((category) => {
        return <DirectoryItem key={category.id} category={category} />;
      })}
    </div>
  );
}

export default Directories;

import React, { useState } from "react";
import { CategoryInput } from "./styles";
const Category = ({ setCategory = () => {} }) => {
  const [newCategory, isCategory] = useState(false);
  return newCategory ? (
    <>
      <label>New Category</label>
      <CategoryInput>
        <input text="text" onChange={(e) => setCategory(e.target.value)} />
        <button onClick={() => isCategory(false)}>Cancel</button>
      </CategoryInput>
    </>
  ) : (
    <>
      <label>Category (optional)</label>
      <select
        onChange={(e) =>
          e.target.value === "new_category"
            ? isCategory(true)
            : setCategory(e.target.value)
        }
      >
        <option>...</option>
        <option value="new_category">New Category</option>
      </select>
    </>
  );
};

export default Category;

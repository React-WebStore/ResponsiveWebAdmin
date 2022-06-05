import React, { useState, useContext } from "react";
import Category from "../_common/Category";
import Price from "../_common/Price";
import { contextState } from "../../Services/context";
import { AddItemContainer, UploadedImage } from "./styles";

import { Input } from "../../Utils/styles";

const AddItem = ({ img = "logo192.png" }) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState("");

  const { dispatch } = useContext(contextState);

  console.log({ title, price, category });

  return (
    <AddItemContainer
      onSubmit={(e) => {
        e.preventDefault();

        dispatch({ type: "previewItem", payload: { title, price, category } });
      }}
    >
      <input type="file" />
      <label>Title</label>
      <Input type="text" onChange={(e) => setTitle(e.target.value)} />
      <Price setPrice={setPrice} />
      <Category setCategory={setCategory} />
      <button>Submit</button>
    </AddItemContainer>
  );
};

export default AddItem;

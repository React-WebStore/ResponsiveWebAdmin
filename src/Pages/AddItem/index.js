import React from "react";
import AddItem from "../../Components/AddItem";
import PreviewItem from "../../Components/PreviewItem";

import { ItemPage } from "./styles";
const AddItemPage = () => {
  return (
    <ItemPage>
      <AddItem />
      <PreviewItem />
    </ItemPage>
  );
};

export default AddItemPage;

import React, { useContext } from "react";
import { ItemContainer, Image, TextBox, AddToCart } from "./styles";

import { contextState } from "../../Services/context";
const PreviewItem = ({
  img = "https://firebasestorage.googleapis.com/v0/b/planup-d79a0.appspot.com/o/2016-09-06-what-is-a-product.webp?alt=media&token=f6c25a81-8f09-4401-b274-029baff6b96a",
}) => {
  const { preview } = useContext(contextState);
  const { title = "", price } = preview;

  console.log({ preview });
  return (
    <ItemContainer>
      <Image src={img}></Image>
      <TextBox>
        <h1>{title}</h1>
        <h3>${price}</h3>
        <AddToCart />
      </TextBox>
    </ItemContainer>
  );
};

export default PreviewItem;

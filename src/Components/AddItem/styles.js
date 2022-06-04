import styled from "styled-components";
export const AddItemContainer = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 5px 6px 10px gray;
  border-radius: 1rem;
  min-width: 30rem;
  max-width: 50rem;
  max-height: 40rem;
  padding: 3rem 0rem;
  gap: 0.5rem;
`;

export const UploadedImage = styled.img`
  max-width: 20rem;
  min-width: 15rem;
  min-height: 10rem;
  max-height: 20rem;
  border-radius: 1rem;
  box-shadow: 2px 2px 9px gray;
`;

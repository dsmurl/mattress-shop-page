import React from "react";
import styled, { css } from "styled-components";
import { AppContext } from "../hooks/app-context";
import PriceRow from "./price-row";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 0 0 20px;

  @media (max-width: 830px) {
    padding: 0;
  }
`;

const Title = styled.h3`
  padding-bottom: 25px;
`;

const StyledButtonGroup = styled(ButtonGroup)`
  width: 100%;
  border-radius: 0;
`;

const StyledButton = styled(Button)`
  padding: 10px;
  font-family: "Source Serif Pro", serif;
  font-size: 16px;
  border-radius: 0;
  border: 1px solid #a6a19a;
  color: #a6a19a;
  background-color: #fff;

  ${({ selected }) =>
    selected &&
    css`
      color: #fff;
      background-color: #a6a19a;
      border: 1px solid #a6a19a;
      box-shadow: none;
    `}

  :focus {
    color: #fff;
    background-color: #a6a19a;
    border: 1px solid #a6a19a;
    box-shadow: none;
  }

  :hover {
    color: #fff;
    background-color: #817d78;
    border: 1px solid #a6a19a;
  }
`;

const AddButton = styled(Button)`
  width: 100%;
  height: 45px;
  margin-top: 25px;
  background-color: #d4aa63;
  border: none;

  font-family: "Questrial", sans-serif;
  font-weight: 400;
  font-size: 18px;

  :focus {
    background-color: #d4aa63;
    box-shadow: none;
  }

  :hover {
    background-color: #d49832;
    box-shadow: none;
  }
`;

const SelectionLabel = styled.div`
  font-family: "Source Serif Pro", serif;
  font-size: 14px;
`;

const MattressForm = () => {
  const {
    mattressSelection,
    setMattressSelection,
    apiData,
    addToCart,
    cart,
  } = React.useContext(AppContext);

  const selectionClicked = (matt) => {
    setMattressSelection(matt);
  };

  const addClicked = (matt) => {
    addToCart(matt);
  };

  return (
    mattressSelection.id && (
      <FormContainer>
        <Title>Choose Your Mattress</Title>
        <Form>
          <SelectionLabel>SELECT MATTRESS TYPE</SelectionLabel>
          <StyledButtonGroup>
            {apiData.mattresses.map((matt) => (
              <StyledButton
                variant="secondary"
                key={matt.id}
                onClick={() => selectionClicked(matt)}
                selected={matt.id === mattressSelection.id}
              >
                {matt.name}
              </StyledButton>
            ))}
          </StyledButtonGroup>
          <PriceRow matt={mattressSelection} />
          <AddButton
            variant="primary"
            onClick={() => addClicked(mattressSelection)}
          >
            Add To Cart
          </AddButton>
        </Form>
      </FormContainer>
    )
  );
};

export default MattressForm;

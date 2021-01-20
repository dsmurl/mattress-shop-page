import React from "react";
import styled from "styled-components";
import BaseLayout from "../components/layouts/base-layout";
import MattressForm from "../components/mattress-form";
import { AppContext } from "../components/hooks/app-context";

const Content = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 830px) {
    display: inline-block;
    margin: 0 auto;
  }

  width: 100%;
  padding: 0 50px;
`;

const ImageContainer = styled.div`
  width: 50%;

  @media (max-width: 830px) {
    width: 100%;
  }

  min-width: 300px;
`;

const Image = styled.img`
  width: 100%;
`;

const FormContainer = styled.div`
  width: 50%;

  @media (max-width: 830px) {
    width: 100%;
  }

  min-width: 300px;
`;

const Home = () => {
  const { mattressSelection, setMattressSelection, apiData } = React.useContext(
    AppContext
  );

  React.useEffect(() => {
    // Could have been set inthe context with an api call or data call to avoid here

    // Set the inital mattress selection and don't
    // allow render with no selected mattress
    setMattressSelection(apiData.mattresses[0]);
  }, []);

  return (
    <BaseLayout>
      <Content>
        {mattressSelection.id && (
          <>
            <ImageContainer>
              <Image src={`./mattresses/${mattressSelection.imageFileName}`} />
            </ImageContainer>

            <FormContainer>
              <MattressForm />
            </FormContainer>
          </>
        )}
      </Content>
    </BaseLayout>
  );
};

export default Home;

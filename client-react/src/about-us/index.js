import React from "react";
import styled from "styled-components";
const FContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
`;

const FImages = styled.div`
  border: 1px solid #707070;
  width: 340px;
  height: 225px;
  margin-bottom: 40px;
`;

const FHeader = styled.div`
  font-family: "Quicksand", sans-serif;
  font-weight: bold;
  font-size: 20px;
  width: 340px;
`;

const FText = styled.div`
  font-family: "Roboto", sans-serif;
  font-size: 15px;
  width: 340px;
  margin-top: 30px;
  margin-bottom: 35px;
`;

const Wrapper = styled.div`
  margin-left: 100px;
  margin-right: 100px;
  margin-top: 125px;
`;

const AboutUsPage = () => (
  <Wrapper>
    <FContainer>
      <FImages>image goes here</FImages>
      <FImages>image goes here</FImages>
      <FImages>image goes here</FImages>
    </FContainer>
    <FContainer>
      <FHeader>Anthony Vu</FHeader>
      <FHeader>Heather Tran</FHeader>
      <FHeader>Peggy Zhou</FHeader>
    </FContainer>
    <FContainer>
      <FText>
        Pellentesque ac erat dignissim, tincidunt augue a, dignissim est.
        Maecenas non orci at est vehicula vehicula. Sed non eleifend eros. Nam
        mauris massa, porta non auctor at, faucibus a tellus. Duis nibh erat,
        viverra vitae fermentum a, scelerisque a nibh. Lorem ipsum dolor sit
        amet, consectetur adipiscing elit. Morbi finibus pellentesque diam ut
        hendrerit. Sed a metus erat. In tempus nec dui sit amet pellentesque.
        Aliquam augue ligula, dictum quis posuere sed, dictum at ex.
      </FText>
      <FText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vestibulum
        quis risus volutpat vestibulum. Sed eu porttitor justo, non egestas
        ipsum. Aliquam ut euismod dui. Vestibulum et condimentum dolor. Etiam
        vel imperdiet dolor, in accumsan nisi. Sed posuere, magna at hendrerit
        viverra, urna lacus feugiat lacus, eu venenatis ex nisi id odio.
      </FText>
      <FText>
        Duis at ultricies magna. Morbi posuere odio ut nisi feugiat vestibulum.
        Praesent vel magna leo. Aenean sollicitudin tempus nisi, eget porta mi
        dapibus eu. Vivamus volutpat ligula nibh, ut convallis augue ornare non.
        Fusce elementum mattis ipsum, ullamcorper ornare velit sagittis blandit.
        Suspendisse pharetra tortor ac sem maximus, id consequat augue vehicula.
        Integer egestas lectus a dolor posuere, sit amet cursus ipsum porttitor.
        Morbi ac placerat ipsum. Integer mollis sapien ipsum, in viverra nulla
        tristique ac.
      </FText>
    </FContainer>
  </Wrapper>
);

export default AboutUsPage;

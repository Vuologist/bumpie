import React from "react";
import styled from "styled-components";
import Collapse, { Panel } from "rc-collapse";

const Wrapper = styled.div`
  margin-left: 100px;
  margin-right: 100px;
  margin-top: 75px;
`;

const GridLayout = styled.div`
  font-family: "Quicksand", sans-serif;
  font-weight: bold;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const FContainerHeader = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
`;

const FAQHeader = styled.p`
  font-family: "Quicksand", sans-serif;
  font-weight: bold;
  font-size: 55px;
  margin-bottom: 60px;
  float: left;
`;

const Answer = styled.p`
  font-family: "Roboto", sans-serif;
  font-weight: normal;
  margin-left: 5px;
  font-size: 19px;
  padding-left: 15px;
  color: #fff;
`;

const StyledCollapse = styled(Collapse)`
  margin-bottom: 20px;
  &.rc-collapse {
    width: 100%;
    border-radius: 0px;
    border-color: transparent;
    background-color: transparent;
    > .rc-collapse-item-active .rc-collapse-header .arrow {
      position: relative;
      top: 2px;
      border-left: 5px solid transparent !important;
      border-right: 5px solid transparent !important;
      border-top: 8px solid #fff !important;
      margin-right: 6px;
    }
    > .rc-collapse-item {
      border: 0px;
      > .rc-collapse-content-active {
        background-color: #c5c5c4 !important;
      }
      > .rc-collapse-header {
        height: 100px;
        background-color: #c5c5c4 !important;
        color: #fff !important;
        font-family: "Quicksand";
        font-size: 25px;
        font-weight: normal;
        padding: 25px;
        > .arrow {
          border-top: 5px solid transparent;
          border-bottom: 5px solid transparent;
          border-bottom: 5px solid transparent;
          border-left: 8px solid #fff;
        }
      }
    }
    .rc-collapse-header:focus {
      border: 0px;
      outline: none;
    }
  }
`;

const CollapseWrapper = styled.div`
  &:nth-child(even) {
    margin-left: 35px;
  }
  &:nth-child(odd) {
    margin-right: 35px;
  }
`;

const data = [
  {
    question:
      "First question goes here and this is extra stuff to show that an overflow will hopefully happen :)",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesettingindustry. Lorem Ipsum has been the industry's standard dummy text eversince the 1500s.",
  },
  {
    question:
      "Another question goes here; this is just a spacefiller text to see.",
    answer:
      "This is also some random text to see how this would look if the answer were two lines long.",
  },
  {
    question: "How would this look if the question was short?",
    answer: "It would look like this.",
  },
  {
    question: "What about if the question was beside a really long question?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesettingindustry. Lorem Ipsum has been the industry's standard dummy text eversince the 1500s.",
  },
  {
    question:
      "What would this look like if the question was really long, and theanswer was also really long,",
    answer:
      "It would actually look pretty weird in terms of spacing, and it would expand the spacing between the question and the answer of the short column next to it (refer to the column to the left of this one). So let's try ourbest to place questions with similar lengths side-by-side; that way, there would be less of an awkward looking gap!",
  },
  {
    question: "Drop some Lipsum?",
    answer:
      "Suspendisse sed metus purus. Morbi diam tortor, feugiat et nibh ut, finibus commodo lorem. Curabitur at neque nec odio varius ultrices non sed tortor. Duis lacinia tortor fringilla lorem luctus mollis. Morbi ut porttitor lorem, non facilisis leo. Proin vehicula sapien non justo dapibus, sed scelerisque purus pulvinar. Cras bibendum turpis eget nisi pharetra, in porta leo facilisis. Duis malesuada auctor augue sed gravida. Aenean ornare, quam vitae molestie dictum, nibh eros eleifend arcu, vitae viverra lectus neque eget felis. Phasellus sit amet ligula a ex congue sollicitudin. Fusce iaculis at neque ac fermentum. Sed condimentum molestie nunc sit amet maximus. Curabitur lobortis enim vel risus convallis, vel placerat elit faucibus.",
  },
];

const QABox = ({ question, answer }) => (
  <CollapseWrapper>
    <StyledCollapse>
      <Panel header={question}>
        <Answer>{answer}</Answer>
      </Panel>
    </StyledCollapse>
  </CollapseWrapper>
);

const FAQ = () => (
  <Wrapper>
    <FContainerHeader>
      <FAQHeader>Frequently Asked Questions</FAQHeader>
    </FContainerHeader>

    <GridLayout>
      {data.map((faq, i) => {
        return <QABox question={faq.question} answer={faq.answer} key={i} />;
      })}
    </GridLayout>
  </Wrapper>
);

export default FAQ;

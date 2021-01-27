import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  margin-left: 100px;
  margin-right: 100px;
  margin-top: 75px;
`;

const GridLayout = styled.div`
  font-family: "Quicksand", sans-serif;
  font-weight: bold;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

const FContainerHeader = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
`;

const FAQHeader = styled.p`
  font-family: "Quicksand", sans-serif;
  font-weight: bold;
  font-size: 30px;
  margin-bottom: 60px;
  float: left;
`;

const QADiv = styled.div`
  font-family: "Quicksand", sans-serif;
  font-weight: bold;
  font-size: 20px;
`;

const Question = styled.p`
  font-family: "Quicksand", sans-serif;
  font-weight: bold;
  font-size: 20px;
  margin-left: 5px;
`;

const Answer = styled.p`
  font-family: "Roboto", sans-serif;
  font-weight: normal;
  margin-left: 5px;
  font-size: 15px;
`;

const FAQWrapper = styled.div`
  padding: 20px;
  display: grid;
  flex-direction: row;
`;

const FAQSubWrapper = styled.div`
  display: flex;
  margin-bottom: 20px;
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
      "Another question goes here; this is just a spacefiller text to see how this would look if a Frequently Asked Question was this long!",
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
      "What would this look like if the question was really long, and theanswer was also really long, and I'm purposely expanding this text just to see what it would look like if this question was really long sitting beside a question and an answer that is really short?",
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
  <FAQWrapper>
    <FAQSubWrapper>
      <QADiv>Q:</QADiv>
      <Question>{question}</Question>
    </FAQSubWrapper>
    <FAQSubWrapper>
      <QADiv>A:</QADiv>
      <Answer>{answer}</Answer>
    </FAQSubWrapper>
  </FAQWrapper>
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

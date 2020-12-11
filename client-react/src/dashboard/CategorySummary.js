import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

const CategoryLine = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CategoryLabel = styled.span`
  font-size: 19px;
  margin-left: 10px;
`;

const PercentageLabel = styled.span`
  font-size: 19px;
`;

const CategoryUL = styled.ul`
  padding-left: 0px;
`;
const SummaryWrapper = styled.div`
  margin-left: 5em;
  margin-right: 5em;
`;

const CategorySummary = ({ radarData }) => {
  return (
    <SummaryWrapper>
      <CategoryUL>
        <CategoryLine>
          <div>
            <FontAwesomeIcon icon={faCircle} size="lg" color="#D0E6E3" />
            <CategoryLabel>{radarData[0].category}</CategoryLabel>
          </div>
          <PercentageLabel>{radarData[0].value + "%"}</PercentageLabel>
        </CategoryLine>
        <CategoryLine>
          <div>
            <FontAwesomeIcon icon={faCircle} size="lg" color="#8FE8DF" />
            <CategoryLabel>{radarData[1].category}</CategoryLabel>
          </div>
          <PercentageLabel>{radarData[1].value + "%"}</PercentageLabel>
        </CategoryLine>
        <CategoryLine>
          <div>
            <FontAwesomeIcon icon={faCircle} size="lg" color="#2EC4B6" />
            <CategoryLabel>{radarData[2].category}</CategoryLabel>
          </div>
          <PercentageLabel>{radarData[2].value + "%"}</PercentageLabel>
        </CategoryLine>
        <CategoryLine>
          <div>
            <FontAwesomeIcon icon={faCircle} size="lg" color="#0B9387" />
            <CategoryLabel>{radarData[3].category}</CategoryLabel>
          </div>
          <PercentageLabel>{radarData[3].value + "%"}</PercentageLabel>
        </CategoryLine>
        <CategoryLine>
          <div>
            <FontAwesomeIcon icon={faCircle} size="lg" color="#005A52" />
            <CategoryLabel>{radarData[4].category}</CategoryLabel>
          </div>
          <PercentageLabel>{radarData[4].value + "%"}</PercentageLabel>
        </CategoryLine>
      </CategoryUL>
    </SummaryWrapper>
  );
};
export default CategorySummary;

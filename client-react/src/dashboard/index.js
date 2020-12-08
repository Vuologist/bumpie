import React, { useState } from "react";
import styled from "styled-components";
import CategoryBox from "./CategoryBox";
import PentagonBox from "./PentagonBox";
const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  padding: 50px;
  height: 80vh;
  background-color: #c5c5c4;
`;

const PentagonWrapper = styled.div`
  padding: 20px;
`;
const CategoryWrapper = styled.div`
  padding: 20px;
  background-color: #c5c5c4;
`;

const Dashboard = () => {
  // All categories data
  const [allData, setAllData] = useState([[], [], [], [], []]);
  const [radarData, setRadarData] = useState([
    {
      category: "",
      value: 0,
    },
    {
      category: "",
      value: 0,
    },
    {
      category: "",
      value: 0,
    },
    {
      category: "",
      value: 0,
    },
    {
      category: "",
      value: 0,
    },
  ]);

  const onChange = (i, newData) => {
    // Create COPY and set new data
    const copyAllData = [...allData];
    copyAllData[i] = newData;
    if (copyAllData[i].length === 1) {
      copyAllData[i][0].previousTitle = copyAllData[i][0].title;
      copyAllData[i][0].title = "Category " + (i + 1);
    } else {
      if (copyAllData[i][0].previousTitle !== null) {
        copyAllData[i][0].title = copyAllData[i][0].previousTitle;
        copyAllData[i][0].previousTitle = null;
      }
    }
    radarDataCalc(i, newData);
    setAllData(copyAllData);
  };

  const radarDataCalc = (i, newData) => {
    // copy data instead of ref
    const copyAllData = [...allData];
    const newRadarData = [...radarData];
    //loop through data
    var currentAvg = 0;
    for (var k = 0; k < copyAllData[i].length; k++) {
      // adding all values together
      currentAvg += copyAllData[i][k].value;
    }

    // logic to not divide by 0
    var subCatCount = copyAllData[i].length;
    if (subCatCount < 1) {
      subCatCount = 1;
    }

    // finish calculating avg
    currentAvg = currentAvg / subCatCount;
    newRadarData[i].value = Math.round(currentAvg);

    setRadarData(newRadarData);
  };

  return (
    <ContentWrapper>
      <PentagonWrapper>
        <PentagonBox radarData={[...radarData]}></PentagonBox>
      </PentagonWrapper>
      <CategoryWrapper>
        <CategoryBox
          title="Category 1"
          data={allData[0]}
          onChange={(data) => onChange(0, data)}
          one={allData[0].length > 1 ? false : true}
        ></CategoryBox>
        <CategoryBox
          title="Category 2"
          data={allData[1]}
          onChange={(data) => onChange(1, data)}
          one={allData[1].length > 1 ? false : true}
        ></CategoryBox>
        <CategoryBox
          title="Category 3"
          data={allData[2]}
          onChange={(data) => onChange(2, data)}
          one={allData[2].length > 1 ? false : true}
        ></CategoryBox>
        <CategoryBox
          title="Category 4"
          data={allData[3]}
          onChange={(data) => onChange(3, data)}
          one={allData[3].length > 1 ? false : true}
        ></CategoryBox>
        <CategoryBox
          title="Category 5"
          data={allData[4]}
          onChange={(data) => onChange(4, data)}
          one={allData[4].length > 1 ? false : true}
        ></CategoryBox>
      </CategoryWrapper>
    </ContentWrapper>
  );
};

export default Dashboard;

import React, { useState } from "react";
import styled from "styled-components";
import CategoryBox from "./CategoryBox";
import PentagonBox from "./PentagonBox";
const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  padding: 50px;
  background-color: #c5c5c4;
  min-height: 80vh;
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
      category: "Category 1",
      value: 0,
    },
    {
      category: "Category 2",
      value: 0,
    },
    {
      category: "Category 3",
      value: 0,
    },
    {
      category: "Category 4",
      value: 0,
    },

    {
      category: "Category 5",
      value: 0,
    },
  ]);

  const onChange = (i, newData) => {
    // Create COPY and set new data
    const copyAllData = [...allData];
    copyAllData[i] = newData;
    if (copyAllData[i].length === 1) {
      copyAllData[i][0].previousTitle = copyAllData[i][0].title;
      copyAllData[i][0].title = radarData[i].category;
    } else {
      if (copyAllData[i][0].previousTitle !== null) {
        copyAllData[i][0].title = copyAllData[i][0].previousTitle;
        copyAllData[i][0].previousTitle = null;
      }
    }
    radarDataCalc(i, newData);
    setAllData(copyAllData);
  };

  const onTitleChange = (title, i) => {
    const copyCatTitles = [...radarData];
    copyCatTitles[i].category = title;
    setRadarData(copyCatTitles);
    const copyAllData = [...allData];
    if (copyAllData[i].length === 1) {
      copyAllData[i][0].previousTitle = copyAllData[i][0].title;
      copyAllData[i][0].title = copyCatTitles[i].category;
    } else {
      if (copyAllData[i][0].previousTitle !== null) {
        copyAllData[i][0].title = copyAllData[i][0].previousTitle;
        copyAllData[i][0].previousTitle = null;
      }
    }
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
          title={radarData[0].category.toString()}
          data={allData[0]}
          onChange={(data) => onChange(0, data)}
          onTitleChange={(title) => onTitleChange(title, 0)}
          one={allData[0].length > 1 ? false : true}
        ></CategoryBox>
        <CategoryBox
          title={radarData[1].category}
          data={allData[1]}
          onChange={(data) => onChange(1, data)}
          onTitleChange={(title) => onTitleChange(title, 1)}
          one={allData[1].length > 1 ? false : true}
        ></CategoryBox>
        <CategoryBox
          title={radarData[2].category}
          data={allData[2]}
          onChange={(data) => onChange(2, data)}
          onTitleChange={(title) => onTitleChange(title, 2)}
          one={allData[2].length > 1 ? false : true}
        ></CategoryBox>
        <CategoryBox
          title={radarData[3].category}
          data={allData[3]}
          onChange={(data) => onChange(3, data)}
          onTitleChange={(title) => onTitleChange(title, 3)}
          one={allData[3].length > 1 ? false : true}
        ></CategoryBox>
        <CategoryBox
          title={radarData[4].category}
          data={allData[4]}
          onChange={(data) => onChange(4, data)}
          onTitleChange={(title) => onTitleChange(title, 4)}
          one={allData[4].length > 1 ? false : true}
        ></CategoryBox>
      </CategoryWrapper>
    </ContentWrapper>
  );
};

export default Dashboard;

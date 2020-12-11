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
  const [catTitles, setCatTitles] = useState([
    "Category 1",
    "Category 2",
    "Category 3",
    "Category 4",
    "Category 5",
  ]);

  const onChange = (i, newData) => {
    // Create COPY and set new data
    const copyAllData = [...allData];
    copyAllData[i] = newData;
    if (copyAllData[i].length === 1) {
      copyAllData[i][0].previousTitle = copyAllData[i][0].title;
      copyAllData[i][0].title = catTitles[i];
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
    const copyCatTitles = [...catTitles];
    copyCatTitles[i] = title;
    setCatTitles(copyCatTitles);
    const copyAllData = [...allData];
    if (copyAllData[i].length === 1) {
      copyAllData[i][0].previousTitle = copyAllData[i][0].title;
      copyAllData[i][0].title = copyCatTitles[i];
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
        <PentagonBox
          radarData={[...radarData]}
          titles={catTitles}
        ></PentagonBox>
      </PentagonWrapper>
      <CategoryWrapper>
        <CategoryBox
          title={catTitles[0]}
          data={allData[0]}
          onChange={(data) => onChange(0, data)}
          onTitleChange={(title) => onTitleChange(title, 0)}
          one={allData[0].length > 1 ? false : true}
        ></CategoryBox>
        <CategoryBox
          title={catTitles[1]}
          data={allData[1]}
          onChange={(data) => onChange(1, data)}
          onTitleChange={(title) => onTitleChange(title, 1)}
          one={allData[1].length > 1 ? false : true}
        ></CategoryBox>
        <CategoryBox
          title={catTitles[2]}
          data={allData[2]}
          onChange={(data) => onChange(2, data)}
          onTitleChange={(title) => onTitleChange(title, 2)}
          one={allData[2].length > 1 ? false : true}
        ></CategoryBox>
        <CategoryBox
          title={catTitles[3]}
          data={allData[3]}
          onChange={(data) => onChange(3, data)}
          onTitleChange={(title) => onTitleChange(title, 3)}
          one={allData[3].length > 1 ? false : true}
        ></CategoryBox>
        <CategoryBox
          title={catTitles[4]}
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

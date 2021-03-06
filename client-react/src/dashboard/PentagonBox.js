import React from "react";
import styled from "styled-components";
import CategorySummary from "./CategorySummary";
import { ResponsiveRadar } from "@nivo/radar";
const BoxWrapper = styled.div`
  background-color: white;
  padding: 15px;
`;

const TitleWrapper = styled.div`
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.h1`
  color: #8fe8df;
  font-family: Quicksand;
  margin-left: 20px;
  font-size: 15pt;
  text-align: center;
`;

var i = 0;
const LabelComponent = ({ id, anchor }) => {
  var color = "";
  switch (i) {
    case 0:
      color = "#D0E6E3";
      break;
    case 1:
      color = "#8FE8DF";
      break;
    case 2:
      color = "#2EC4B6";
      break;
    case 3:
      color = "#0B9387";
      break;
    case 4:
      color = "#005A52";
      break;
    default:
      color = "#8FE8DF";
  }
  i = (i + 1) % 5;
  return (
    <g transform="translate(-15, -15)">
      <circle cx="15" cy="15" r="15" fill={color} />
    </g>
  );
};

const PentagonBox = ({ radarData }) => {
  return (
    <BoxWrapper>
      <TitleWrapper>
        <Title>My Stats</Title>
      </TitleWrapper>
      <div style={{ height: "400px" }}>
        <ResponsiveRadar
          data={radarData}
          keys={["value"]}
          indexBy="category"
          maxValue="100"
          margin={{ top: 70, right: 80, bottom: 40, left: 80 }}
          curve="linearClosed"
          borderWidth={2}
          borderColor={{ from: "color" }}
          gridLabel={LabelComponent}
          gridLevels={3}
          gridShape="linear"
          gridLabelOffset={0}
          enableDots={false}
          dotSize={0}
          enableDotLabel={false}
          dotLabel="value"
          dotLabelYOffset={-12}
          colors={"#2EC4B6"}
          fillOpacity={0.5}
          blendMode="multiply"
          animate={true}
          motionConfig="wobbly"
          isInteractive={false}
          theme={{
            background: "#ffffff",
            textColor: "#333333",
            fontSize: 15,
            axis: {
              domain: {
                line: {
                  stroke: "#777777",
                  strokeWidth: 1,
                },
              },
              ticks: {
                line: {
                  stroke: "#777777",
                  strokeWidth: 1,
                },
              },
            },
            grid: {
              line: {
                stroke: "#000000",
                strokeWidth: 3,
              },
            },
          }}
        />
      </div>
      <CategorySummary radarData={[...radarData]} />
    </BoxWrapper>
  );
};

export default PentagonBox;

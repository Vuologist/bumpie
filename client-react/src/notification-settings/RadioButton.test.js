import React from "react";
import RadioButton from "./RadioButton";
import renderer from "react-test-renderer";

it("renders radio buttons correctly", () => {
  const tree = renderer.create(<RadioButton />).toJSON();
  expect(tree).toMatchSnapshot();
});

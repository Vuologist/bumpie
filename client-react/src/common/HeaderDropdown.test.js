import React from "react";
import HeaderDropdown from "./HeaderDropdown";
import renderer from "react-test-renderer";

it("render HeaderDropdown correctly", () => {
  const tree = renderer.create(<HeaderDropdown />).toJSON();
  expect(tree).toMatchSnapshot();
});

import React, { Component } from "react";

import Header from "../common/Header";
import Footer from "../common/Footer";
import DynamicButton from "../common/DynamicButton";

class Settings extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Header />
        <div
          style={{
            maxWidth: 1920,
            margin: "auto",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            Hello Bumpie
          </div>

          {/* start of reset and save button grouping TODO -- Move to div that will surround the page */}
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignContent: "center"
            }}
          >
          <DynamicButton text="save" onclick="save" variant="link" color="black"/>
          <DynamicButton text="reset" onclick="reset" variant="link" color="black"/>
          </div>
          {/* end of reset and save button grouping...*/}

        </div>
        <Footer />
      </>
    );
  }
}

export default Settings;

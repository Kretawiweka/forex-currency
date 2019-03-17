import React from "react";

import { Wrapper } from "./styled";

class DefaultLayout extends React.Component {
  render() {
    return (
      <Wrapper>
        <div className="content">{this.props.children}</div>
      </Wrapper>
    );
  }
}

export default DefaultLayout;

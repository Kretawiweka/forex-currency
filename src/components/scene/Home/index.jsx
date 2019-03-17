import React from "react";

import DefaultLayout from "../../layout/DefaultLayout";
import ForexExchange from "../../container/ForexCurrency";

class Home extends React.Component {
  render() {
    return (
      <DefaultLayout>
        <ForexExchange />
      </DefaultLayout>
    );
  }
}

export default Home;

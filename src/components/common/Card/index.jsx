import React from "react";
import { Card, Typography } from "@material-ui/core";
import RemoveCircle from "@material-ui/icons/RemoveCircle";
import PropTypes from "prop-types";

import { CardWrapper, CardContent } from "./styled";

class CardCurrency extends React.Component {
  render() {
    let exchangeCurrency = this.props.exchangeValue * this.props.value;
    exchangeCurrency = Number(exchangeCurrency.toFixed(3));
    return (
      <CardWrapper>
        <Card>
          <CardContent>
            <div className="wrapper-content">
              <div style={{ flex: 1, margin: "0 1em" }}>
                <div className="header">
                  <Typography style={{ flex: 1 }} variant="h6" gutterBottom>
                    {this.props.currency}
                  </Typography>
                  <Typography variant="h6" gutterBottom>
                    {exchangeCurrency}
                  </Typography>
                </div>
                <Typography variant="subtitle1" gutterBottom>
                  1 {this.props.baseCurrency} = {this.props.currency}{" "}
                  {this.props.value}
                </Typography>
              </div>
              <div style={{ margin: "0 1em" }}>
                <RemoveCircle onClick={this.props.removeCurrency} />
              </div>
            </div>
          </CardContent>
        </Card>
      </CardWrapper>
    );
  }
}

CardCurrency.propTypes = {
  currency: PropTypes.string,
  value: PropTypes.number,
  exchangeValue: PropTypes.number,
  baseCurrency: PropTypes.string,
  removeCurrency: PropTypes.func
};

export default CardCurrency;

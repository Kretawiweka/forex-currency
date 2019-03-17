import React from "react";
import { Card, Typography } from "@material-ui/core";
import RemoveCircle from "@material-ui/icons/RemoveCircle";

import { CardWrapper, CardContent } from "./styled";

class CardCurrency extends React.Component {
  render() {
    return (
      <CardWrapper>
        <Card>
          <CardContent>
            <div className="wrapper-content">
              <div style={{ flex: 1, margin: "0 1em" }}>
                <div className="header">
                  <Typography style={{ flex: 1 }} variant="h6" gutterBottom>
                    USD
                  </Typography>
                  <Typography variant="h6" gutterBottom>
                    144.104
                  </Typography>
                </div>
                <Typography variant="subtitle2" gutterBottom>
                  IDR - Indonesian Rupiah
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                  1 USD = IDR 14.430
                </Typography>
              </div>
              <div style={{ margin: "0 1em" }}>
                <RemoveCircle />
              </div>
            </div>
          </CardContent>
        </Card>
      </CardWrapper>
    );
  }
}

export default CardCurrency;

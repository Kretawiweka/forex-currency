import React from "react";
import { Typography, TextField } from "@material-ui/core";

import { InputContent } from "./styled";
import CardCurrency from "../../common/Card";

class ForexCurrency extends React.Component {
  state = {
    dolar: 10.0
  };
  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };
  render() {
    return (
      <div>
        <Typography variant="subtitle1" gutterBottom>
          USD - United States Dollars
        </Typography>
        <InputContent>
          <Typography style={{ flex: 1 }} variant="h6">
            USD
          </Typography>
          <TextField
            value={this.state.dolar}
            onChange={this.handleChange("dolar")}
            margin="normal"
          />
        </InputContent>
        <CardCurrency />
      </div>
    );
  }
}

export default ForexCurrency;

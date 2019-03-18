import React from "react";
import { Typography, TextField, Button } from "@material-ui/core";

import { InputContent, MoreCurrency } from "./styled";
import CardCurrency from "../../common/Card";
import { requestCurrency } from "../../../services/api";
import { INITIAL_CURRENCY, BASE_CURRENCY } from "../../../constants";
class ForexCurrency extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      baseCurrencyInput: 10.0,
      viewData: [],
      currencyData: null,
      addMoreInput: "",
      listCurrency: []
    };
    this.addCurrenciesList = this.addCurrenciesList.bind(this);
  }
  handleChange = name => event => {
    name === "baseCurrencyInput"
      ? this.setState({ [name]: Number(event.target.value) })
      : this.setState({ [name]: event.target.value });
  };
  getCurrency() {
    requestCurrency(BASE_CURRENCY)
      .then(res => {
        this.setState({
          currencyData: res.rates
        });
        INITIAL_CURRENCY.map((item, index) => {
          BASE_CURRENCY !== item &&
            this.setState(prevState => ({
              viewData: [
                ...prevState.viewData,
                {
                  currency: item,
                  value: Number(this.state.currencyData[item].toFixed(3))
                }
              ],
              listCurrency: [...prevState.listCurrency, item]
            }));
        });
      })
      .catch(err => {
        console.error(err);
      });
  }
  addCurrenciesList(event) {
    event.preventDefault();
    let addMoreInput = this.state.addMoreInput;
    let currencyAlreadyExist = this.state.listCurrency.find(function(element) {
      return element === addMoreInput;
    });
    if (
      !currencyAlreadyExist &&
      this.state.currencyData[this.state.addMoreInput] !== undefined
    ) {
      this.setState(prevState => ({
        viewData: [
          ...prevState.viewData,
          {
            currency: this.state.addMoreInput,
            value: Number(
              this.state.currencyData[this.state.addMoreInput].toFixed(3)
            )
          }
        ],
        listCurrency: [...prevState.listCurrency, this.state.addMoreInput]
      }));
    }
  }
  removeCurrenciesList(index) {
    let viewDataCopy = [...this.state.viewData];
    let listCurrencyCopy = [...this.state.listCurrency];
    if (index !== -1) {
      listCurrencyCopy.splice(index, 1);
      viewDataCopy.splice(index, 1);
      this.setState({ viewData: viewDataCopy, listCurrency: listCurrencyCopy });
    }
  }
  componentDidMount() {
    this.getCurrency();
  }
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
            type="number"
            value={this.state.baseCurrencyInput}
            onChange={this.handleChange("baseCurrencyInput")}
            margin="normal"
          />
        </InputContent>
        {this.state.viewData.map((item, index) => (
          <CardCurrency
            key={index}
            currency={item.currency}
            value={item.value}
            baseCurrency={BASE_CURRENCY}
            exchangeValue={this.state.baseCurrencyInput}
            removeCurrency={this.removeCurrenciesList.bind(this, index)}
          />
        ))}
        <MoreCurrency>
          <form onSubmit={this.addCurrenciesList}>
            <TextField
              label="Add More Currencies"
              value={this.state.addMoreInput}
              onChange={this.handleChange("addMoreInput")}
              margin="normal"
              className="input-field"
            />
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </form>
        </MoreCurrency>
      </div>
    );
  }
}

export default ForexCurrency;

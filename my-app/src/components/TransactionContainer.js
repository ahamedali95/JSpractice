import React, { Component } from "react";
import Search from "./Search.js";

class TransactionContainer extends Component {
  constructor() {
    super();

    this.state = {
      transactions: [],
      filteredTransactions: []
    }
  }

  filterTransactions(events) {
    debugger
  }

  render() {
    return (
      <Search filterTransactions={this.filterTransactions.bind(this)}/>
    );
  }
}

export default TransactionContainer;

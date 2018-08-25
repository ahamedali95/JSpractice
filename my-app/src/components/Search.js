import React, { Component } from "react";

const Search = (props) => {
  return (
    <form>
      <input type="text" onChange={(event) => props.filterTransactions(event)}/>
    </form>
  );
}


export default Search;

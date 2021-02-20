import React from "react";
import { txns } from "./data-txns";
import TransactionTable from "./TransactionTable";

import "./styles.css";

const title = 'HackerBank';

function Transactions() {
  return (
    <div className="container-fluid">
      <TransactionTable txns={txns}></TransactionTable>
    </div>
  );
}

export default Transactions;
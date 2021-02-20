import React, { useState } from "react";

function TransactionTable({txns}) {

  const [data, setData] = useState(txns);
  const [date, setDate] = useState('');
  const [selected, setSelected] = useState(false);

  const cols = Object.keys(txns[0]);

  const Transactions = data.map( (item, index) => {
    var cells = cols.map( colData => {
      let content = colData !== 'type'
      ? item[colData]
      : item[colData] === 0 ? 'Credit':'Debit';
      let style = colData !== 'date' ? {}:{paddingLeft:"20px"};
      return <td key={colData + index} style={style}>{content}</td>;
    });
    return <tr key={index} align="left">{cells}</tr>;
  });

  const filter = (e) => {
    if(!selected) return;
    setData(txns.filter( element => element.date == date));
    setSelected(false);
  };

  const updateDate = e => {
    setDate(e.target.value);
    setSelected(true);
  };

  const sortByProp = p => {
    return function(a,b){
      if(a[p] === b[p]) return 0;
      return a[p] > b[p] ? 1:-1;
    }
  };

  const sort = () => {
    txns.sort(sortByProp("amount"));
    (date === '') 
    ? setData(txns.filter( element => element.date >= date))
    : setData(txns.filter( element => element.date == date));
  };

  return (
    <div className="layout-column align-items-center mt-50">
      <h1>HackerBank Transactions</h1>
      <section className="layout-row align-items-center justify-content-center">
        <label className="mr-10">Transaction Date</label>
        <input 
          id="date"
          type="date"
          defaultValue="2019-11-11"
          onChange={updateDate}
        />
        <button className="big" onClick={filter}>Filter</button>
      </section>

      <div className="card mt-50">
        <table className="table">
          <thead>
            <tr className="table-header" align="left">
              <th className="date">Date</th>
              <th className="desc">Description</th>
              <th className="type">Type</th>
              <th className="amount">
                <span id="amount" onClick={sort}>Amount ($)</span>
              </th>
              <th className="balance">Available Balance</th>
            </tr>
          </thead>
          <tbody>{ Transactions }</tbody>
        </table>
      </div>
    </div>
  );
}

export default TransactionTable;
// eslint-disable-next-line no-unused-vars
import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState"; // Adjust the path as per your folder structure

function AddTransaction() {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState();

  const { addTransaction } = useContext(GlobalContext); // Import useContext and use GlobalContext

  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount // Ensure amount is treated as a number
    };

    addTransaction(newTransaction);

    // Reset form fields after submission
    setText('');
    setAmount(0);
  };

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..."
            required
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))} // Parse as a number
            placeholder="Enter amount..."
          
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
}

export default AddTransaction;

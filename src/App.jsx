/* eslint-disable no-unused-vars */
import React from 'react'
import './App.css'
import Header from './Component/Header.jsx'
import Balance from './Component/Balance.jsx'
import IncomeExpense from './Component/IncomeExpense.jsx'
import Transaction from './Component/TransactionList.jsx'
import AddTransaction from './Component/AddTransaction.jsx'

function App() {
  
  return (
    <>
    <Header/>
    <div className="container">
      <Balance/>
      <IncomeExpense/>
      <Transaction/>
      <AddTransaction/>
    </div>
    </>
  )
}

export default App

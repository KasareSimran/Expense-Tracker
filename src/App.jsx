/* eslint-disable no-unused-vars */
import React from 'react'
import './App.css'
import Header from './Component/Header.jsx'
import Balance from './Component/Balance.jsx'
import IncomeExpense from './Component/IncomeExpense.jsx'
import Transaction from './Component/TransactionList.jsx'
import AddTransaction from './Component/AddTransaction.jsx'


import { GlobalProvider } from './context/GlobalState.jsx'

function App() {
  
  return (
    <GlobalProvider>
    <Header/>
    <div className="container">
      <Balance/>
      <IncomeExpense/>
      <Transaction/>
      <AddTransaction/>
    </div>
    </GlobalProvider>
  )
}

export default App

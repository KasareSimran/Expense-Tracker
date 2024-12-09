/* eslint-disable no-unused-vars */
import React from 'react'
import './App.css'
import Header from './Component/Header.jsx'
import Balance from './Component/Balance.jsx'
import IncomeExpense from './Component/IncomeExpense.jsx'

function App() {
  
  return (
    <>
    <Header/>
    <div className="container">
      <Balance/>
      <IncomeExpense/>
    </div>
    </>
  )
}

export default App

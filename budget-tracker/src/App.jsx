import { useState } from "react"
import TransactionForm from "./components/TransactionForm"

export default function App() {
  const [transactions, setTransactions] = useState([])

  const addTransaction = (transaction) => {
    setTransactions([transaction, ...transactions])
  }

  return (
    <div>
      <h1>Budget Tracker</h1>
      <TransactionForm onAdd={addTransaction} />
    </div>
  )
}
import { useState } from "react"
import TransactionForm from "./components/TransactionForm"
import TransactionList from "./components/TransactionList"

export default function App() {
  const [transactions, setTransactions] = useState([])

  const addTransaction = (t) => setTransactions([t, ...transactions])
  const deleteTransaction = (id) => setTransactions(transactions.filter((t) => t.id !== id))

  return (
    <div>
      <h1>Budget Tracker</h1>
      <TransactionForm onAdd={addTransaction} />
      <TransactionList transactions={transactions} onDelete={deleteTransaction} />
    </div>
  )
}
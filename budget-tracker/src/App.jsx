import { useState } from "react"
import TransactionForm from "./components/TransactionForm"
import TransactionList from "./components/TransactionList"
import Balance from "./components/Balance"
import Filter from "./components/Filter"

export default function App() {
  const [transactions, setTransactions] = useState([])
  const [filter, setFilter] = useState("all")

  const addTransaction = (t) => setTransactions([t, ...transactions])
  const deleteTransaction = (id) => setTransactions(transactions.filter((t) => t.id !== id))

  const filtered = filter === "all"
    ? transactions
    : transactions.filter((t) => t.type === filter)

  return (
    <div>
      <h1>Budget Tracker</h1>
      <Balance transactions={transactions} />
      <TransactionForm onAdd={addTransaction} />
      <Filter current={filter} onChange={setFilter} />
      <TransactionList transactions={filtered} onDelete={deleteTransaction} />
    </div>
  )
}
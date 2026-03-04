import { useState, useEffect } from "react"
import TransactionForm from "./components/TransactionForm"
import TransactionList from "./components/TransactionList"
import Balance from "./components/Balance"
import Filter from "./components/Filter"

export default function App() {

  // Chargement initial depuis localStorage
  const [transactions, setTransactions] = useState(() => {
    const saved = localStorage.getItem("transactions")
    return saved ? JSON.parse(saved) : []
  })

  const [filter, setFilter] = useState("all")

  // Sauvegarde automatique à chaque modification des transactions
  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions))
  }, [transactions])

  // Ajouter une transaction
  const addTransaction = (t) => {
    setTransactions((prev) => [t, ...prev])
  }

  // Supprimer une transaction
  const deleteTransaction = (id) => {
    setTransactions((prev) =>
      prev.filter((t) => t.id !== id)
    )
  }

  // Filtrage
  const filtered =
    filter === "all"
      ? transactions
      : transactions.filter((t) => t.type === filter)

  return (
    <div>
      <h1>Budget Tracker</h1>
      <Balance transactions={transactions} />
      <TransactionForm onAdd={addTransaction} />
      <Filter current={filter} onChange={setFilter} />
      <TransactionList
        transactions={filtered}
        onDelete={deleteTransaction}
      />
    </div>
  )
}
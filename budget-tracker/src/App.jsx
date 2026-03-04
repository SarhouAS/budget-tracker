import { useState, useEffect } from "react"
import TransactionForm from "./components/TransactionForm"
import TransactionList from "./components/TransactionList"
import Balance from "./components/Balance"
import Filter from "./components/Filter"

export default function App() {

  const [transactions, setTransactions] = useState(() => {
    const saved = localStorage.getItem("transactions")
    return saved ? JSON.parse(saved) : []
  })

  const [filter, setFilter] = useState("all")

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions))
  }, [transactions])

  const addTransaction    = (t)   => setTransactions((prev) => [t, ...prev])
  const deleteTransaction = (id)  => setTransactions((prev) => prev.filter((t) => t.id !== id))

  const filtered =
    filter === "all"
      ? transactions
      : transactions.filter((t) => t.type === filter)

  return (
    <div>

      <header className="app-header">
        <div>
          <h1>Budget <em>Tracker</em></h1>
          <p>Gestion de budget personnel · React + Vite</p>
        </div>
        <div className="header-badge">
          <span>{transactions.length}</span>
          <small>transactions</small>
        </div>
      </header>

      <div id="root-inner">

        <Balance transactions={transactions} />

        <TransactionForm onAdd={addTransaction} />

        <div className="transactions-section">
          <div className="section-header">
            <h2>Historique</h2>
            <Filter current={filter} onChange={setFilter} />
          </div>
          <TransactionList
            transactions={filtered}
            onDelete={deleteTransaction}
          />
        </div>

      </div>
    </div>
  )
}
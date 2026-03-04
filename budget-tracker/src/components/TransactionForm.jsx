import { useState } from "react"

export default function TransactionForm({ onAdd }) {
  const [title, setTitle] = useState("")
  const [amount, setAmount] = useState("")
  const [type, setType] = useState("income")
  const [date, setDate] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    // Validation
    if (!title.trim()) {
      setError("Le titre est obligatoire")
      return
    }
    if (!amount || Number(amount) <= 0) {
      setError("Le montant doit être supérieur à 0")
      return
    }
    if (!date) {
      setError("La date est obligatoire")
      return
    }

    setError("")

    onAdd({
      id: Date.now(),
      title: title.trim(),
      amount: Number(amount),
      type,
      date,
    })

    // Reset
    setTitle("")
    setAmount("")
    setType("income")
    setDate("")
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Nouvelle transaction</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <div>
        <label>Titre</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Ex : Salaire, Loyer..."
        />
      </div>

      <div>
        <label>Montant (€)</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          min="0"
          step="0.01"
        />
      </div>

      <div>
        <label>Type</label>
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="income">Revenu</option>
          <option value="expense">Dépense</option>
        </select>
      </div>

      <div>
        <label>Date</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>

      <button type="submit">Ajouter</button>
    </form>
  )
}
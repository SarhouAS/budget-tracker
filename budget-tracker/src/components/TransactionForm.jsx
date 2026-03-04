import { useState } from "react"

export default function TransactionForm({ onAdd }) {
  const today = () => new Date().toISOString().split("T")[0]

  const [title, setTitle]   = useState("")
  const [amount, setAmount] = useState("")
  const [type, setType]     = useState("income")
  const [date, setDate]     = useState(today())
  const [error, setError]   = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

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

    setTitle("")
    setAmount("")
    setType("income")
    setDate(today())
  }

  return (
    <div className="form-card">
      <h2>Nouvelle transaction</h2>

      {error && <p className="form-error">{error}</p>}

      <form onSubmit={handleSubmit}>
        <div className="form-grid">

          <div className="field full">
            <label>Titre</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Ex : Salaire, Loyer, Courses..."
            />
          </div>

          <div className="field">
            <label>Montant (€)</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              min="0"
              step="0.01"
              placeholder="0.00"
            />
          </div>

          <div className="field">
            <label>Date</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>

          <div className="field">
            <label>Type</label>
            <select value={type} onChange={(e) => setType(e.target.value)}>
              <option value="income">💰 Revenu</option>
              <option value="expense">💸 Dépense</option>
            </select>
          </div>

          <button type="submit" className="btn-submit">+ Ajouter</button>

        </div>
      </form>
    </div>
  )
}
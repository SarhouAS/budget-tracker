export default function Filter({ current, onChange }) {
  return (
    <div className="filter-bar">
      <button
        className={current === "all" ? "active" : ""}
        onClick={() => onChange("all")}
      >
        Tous
      </button>
      <button
        className={current === "income" ? "active" : ""}
        onClick={() => onChange("income")}
      >
        💰 Revenus
      </button>
      <button
        className={current === "expense" ? "active" : ""}
        onClick={() => onChange("expense")}
      >
        💸 Dépenses
      </button>
    </div>
  )
}
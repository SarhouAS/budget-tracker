export default function Filter({ current, onChange }) {
  return (
    <div>
      <button
        onClick={() => onChange("all")}
        style={{ fontWeight: current === "all" ? "bold" : "normal" }}
      >
        Tous
      </button>
      <button
        onClick={() => onChange("income")}
        style={{ fontWeight: current === "income" ? "bold" : "normal" }}
      >
        Revenus
      </button>
      <button
        onClick={() => onChange("expense")}
        style={{ fontWeight: current === "expense" ? "bold" : "normal" }}
      >
        Dépenses
      </button>
    </div>
  )
}
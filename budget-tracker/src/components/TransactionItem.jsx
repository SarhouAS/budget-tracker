export default function TransactionItem({ transaction, onDelete }) {
  const { id, title, amount, type, date } = transaction

  const fmt = (n) =>
    n.toLocaleString("fr-FR", { style: "currency", currency: "EUR" })

  const formattedDate = new Date(date + "T00:00:00").toLocaleDateString("fr-FR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  })

  return (
    <div className={`tx-item ${type}`}>
      <div className={`tx-icon ${type}`}>
        {type === "income" ? "↑" : "↓"}
      </div>
      <div className="tx-info">
        <span className="tx-title">{title}</span>
        <span className="tx-date">{formattedDate}</span>
      </div>
      <span className={`tx-amount ${type}`}>
        {type === "income" ? "+" : "−"}{fmt(amount)}
      </span>
      <button className="btn-delete" onClick={() => onDelete(id)}>
        ✕
      </button>
    </div>
  )
}
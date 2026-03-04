export default function TransactionItem({ transaction, onDelete }) {
  const { id, title, amount, type, date } = transaction

  return (
    <div>
      <span>{type === "income" ? "💰" : "💸"}</span>
      <span>{title}</span>
      <span>{date}</span>
      <span style={{ color: type === "income" ? "green" : "red" }}>
        {type === "income" ? "+" : "-"}{amount} €
      </span>
      <button onClick={() => onDelete(id)}>Supprimer</button>
    </div>
  )
}
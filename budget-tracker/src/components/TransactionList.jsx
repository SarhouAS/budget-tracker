import TransactionItem from "./TransactionItem"

export default function TransactionList({ transactions, onDelete }) {
  if (transactions.length === 0) {
    return (
      <div className="tx-empty">
        <span className="empty-icon">◎</span>
        <p>Aucune transaction pour le moment.</p>
        <small>Ajoutez votre première transaction ci-dessus.</small>
      </div>
    )
  }

  const sorted = [...transactions].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  )

  return (
    <div>
      {sorted.map((t) => (
        <TransactionItem
          key={t.id}
          transaction={t}
          onDelete={onDelete}
        />
      ))}
    </div>
  )
}
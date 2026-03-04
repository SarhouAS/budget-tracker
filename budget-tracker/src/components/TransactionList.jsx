import TransactionItem from "./TransactionItem"

export default function TransactionList({ transactions, onDelete }) {
  if (transactions.length === 0) {
    return <p>Aucune transaction pour le moment.</p>
  }

  return (
    <div>
      {transactions.map((t) => (
        <TransactionItem
          key={t.id}
          transaction={t}
          onDelete={onDelete}
        />
      ))}
    </div>
  )
}
export default function Balance({ transactions }) {
  const totalIncome = transactions
    .filter((t) => t.type === "income")
    .reduce((sum, t) => sum + t.amount, 0)

  const totalExpense = transactions
    .filter((t) => t.type === "expense")
    .reduce((sum, t) => sum + t.amount, 0)

  const balance = totalIncome - totalExpense

  return (
    <div>
      <h2>Solde : {balance} €</h2>
      <p>Revenus : {totalIncome} €</p>
      <p>Dépenses : {totalExpense} €</p>
    </div>
  )
}
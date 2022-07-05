function cleanTransactionsList(transactions) {
  transactions = ["  1.9 ", "16.4", "17", " 1 dollar "];
  const transactionsWithoutLetters = transactions.filter(
    (element) => !/[a-zA-Z]/.test(element)
  );
  const clearTransactions = transactionsWithoutLetters.map(
    (el) => "$" + parseFloat(el).toFixed(2)
  );
  return clearTransactions;
}

// console.log(cleanTransactionList(["  1.9 ", "16.4", "17", " 1 dollar "]));
// const arr = [" 1.9", "16.4", "sdgdgs", " 1 dollar"];
// console.log(cleanTransactionsList(arr));
// console.log(arr);

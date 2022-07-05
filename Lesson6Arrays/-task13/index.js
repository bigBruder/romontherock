function withdraw(clients, balances, client, amount) {
  for (let i = 0; i < clients.length; i++) {
    if (balances[i] < amount) {
      return -1;
    }
    if (client === clients[i]) {
      return balances[i] - amount;
    }
  }
}

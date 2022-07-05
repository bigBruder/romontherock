const getTotalRevenue = transactions => {
    let total = 0;
    for(let index = 0; index < transactions.length; index++){
      total+=transactions[index].amount;
    }
    return total;
    };
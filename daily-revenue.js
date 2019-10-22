function dailyRevenue(transactions) {
  transactions.map(purchase => {
    purchase.timestamp = new Date(purchase.timestamp).toUTCString();
  });
  let revenue = {};
  for(let i = 0; i < transactions.length; i++) {
    transactions[i].timestamp = transactions[i].timestamp.slice(0, 3) + ' ' + transactions[i].timestamp.slice(8, 11) + ' ' + transactions[i].timestamp.slice(5, 7) + ' ' + transactions[i].timestamp.slice(12, 16);
    if(!revenue[transactions[i].timestamp]) revenue[transactions[i].timestamp] = Number(transactions[i].price);
    else revenue[transactions[i].timestamp] += Number(transactions[i].price);
  }
  return revenue;
}


module.exports = dailyRevenue;
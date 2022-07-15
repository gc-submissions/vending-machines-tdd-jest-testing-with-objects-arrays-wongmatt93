const formatCurrency = (amount) => {
  return amount < 0
    ? `-$${Math.abs(Math.round(amount * 100) / 100).toFixed(2)}`
    : `$${(Math.round(amount * 100) / 100).toFixed(2)}`;
};

const getCoins = (coins) => {
  let wallet = {
    quarters: 0,
    dimes: 0,
    nickels: 0,
    pennies: 0,
  };
  while (true) {
    if (coins >= 0.25) {
      wallet.quarters++;
      coins -= 0.25;
    } else if (coins >= 0.1) {
      wallet.dimes++;
      coins -= 0.1;
    } else if (coins >= 0.05) {
      wallet.nickels++;
      coins -= 0.05;
    } else if (coins >= 0.01) {
      wallet.pennies++;
      coins -= 0.01;
    } else {
      break;
    }
  }
  return wallet;
};

module.exports = { formatCurrency, getCoins };

const calculateChange = (total, payment) =>
  Math.round((payment - total) * 100) / 100;

const isSufficientPayment = (total, payment) => payment >= total;

const calculateTotal = (itemsArray) =>
  Math.round(itemsArray.reduce((pv, cv) => pv + cv.price, 0) * 100) / 100;

const addItem = (itemsArray, name, price) => {
  newItem = {
    name,
    price,
  };
  itemsArray.push(newItem);
};

const removeItem = (itemsArray, index) => {
  itemsArray.splice(index, 1);
};

module.exports = {
  calculateChange,
  isSufficientPayment,
  calculateTotal,
  addItem,
  removeItem,
};

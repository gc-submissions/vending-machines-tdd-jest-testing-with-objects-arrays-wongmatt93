const {
  calculateChange,
  isSufficientPayment,
  calculateTotal,
  addItem,
  removeItem,
} = require("../src/js/cart-functions");

describe("calculateChange", () => {
  test("total 5, payment 6 returns 1", () => {
    const result = calculateChange(5, 6);
    expect(result).toBe(1);
  });
  test("total 12.3, payment 13.03 returns .73", () => {
    const result = calculateChange(12.3, 13.03);
    expect(result).toBe(0.73);
  });
  test("total 10, payment 7 returns -3", () => {
    const result = calculateChange(10, 7);
    expect(result).toBe(-3);
  });
});

describe("isSufficientPayment", () => {
  test("total 5, payment 6 returns true", () => {
    const result = isSufficientPayment(5, 6);
    expect(result).toBe(true);
  });
  test("total 10, payment 7 returns false", () => {
    const result = isSufficientPayment(10, 7);
    expect(result).toBe(false);
  });
  test("total 3, payment 3 returns true", () => {
    const result = isSufficientPayment(3, 3);
    expect(result).toBe(true);
  });
  test("total 100, payment 99 returns false", () => {
    const result = isSufficientPayment(100, 99);
    expect(result).toBe(false);
  });
});

describe("calculateTotal", () => {
  test("itemsArray of one item of 4.99 returns 4.99", () => {
    const itemsArray = [
      {
        name: "Jelly",
        price: 4.99,
      },
    ];
    const result = calculateTotal(itemsArray);
    expect(result).toBe(4.99);
  });
  test("three items with prices 3.50, 12.99, and 0.03, it returns 16.52", () => {
    const itemsArray = [
      {
        name: "Jelly",
        price: 3.5,
      },
      {
        name: "Jelly",
        price: 12.99,
      },
      {
        name: "Jelly",
        price: 0.03,
      },
    ];
    const result = calculateTotal(itemsArray);
    expect(result).toBe(16.52);
  });
  test("empty itemsArray, it returns 0", () => {
    const itemsArray = [];
    const result = calculateTotal(itemsArray);
    expect(result).toBe(0);
  });
  test("more items in array", () => {
    const itemsArray = [
      {
        name: "Jelly",
        price: 3.5,
      },
      {
        name: "Jelly",
        price: 12.99,
      },
      {
        name: "Jelly",
        price: 0.03,
      },
      {
        name: "Jelly",
        price: 100.03,
      },
    ];
    const result = calculateTotal(itemsArray);
    expect(result).toBe(116.55);
  });
});

describe("addItem", () => {
  test("add item to empty string", () => {
    const itemsArray = [];
    addItem(itemsArray, "Beans", 3);
    expect(itemsArray).toEqual([
      {
        name: "Beans",
        price: 3,
      },
    ]);
  });
  test("add item to string with one item", () => {
    const itemsArray = [
      {
        name: "Beans",
        price: 3,
      },
    ];
    addItem(itemsArray, "Sugar", 2);
    expect(itemsArray).toEqual([
      {
        name: "Beans",
        price: 3,
      },
      {
        name: "Sugar",
        price: 2,
      },
    ]);
  });
  test("add item to string with three items", () => {
    const itemsArray = [
      {
        name: "Beans",
        price: 3,
      },
      {
        name: "Sugar",
        price: 2,
      },
      {
        name: "Jelly",
        price: 12.99,
      },
    ];
    addItem(itemsArray, "Sugar", 2);
    expect(itemsArray).toEqual([
      {
        name: "Beans",
        price: 3,
      },
      {
        name: "Sugar",
        price: 2,
      },
      {
        name: "Jelly",
        price: 12.99,
      },
      {
        name: "Sugar",
        price: 2,
      },
    ]);
  });
});

describe("removeItem", () => {
  test("remove first item", () => {
    const itemsArray = [
      {
        name: "Beans",
        price: 3,
      },
      {
        name: "Sugar",
        price: 2,
      },
      {
        name: "Jelly",
        price: 12.99,
      },
    ];
    removeItem(itemsArray, 0);
    expect(itemsArray).toEqual([
      {
        name: "Sugar",
        price: 2,
      },
      {
        name: "Jelly",
        price: 12.99,
      },
    ]);
  });
  test("remove first item", () => {
    const itemsArray = [
      {
        name: "Beans",
        price: 3,
      },
      {
        name: "Sugar",
        price: 2,
      },
      {
        name: "Jelly",
        price: 12.99,
      },
    ];
    removeItem(itemsArray, 2);
    expect(itemsArray).toEqual([
      {
        name: "Beans",
        price: 3,
      },
      {
        name: "Sugar",
        price: 2,
      },
    ]);
  });
  test("remove middle item", () => {
    const itemsArray = [
      {
        name: "Beans",
        price: 3,
      },
      {
        name: "Sugar",
        price: 2,
      },
      {
        name: "Jelly",
        price: 12.99,
      },
    ];
    removeItem(itemsArray, 1);
    expect(itemsArray).toEqual([
      {
        name: "Beans",
        price: 3,
      },
      {
        name: "Jelly",
        price: 12.99,
      },
    ]);
  });
  test("only item in array", () => {
    const itemsArray = [
      {
        name: "Beans",
        price: 3,
      },
    ];
    removeItem(itemsArray, 0);
    expect(itemsArray).toEqual([]);
  });
});

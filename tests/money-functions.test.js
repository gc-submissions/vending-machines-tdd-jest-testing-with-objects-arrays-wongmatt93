const { formatCurrency, cents } = require("../src/js/money-functions");

describe("formatCurrency", () => {
  test("0 returns '$0.00'", () => {
    const result = formatCurrency(0);
    expect(result).toBe("$0.00");
  });
  test("1 returns '$1.00'", () => {
    const result = formatCurrency(1);
    expect(result).toBe("$1.00");
  });
  test("1.5 returns '$1.50'", () => {
    const result = formatCurrency(1.5);
    expect(result).toBe("$1.50");
  });
  test("0.01 returns '$0.01'", () => {
    const result = formatCurrency(0.01);
    expect(result).toBe("$0.01");
  });
  test("527.6789 returns '$527.68'", () => {
    const result = formatCurrency(527.6789);
    expect(result).toBe("$527.68");
  });
  test("-1 returns '-$1.00'", () => {
    const result = formatCurrency(-1);
    expect(result).toBe("-$1.00");
  });
  test("5.555 returns '$5.56'", () => {
    const result = formatCurrency(5.555);
    expect(result).toBe("$5.56");
  });
  test("5.554 returns '$5.55'", () => {
    const result = formatCurrency(5.554);
    expect(result).toBe("$5.55");
  });
});

describe("getCoins", () => {
  test("32 cents produces quarters: 1, dimes: 0, nickels: 1, pennies: 2", () => {
    const result = cents(0.32);
    expect(result).toEqual({
      quarters: 1,
      dimes: 0,
      nickels: 1,
      pennies: 2,
    });
  });
  test("10 cents produces: quarters: 0, dimes: 1, nickels: 0, pennies: 0", () => {
    const result = cents(0.1);
    expect(result).toEqual({
      quarters: 0,
      dimes: 1,
      nickels: 0,
      pennies: 0,
    });
  });
  test("27 cents produces: quarters: 1, dimes: 0, nickels: 0, pennies: 2", () => {
    const result = cents(0.27);
    expect(result).toEqual({
      quarters: 1,
      dimes: 0,
      nickels: 0,
      pennies: 2,
    });
  });
  test("68 cents produces: quarters: 2, dimes: 1, nickels: 1, pennies: 3", () => {
    const result = cents(0.68);
    expect(result).toEqual({
      quarters: 2,
      dimes: 1,
      nickels: 1,
      pennies: 3,
    });
  });
});

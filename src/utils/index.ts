export const currencyFormatter = (value: number) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    minimumFractionDigits: 2,
    currency: "USD",
  });
  return formatter.format(value);
};

export const valueWithDesc = (price: number, descPercent: number) => {
  const priceWithDesc = price - ((price * descPercent) / 100);
  return {
    formatted: currencyFormatter(priceWithDesc),
    number: priceWithDesc
  };
};
const calculateOrderAmount = (products) => {
  const total = products.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  const shipping = products.reduce(
    (total, product) => total + product.shipping * product.quantity,
    0
  );

  const subtotal = Math.floor(total + shipping);

  const totalPrice = subtotal * 100;

  return totalPrice;
};

module.exports = { calculateOrderAmount };

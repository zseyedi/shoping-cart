const addItem = (products) => ({
  type: "ADD_ITEM",
  payload: product,
});

const removeItem = (product) => ({
  type: "REMOVE_ITEM",
  payload: product,
});

const increase = (product) => ({
  type: "INCREASE",
  payload: product,
});

const decrease = (product) => ({
  type: "DECREASE",
  payload: product,
});

const clear = () => ({
  type: "CLEAR",
});

const checkout = () => {
  return { type: "CHECKOUT" };
};

export { addItem, removeItem, increase, decrease, clear, checkout };

// Solution 1
const PRICE_TAGS = Object.freeze({
  anything: 4500,
  americano: 4500,
  cafelatte: 5000,
});

const removeIceAndHotText = (order) => {
  return order.replace('ice', '').replace('hot', '');
};

const solution = (orderList) => {
  return orderList.reduce((acc, order) => acc + PRICE_TAGS[removeIceAndHotText(order)], 0);
};

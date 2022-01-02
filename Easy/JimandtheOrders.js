// Solution 1
function jimOrders(orders) {
  const customerOrders = orders
    .map(([order, prep], index) => [index + 1, order + prep])
    .sort((a, b) => a[1] - b[1])
    .map((customer) => customer[0]);

  return customerOrders;
}

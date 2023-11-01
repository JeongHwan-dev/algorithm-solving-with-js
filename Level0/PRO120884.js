// Solution 1
function solution(chicken) {
  const NUMBER_OF_COUPON_REQUIRED_FOR_ONE_CHICKEN = 10;
  let maxNumberOfChickensServed = 0;

  while (chicken >= NUMBER_OF_COUPON_REQUIRED_FOR_ONE_CHICKEN) {
    const numberOfChickensServed = Math.floor(chicken / NUMBER_OF_COUPON_REQUIRED_FOR_ONE_CHICKEN);

    maxNumberOfChickensServed += numberOfChickensServed;
    chicken = numberOfChickensServed + (chicken % NUMBER_OF_COUPON_REQUIRED_FOR_ONE_CHICKEN);
  }

  return maxNumberOfChickensServed;
}

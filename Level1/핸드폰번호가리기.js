// Solution 1
function solution1(phoneNumber) {
  const phoneNumberLength = phoneNumber.length;
  const lastPhoneNumber = phoneNumber.slice(phoneNumberLength - 4);
  const asterisk = Array.from(
    { length: phoneNumberLength - 4 },
    () => '*'
  ).join('');
  const hiddenPhoneNumber = asterisk + lastPhoneNumber;

  return hiddenPhoneNumber;
}

// Solution 2
function solution2(phoneNumber) {
  const hiddenPhoneNumber = phoneNumber
    .split('')
    .map((num, index) => (index < phoneNumber.length - 4 ? '*' : num))
    .join('');

  return hiddenPhoneNumber;
}

// Solution 3
function solution3(phoneNumber) {
  const hiddenPhoneNumber =
    '*'.repeat(phoneNumber.length - 4) + phoneNumber.slice(-4);

  return hiddenPhoneNumber;
}

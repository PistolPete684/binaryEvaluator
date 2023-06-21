const binaryArrayToNumber = arr => {
  // Join the array elements into a single string
  const binaryString = arr.join('');

  // Parse the binary string as an integer with base 2
  const decimalValue = parseInt(binaryString, 2);

  return decimalValue;
};
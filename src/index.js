module.exports = function reverse (n) {
  let num = Math.abs(n);
  let remainder;
  let str = '';
  
  while (num > 0) {
    remainder = num % 10;
    num = Math.floor(num / 10);
    str += remainder.toString();
  }

  return str;
}

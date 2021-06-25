const str = new String("hola");

String.prototype.reverse = function () {
  let res = "";
  for (let i = this.valueOf().length - 1; i > -1; i--) {
    res += this.valueOf()[i];
  }
  return res;
};

console.log(str.reverse());

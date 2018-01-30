// eslint-disable-next-line
export default Array.prototype.equals = function (array) {
    for (var i = 0; i < this.length; i++) {
        if (this[i] !== array[i]) {
            return false
        }
    }
  return true;
}


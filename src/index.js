class Sorter {
  constructor() {
    this.elem = [];
    this.trigger = 0;
  }

  add(element) {
    this.elem.push(element);
  }

  at(index) {
    return this.elem[index];
  }

  get length() {
    var count = 0;
    for (var i in this.elem ) count++;
    return count;
  }

  toArray() {
    return this.elem;
  }

  sort(indices) {
    var x, j;
    if (indices[0] > indices[1]) indices.reverse();
    for (var i = indices[0]+1; i <= indices[indices.length-1]; i++) {
      x = this.elem[i];
      j = i;
      while ((j > indices[0])&&(x < this.elem[j-1])) {
        this.elem[j] = this.elem[j-1];
        j--;
      };
      this.elem[j] = x;
    };
  }

  setComparator(compareFunction) {
    // your implementation
  }
}

module.exports = Sorter;
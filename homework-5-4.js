class StringBuilder {
  constructor(value) {
    this._value = value;
  }
  get value() {
    return this._value;
  }
  append(str) {
    this._value = this._value + str;
    return this._value;
  }
  prepend(str) {
    this._value = str + this._value;
    return this._value;
  }
  pad(str) {
    return this.append(str) + this._value + this.prepend(str);
  }
}

console.log(typeof StringBuilder);
// 'function'

const builder = new StringBuilder(".");

builder.append("^");
console.log(builder.value); // '.^'

builder.prepend("^");
console.log(builder.value); // '^.^'

builder.pad("=");
console.log(builder.value); // '=^.^='

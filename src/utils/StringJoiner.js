
export default class StringJoiner {
  data = [];
  delimiter = ',';

  constructor (delimiter) {
    this.data = [];
    this.delimiter = delimiter;
    
    return this;
  }

  append = (value) => {
    this.data.push(value);
    return this;
  }

  clear = () => {
    this.data = [];
  }

  toString = () => {
    return this.data.join(this.delimiter);
  }
}
class Set {
  constructor(array) {
    this.array = array;
    if(!array) this.array = [];
  }

  add(value) {
    if(!this.array.includes(value)) this.array.push(value);
  }

  remove(value) {
    if(this.array.includes(value)) this.array.splice(this.array.indexOf(value), 1);
  }

  has(value) {
    if(this.array.includes(value)) return true;
    else return false;
  }

  intersection(set) {
    const newSet = new Set();
    for(let i = 0; i < set.array.length; i++) {
      if(this.array.includes(set.array[i])) newSet.add(set.array[i]);
    }
    return newSet;
  }

  union(set) {
    const newSet = new Set();
    for(let i = 0; i < set.array.length; i++) {
      newSet.add(set.array[i]);
    }
    for(let j = 0; j < this.array.length; j++) {
      newSet.add(this.array[j]);
    }
    return newSet;
  }

  difference(set) {
    const newSet = new Set();
    for(let i = 0; i < set.array.length; i++) {
      newSet.add(set.array[i]);
    }
    for(let j = 0; j < this.array.length; j++) {
      if(newSet.has(this.array[j])) newSet.remove(this.array[j]);
      else if(!newSet.has(this.array[j])) newSet.add(this.array[j]);
    }
    return newSet;
  }


  
  static intersection(setOne, setTwo) {
    const newSet = new Set();
    for(let i = 0; i < setOne.array.length; i++) {
      if(setTwo.array.includes(setOne.array[i])) newSet.add(setOne.array[i]);
    }
    return newSet;
  }

  static union(setOne, setTwo) {
    const newSet = new Set();
    for(let i = 0; i < setOne.array.length; i++) {
      newSet.add(setOne.array[i]);
    }
    for(let j = 0; j < setTwo.array.length; j++) {
      newSet.add(setTwo.array[j]);
    }
    return newSet;
  }

  static difference(setOne, setTwo) {
    const newSet = new Set();
    for(let i = 0; i < setOne.array.length; i++) {
      newSet.add(setOne.array[i]);
    }
    for(let j = 0; j < setTwo.array.length; j++) {
      if(newSet.has(setTwo.array[j])) newSet.remove(setTwo.array[j]);
      else if(!newSet.has(setTwo.array[j])) newSet.add(setTwo.array[j]);
    }
    return newSet;
  }
}

module.exports = Set;
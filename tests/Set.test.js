const Set = require('../Set');

describe('Testing Set Class', () => {

  it('creates a new set', () => {
    const set = new Set([1, 2, 3]);
    expect(set.array).toEqual([1, 2, 3]);
  });

  it('adds a value to a set', () => {
    const set = new Set([1, 2, 3]);
    set.add(3);
    set.add(4);
    expect(set.array).toEqual([1, 2, 3, 4]);
  });

  it('removes a value from a set', () => {
    const set = new Set([1, 2, 3]);
    set.remove(2);
    expect(set.array).toEqual([1, 3]);
  });

  it('checks if a set contains a value', () => {
    const set = new Set([1, 2, 3]);
    const result = set.has(6);
    expect(result).toBeFalse;
  });

  it('returns the intersection of two sets', () => {
    const set = new Set([1, 2, 3]);
    const setTwo = new Set([3, 4, 5]);
    const result = set.intersection(setTwo);
    expect(result.array).toEqual([3]);
  });

  it('returns the union of two sets', () => {
    const set = new Set([1, 2, 3]);
    const setTwo = new Set([1, 2, 5, 6]);
    const result = set.union(setTwo);
    expect(result.array).toEqual([1, 2, 5, 6, 3]);
  });

  it('returns the difference of two sets', () => {
    const set = new Set([1, 2, 3]);
    const setTwo = new Set([1, 2, 5, 6]);
    const result = set.difference(setTwo);
    expect(result.array).toEqual([5, 6, 3]);
  });
});
const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

describe('calculateNumber', () => {
  describe('Basic Integer Summation', () => {
    it('should return 4 when adding 1 and 3', () => {
      assert.strictEqual(calculateNumber(1, 3), 4);
    });
  });

  describe('Rounding Fractional B Values', () => {
    it('should return 5 when adding 1 and 3.7 (rounds up to 4)', () => {
      assert.strictEqual(calculateNumber(1, 3.7), 5);
    });
  });

  describe('Rounding Fractional A Values', () => {
    it('should return 5 when adding 1.2 (rounds down to 1) and 3.7', () => {
      assert.strictEqual(calculateNumber(1.2, 3.7), 5);
    });
  });

  describe('Handling Exact .5 Precision Boundaries', () => {
    it('should return 6 when adding 1.5 (rounds up to 2) and 3.7', () => {
      assert.strictEqual(calculateNumber(1.5, 3.7), 6);
    });
  });

  describe('Handling Negative Number Parameters', () => {
    it('should return -2 when adding -1 and -1', () => {
      assert.strictEqual(calculateNumber(-1, -1), -2);
    });

    it('should return -2 when adding -1.4 (rounds to -1) and -1.4', () => {
      assert.strictEqual(calculateNumber(-1.4, -1.4), -2);
    });

    it('should return -4 when adding -1.6 (rounds to -2) and -1.6', () => {
      assert.strictEqual(calculateNumber(-1.6, -1.6), -4);
    });
  });
});

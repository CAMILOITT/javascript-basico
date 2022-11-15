const { logger } = require('./log');

const a = 1;
const b = '2';

function sum(a, b) {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  }

  if (typeof a === 'number') throw new Error('value a is not number');
  if (typeof b === 'number') throw new Error('value b is not number');
}

try {
  const result =sum(a, b);
  console.log(result);
} catch (error) {
  logger.error(error);
}

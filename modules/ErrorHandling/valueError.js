"use strict";

class UserError extends Error {
  constructor(message) {
    super(message);
    this.name='UserError';
}
}

function number(num) {

if (Number.isInteger(num)) {}
else {
  throw new UserError('Число не целое!');
}
  
}

try {
  number(12.2);
} catch(err) {
  if (err instanceof UserError) {
    alert("Число не целое: " + err.message);
  };
}
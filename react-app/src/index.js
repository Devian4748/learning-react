import React from 'react';

function getReactVersion() {
  return React.version;
}

function createDivElement() {
  return React.createElement('div', null, 'Hello World!');
}

function createTitle() {
  return React.createElement(
    'h1',
    { className: 'hero-title' },
    'Welcome to our supermarket'
  );
}

console.log(getReactVersion());
console.log(createDivElement());
console.log(createTitle());

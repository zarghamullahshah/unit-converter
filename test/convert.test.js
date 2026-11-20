'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const { convertLength, convertWeight, convertTemperature } = require('../src/convert');

function approx(actual, expected, epsilon = 1e-9) {
  assert.ok(Math.abs(actual - expected) < epsilon, `${actual} !~= ${expected}`);
}

test('length: kilometres to metres', () => {
  approx(convertLength(1, 'km', 'm'), 1000);
});

test('length: miles to kilometres', () => {
  approx(convertLength(1, 'mi', 'km'), 1.609344);
});

test('length: same unit returns input', () => {
  approx(convertLength(42, 'ft', 'ft'), 42);
});

test('weight: pounds to kilograms', () => {
  approx(convertWeight(1, 'lb', 'kg'), 0.45359237);
});

test('weight: tonnes to grams', () => {
  approx(convertWeight(1, 't', 'g'), 1_000_000);
});

test('temperature: celsius to fahrenheit', () => {
  approx(convertTemperature(100, 'C', 'F'), 212);
  approx(convertTemperature(0, 'C', 'F'), 32);
  approx(convertTemperature(-40, 'C', 'F'), -40);
});

test('temperature: fahrenheit to kelvin', () => {
  approx(convertTemperature(32, 'F', 'K'), 273.15);
});

test('invalid input throws', () => {
  assert.throws(() => convertLength('5', 'km', 'm'), TypeError);
  assert.throws(() => convertLength(5, 'km', 'parsec'), RangeError);
  assert.throws(() => convertWeight(5, 'stone', 'kg'), RangeError);
  assert.throws(() => convertTemperature(5, 'C', 'R'), RangeError);
});

'use strict';

/**
 * Unit conversion library: length, weight and temperature.
 * Every function validates its input and throws a TypeError/RangeError
 * with a clear message on bad input.
 */

function assertNumber(value, name) {
  if (typeof value !== 'number' || Number.isNaN(value)) {
    throw new TypeError(`${name} must be a number.`);
  }
}

const LENGTH_TO_METRES = {
  m: 1,
  km: 1000,
  cm: 0.01,
  mm: 0.001,
  mi: 1609.344,
  yd: 0.9144,
  ft: 0.3048,
  in: 0.0254,
};

const WEIGHT_TO_KG = {
  kg: 1,
  g: 0.001,
  mg: 0.000001,
  lb: 0.45359237,
  oz: 0.028349523125,
  t: 1000,
};

function convertLength(value, from, to) {
  assertNumber(value, 'value');
  if (!(from in LENGTH_TO_METRES)) throw new RangeError(`Unknown length unit: ${from}`);
  if (!(to in LENGTH_TO_METRES)) throw new RangeError(`Unknown length unit: ${to}`);
  return (value * LENGTH_TO_METRES[from]) / LENGTH_TO_METRES[to];
}

function convertWeight(value, from, to) {
  assertNumber(value, 'value');
  if (!(from in WEIGHT_TO_KG)) throw new RangeError(`Unknown weight unit: ${from}`);
  if (!(to in WEIGHT_TO_KG)) throw new RangeError(`Unknown weight unit: ${to}`);
  return (value * WEIGHT_TO_KG[from]) / WEIGHT_TO_KG[to];
}

function convertTemperature(value, from, to) {
  assertNumber(value, 'value');
  const units = ['C', 'F', 'K'];
  if (!units.includes(from)) throw new RangeError(`Unknown temperature unit: ${from}`);
  if (!units.includes(to)) throw new RangeError(`Unknown temperature unit: ${to}`);
  if (from === to) return value;

  let celsius;
  if (from === 'C') celsius = value;
  else if (from === 'F') celsius = ((value - 32) * 5) / 9;
  else celsius = value - 273.15; // from K

  if (to === 'C') return celsius;
  if (to === 'F') return (celsius * 9) / 5 + 32;
  return celsius + 273.15; // to K
}

module.exports = { convertLength, convertWeight, convertTemperature };

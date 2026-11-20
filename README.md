# Unit Converter (JavaScript / Node.js)

A small, dependency-free unit conversion library for Node.js — length, weight and temperature, with strict input validation and a full test suite using Node's built-in test runner.

## Usage

```js
const { convertLength, convertWeight, convertTemperature } = require('./src/convert');

convertLength(1, 'mi', 'km');        // 1.609344
convertWeight(70, 'kg', 'lb');       // 154.323...
convertTemperature(100, 'C', 'F');   // 212
```

Supported units:

- **Length:** `m`, `km`, `cm`, `mm`, `mi`, `yd`, `ft`, `in`
- **Weight:** `kg`, `g`, `mg`, `lb`, `oz`, `t`
- **Temperature:** `C`, `F`, `K`

Invalid values throw a `TypeError`; unknown units throw a `RangeError`.

## Run the tests

```bash
npm test   # uses node --test, no dependencies to install
```

## Project structure

```
├── src/convert.js        # The conversion library
└── test/convert.test.js  # Tests (node:test + node:assert)
```

## Author

**Zargham Ullah Shah** — Full Stack Web Developer | Salesforce CRM Specialist
GitHub: [@zarghamullahshah](https://github.com/zarghamullahshah)

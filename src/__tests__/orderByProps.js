import orderByProps from '../orderByProps';

test.each([
  [
    {
      name: 'мечник',
      health: 10,
      level: 2,
      attack: 80,
      defence: 40,
    },
    ['name', 'level'],
    [
      { key: 'name', value: 'мечник' },
      { key: 'level', value: 2 },
      { key: 'attack', value: 80 },
      { key: 'defence', value: 40 },
      { key: 'health', value: 10 },
    ],
  ],
  [
    {
      name: 'мечник',
      health: 10,
      level: 2,
      attack: 80,
      defence: 40,
    },
    ['health', 'defence'],
    [
      { key: 'health', value: 10 },
      { key: 'defence', value: 40 },
      { key: 'attack', value: 80 },
      { key: 'level', value: 2 },
      { key: 'name', value: 'мечник' },
    ],
  ],
  [
    {
      name: 'мечник',
      health: 10,
      level: 2,
      attack: 80,
      defence: 40,
    },
    ['attack'],
    [
      { key: 'attack', value: 80 },
      { key: 'defence', value: 40 },
      { key: 'health', value: 10 },
      { key: 'level', value: 2 },
      { key: 'name', value: 'мечник' },
    ],
  ],
  [
    {
      name: 'мечник',
      health: 10,
      level: 2,
      attack: 80,
      defence: 40,
    },
    ['level', 'attack', 'health'],
    [
      { key: 'level', value: 2 },
      { key: 'attack', value: 80 },
      { key: 'health', value: 10 },
      { key: 'defence', value: 40 },
      { key: 'name', value: 'мечник' },
    ],
  ],

])('Test', (obj, props, result) => {
  expect(orderByProps(obj, props)).toEqual(result);
});

test.each([
  [
    {
      name: 'мечник',
      health: 10,
      level: 2,
      attack: 80,
      defence: 40,
    },
    ['name', 'level'],
    [
      { key: 'name', value: 'мечник' },
      { key: 'level', value: 2 },
      { key: 'defence', value: 40 },
      { key: 'attack', value: 80 },
      { key: 'health', value: 10 },
    ],
  ],
  [
    {
      name: 'мечник',
      health: 10,
      level: 2,
      attack: 80,
      defence: 40,
    },
    ['health', 'defence'],
    [
      { key: 'defence', value: 40 },
      { key: 'health', value: 10 },
      { key: 'attack', value: 80 },
      { key: 'level', value: 2 },
      { key: 'name', value: 'мечник' },
    ],
  ],
  [
    {
      name: 'мечник',
      health: 10,
      level: 2,
      attack: 80,
      defence: 40,
    },
    ['attack'],
    [
      { key: 'attack', value: 80 },
      { key: 'defence', value: 40 },
      { key: 'health', value: 10 },
      { key: 'name', value: 'мечник' },
      { key: 'level', value: 2 },
    ],
  ],
  [
    {
      name: 'мечник',
      health: 10,
      level: 2,
      attack: 80,
      defence: 40,
    },
    ['level', 'attack', 'health'],
    [
      { key: 'attack', value: 80 },
      { key: 'health', value: 10 },
      { key: 'level', value: 2 },
      { key: 'defence', value: 40 },
      { key: 'name', value: 'мечник' },
    ],
  ],

])('Test with wrong orders', (obj, props, result) => {
  expect(orderByProps(obj, props)).not.toEqual(result);
});

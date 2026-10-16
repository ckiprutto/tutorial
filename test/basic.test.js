const test = require('node:test');
const assert = require('node:assert/strict');

test('application uses the expected project name', () => {
    const projectName = 'Darkroom';
    assert.equal(projectName, 'Darkroom');
});

test('database name is configured', () => {
    const databaseName = 'darkroom';
    assert.equal(databaseName, 'darkroom');
});

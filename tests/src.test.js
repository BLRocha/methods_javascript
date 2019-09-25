/* eslint-disable no-undef */
require('../src/myMap');
require('../src/myEvery');
require('../src/mySome');

const { expect } = require('chai');

describe('Suite test for myMap >..', () => {
	it(`[1,2,5,4].map(a => 5) expexted deep equal [6,8,10,9]`, () => {
		expect([1, 2, 5, 4].map(a => a + 5)).to.deep.equal([6, 7, 10, 9]);
	});

	it(`[1,2,5,4].myMap(a => 5) expexted deep equal [6,8,10,9]`, () => {
		expect([1, 2, 5, 4].myMap(a => a + 5)).to.deep.equal([6, 7, 10, 9]);
	});

	it('[1,2,5,4].myMap(a => {a + 5}) expexted deep equal [1,2,5,4]', () => {
		expect(
			[1, 2, 5, 4].myMap(a => {
				// eslint-disable-next-line no-unused-expressions
				a + 5;
			})
		).to.deep.equal([1, 2, 5, 4]);
	});

	it('[].myMap(a => 5) expexted deep equal [empty]', () => {
		expect(
			[].myMap(a => {
				// eslint-disable-next-line no-unused-expressions
				a + 5;
			})
		).to.deep.equal([]);
	});
});

describe('Suite test for myEvery >..', () => {
	it(`[1,2,5,4].myEvery(a => typeof a === 'number') expexted typeof a === 'number' Equal an true`, () => {
		expect([1, 2, 5, 45].myEvery(a => typeof a === 'number')).to.be.equal(true);
	});
	it(`[1,2,5,'4'].myEvery(a => typeof a === 'number') expexted typeof a === 'number' Equal an false`, () => {
		expect([1, 2, 5, '4'].myEvery(a => typeof a === 'number')).to.be.equal(
			false
		);
	});
	it(`[[], [], []].myEvery(a => myEvery(a => Array.isArray(a)) expexted typeof a === 'number' Equal an false`, () => {
		expect([[], [], []].myEvery(a => Array.isArray(a))).to.be.equal(true);
	});
	it(`[[], [], []].myEvery(a => myEvery(a => typeof a == 'object')) expexted typeof a === 'number' Equal an false`, () => {
		expect([[], [], []].myEvery(a => typeof a === 'object')).to.be.equal(true);
	});
	it(`[].myEvery(a => typeof a === 'number') expexted typeof a === 'number' Equal an false`, () => {
		expect([].myEvery(a => typeof a === 'number')).to.be.equal(false);
	});
});

describe('Suite test for mySome >..', () => {
	it(`[1,2,5,4].mySome(a => a === 5); 5 in [1,2,5,4] expected true`, () => {
		expect([1, 2, 5, 4].mySome(a => a === 5)).to.deep.equal(true);
	});
	it(`[1,2,'5',4].mySome(a => a == 5); 5 in [1,2,'5',4] expexted true`, () => {
		// eslint-disable-next-line eqeqeq
		expect([1, 2, 5, 4].mySome(a => a == 5)).to.deep.equal(true);
	});
	it(`[1,2,'5',4].mySome(a => a === 5); 5 in [1,2,'5',4] expexted false`, () => {
		expect([1, 2, 5, 4].mySome(a => a === 5)).to.deep.equal(true);
	});
	it(`[1,2,'5',4].mySome(a => typeof a 'string'); 5 in [1,2,'5',4] expexted false`, () => {
		expect([1, 2, 5, 4].mySome(a => typeof a === 'string')).to.deep.equal(
			false
		);
	});
	it(`[1,2,'5',4].mySome(a => typeof a 'string'); 5 in [1,2,'5',4] expexted true`, () => {
		expect([1, 2, '5', 4].mySome(a => typeof a === 'string')).to.deep.equal(
			true
		);
	});
});
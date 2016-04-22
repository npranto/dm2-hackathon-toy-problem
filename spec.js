'use strict';

const testArr = [ 5, 4, 3, 2, 1 ];
const testArrTwo = [ 10, { test: `test` }, () => `hello` ];
const testStrOne = `Hello world!`;
const testStrTwo = `Hello`;
const testNum = 891;
const testNumTwo = -404;
const testNumThree = 1;
const testObj = {
	firstProp: `a string`
	, secondProp: 44
	, thirdProp: false
};
const testFunc = () => 4099;

const testFuncTwo = () => undefined;

const { expect } = chai;

describe( `split any`, () => {
	it( `returns a copy if passed an array`, () => {
		expect( splitAny( testArr ) ).to.eql( [ [ 5 ], [ 4 ], [ 3 ], [ 2 ], [ 1 ] ] );
		expect( splitAny( testArrTwo ) ).to.eql(  [ [ 1, 0 ], [ [ `test`, `test` ] ], [ `h`, `e`, `l`, `l`, `o` ] ] );

		expect( testArr ).to.eql( [ 5, 4, 3, 2, 1 ] );
	});

	it( `splits a string with spaces based on spaces`, () => {
		expect( splitAny( testStrOne ) ).to.eql( [ [ `H`, `e`, `l`, `l`, `o` ], [ `w`, `o`, `r`, `l`, `d`, `!` ] ] );
		expect( testStrOne ).to.equal( `Hello world!` );
	});

	it( `splits a string without spaces on every character`, () => {
		expect( splitAny( testStrTwo ) ).to.eql( [ `H`, `e`, `l`, `l`, `o` ] );
		expect( testStrTwo ).to.equal( `Hello` );
	});

	it( `splits numbers`, () => {
		expect( splitAny( testNum ) ).to.eql( [ 8, 9, 1 ] );
		expect( testNum ).to.equal( 891 );

		expect( splitAny( testNumTwo ) ).to.eql( [ `-`, 4, 0, 4 ] );
		expect( testNumTwo ).to.equal( -404 );

		expect( splitAny( testNumThree ) ).to.eql( [ 1 ] );
		expect( testNumThree ).to.equal( 1 );
	});

	it( `splits objects into nested arrays of key value pairs`, () => {
		expect( splitAny( testObj ) ).to.eql( [ [ `firstProp`, `a string` ], [ `secondProp`, 44 ], [ `thirdProp`, false ] ] );
		expect( testObj ).to.eql({
			  firstProp: `a string`
			, secondProp: 44
			, thirdProp: false
		});
	});

	it( `splits the return value of a function`, () => {
		expect( splitAny( testFunc ) ).to.eql( [ 4, 0, 9, 9 ] );
	});

	it( `throws a type error if passed the wrong type of value`, () => {
		expect( splitAny.bind( this, false ) ).to.throw( `Expected an array, string, object, number, or function, instead got boolean false` );
		expect( splitAny.bind( this, testFuncTwo ) ).to.throw( `Expected an array, string, object, number, or function, instead got undefined undefined` );
		expect( splitAny.bind( this, null ) ).to.throw( `Expected an array, string, object, number, or function, instead got object null` );
	});
});

'use strict';
/* describe, before, it, */
const assert = require('assert').deepStrictEqual;

describe('Augur load', function() {
	let Augur;
	describe('should correctly load', function() {
    	before( function() {
			browser.url('http://testing.augur.ai/tests/dynamic.html');
	        browser.waitUntil(function() {
	            if ( browser.getText('#augurLoaded') === 'True' ) {
	            	return Augur = browser.execute(function() {
	                    return window.augur;
	                }).value;
	            }
	        }, undefined, 'Augur failed to load' );
	    });
	    it('should have #augurLoaded', function() {
	        assert( browser.getText('#augurLoaded') === 'True', true );
		});
	});
});


// describe('URL contains email', function() {
//     //global.utilities.log( this );
//     it('should have #augurLoaded', function() {
//         browser.url('http://testing.augur.ai/tests/dynamic.html');
//         assert( browser.getText('#augurLoaded'), 'True' );
//         assert( browser.urlContains('test@augur.io'));
//     });
// });

// describe('A blur event has email in it', function() {
//     //global.utilities.log( this );
//     it('should have #augurLoaded', function() {
//         browser.url('http://testing.augur.ai/tests/blurevent.html');
//         assert( browser.getText('#augurLoaded'), 'True' );
//         assert( browser.getText('input[id=email]'), 'test@augur.io');
//     });
// });

// describe('Cookie found with email', function() {
//     //global.utilities.log( this );
//     it('should have #augurLoaded', function() {
//         browser.url('http://testing.augur.ai/tests/cookie.html');
//         assert( browser.getText('#augurLoaded'), 'True' );
//     });
// });

// describe('Local storage has email', function() {
// 	it('should have #augurLoaded', function() {
// 		browser.url('http://testing.augur.ai/tests/localstorage.html');
// 		var obj = {'email': 'test@augur.io'};
// 		browser.execute( function() {
// 			window.localStorage.setItem('testObject', JSON.stringify(obj));
// 		});
// 	});
// });




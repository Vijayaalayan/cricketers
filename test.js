import test from 'ava';
import cricketers from '.';

test('main', t => {
	t.true(cricketers.all.length > 0);
	t.true(cricketers.all.includes('Paul Stirling'));
	t.truthy(cricketers.random());
});

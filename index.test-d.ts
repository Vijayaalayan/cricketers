import {expectType} from 'tsd';
import cricketers = require('.');

expectType<readonly string[]>(cricketers.all);
expectType<string>(cricketers.random());

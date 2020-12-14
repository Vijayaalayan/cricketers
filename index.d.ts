import cricketersJson = require('./cricketers.json');

declare const cricketers: {
	/**
	Cricketers names in ODI order as in wikipedia.
	@example
	```
	import cricketers = require('cricketers');
	cricketers.all;
	//=> ['Mahendra Singh Dhoni', 'Rohit Sharma', …]
	```
	*/
	readonly all: Readonly<typeof cricketersJson>;

	/**
	Random cricketer name.
	@example
	```
	import cricketers = require('cricketers');
	cricketers.random();
	//=> 'Virat Kohli'
	```
	*/
	random(): string;
}

export = cricketers;
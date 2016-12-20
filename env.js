'use strict';

const TARGET = process.env.npm_lifecycle_event;
let env = 'prod';

switch (TARGET) {
	case 'start':
	case 'ios':
	case 'android':
		env = 'development';
}


console.log("ENV:", env);

module.exports = env;

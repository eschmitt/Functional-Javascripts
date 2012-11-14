var config = exports

config['server tests'] = {
  environment: 'node'
, rootPath: '../'
// TODO: uncomment when prelude.js properly 'requires' functional.js
//, src: ['*.js']
, tests: ['spec/server/*.js']
}

[![Build Status](https://travis-ci.org/lxanders/node-express-base.svg?branch=master)](https://travis-ci.org/lxanders/node-express-base)

node-express-base
=================
This is a small example which can be used as a starting point on how to get
going with a clean development infrastructure. It sure is only one of countless
ways how to structure your project and which tools to use.

I used similar setups in projects with a team working on them - it works well
for us. If it does not for you, I would be glad to hear from you.

Technology
----------

## Prerequisites
You should use `node.js` version v0.10 or higher.

## The stack
- `Grunt.js` for building-, test- and watcher-tasks ([github home](https://github.com/gruntjs/grunt))
- `Express.js` as the web application framework on the server side ([github home](https://github.com/visionmedia/express))
- Testing and stubbing:
  - Test-Framework: `Mocha` ([github home](https://github.com/visionmedia/mocha))
  - Assertions: `Chai` ([github home](https://github.com/chaijs/chai))
  - Stubbing etc.: `Sinon.JS` ([github home](https://github.com/cjohansen/Sinon.JS))
- `ESLint` for linting ([homepage](http://eslint.org/))

Getting started
----------------
There are some tasks that are especially useful in the current configuration:
- `npm start`:
  - Starts the express server on http://localhost:3000
- `npm test`:
  - Runs the linting
  - Runs all tests (only the unit tests folder in this example)
- `grunt clean`:
  - This cleans your build (only the `node_modules` for now)

Next steps
----------
You should start by understanding the setup - one of the most important parts
is the `Gruntfile.js` which holds the tasks and configuration of the project. You
can find more configuration in the `package.json` file and for sure the packages
that are installed.

A way more detailed guide to this setup will later be available on my blog.

[![Build Status](https://img.shields.io/travis/lxanders/node-express-base/master.svg?style=flat)](https://travis-ci.org/lxanders/node-express-base)
[![Coverage Status](https://img.shields.io/coveralls/lxanders/node-express-base/master.svg?style=flat)](https://coveralls.io/r/lxanders/node-express-base)

# Deprecated: node-express-base

This aims to be one possible project configuration for a server side rendered web application.

Note: This project is completely rewritten to use ES6 / ES2015 in its most recent version.

## Prerequisites

The project is currently tested on the [Travis CI](https://travis-ci.org/lxanders/node-express-base) with [`Node.js`](https://nodejs.org) versions `4.0.0` & `5.0.0`.

## Getting started

These steps will get you started and show the most important steps.

### Get the project base

There are two ways to fetch the project:

1. Recommended method: Clone the project from GitHub (which will require a GitHub account). This offers the latest and best version coming from the `master` branch (which should always be stable). Get the code e.g. using `https` either by
    * cloning With the full project history:  
    `git clone https://github.com/lxanders/node-express-base.git`
    * cloning With a limited number of history items to save space (only one in this example):  
    `git clone --depth=1 https://github.com/lxanders/node-express-base.git`
2. Download one of the release packages from the [release page](https://github.com/lxanders/node-express-base/releases) and extract it.

### Install the dependencies

```
npm install
```

### Make sure your project base is fine

```
npm test
```

This will check for linting errors and will recursively execute all tests in `test/`.

### Start the project in watcher mode

```
npm run dev
```

This will start the `express` server on [http://localhost:3000](http://localhost:3000).

### Update the project information

Important: The following files should be updated to fit your new project.

* `package.json`: Update fields like
  * `name`: The project name
  * `description`: A short description of your project
  * `version`: The version number for your project
  * `repository`: This should point to your project repository
  * `author`: This can be removed entirely or updated to your preferred name
  * `license`: Update the type of license you want to use (or use the preconfigured MIT license)
* `LICENSE`: Update this to fit your needs
* See the [Docker section](#docker) for information about Docker and how to customise it (especially the notes part)

**Hints**

* Running the `dev` script will start your server and restart it each time a relevant file changes
* Running the `test:unit:watch` script runs the unit tests with a watcher and uses a minimal reporter. This helps focussing on the relevant tests and is as such ideal for TDD (Test Driven Development)
* Run `npm test` and run it often. Once you add code and tests this makes sure that you comply to the code standards and your tests still work
* The project is configured to check for 100% code coverage. While this might seem much it is actually following the simple rule that 100% coverage doesn't prove that everything is tested but having less then 100% proves that there are untested parts. Don't take this dogmatic however: There are situations and parts in code that are not meant to be unit tested. Pure wiring code as in the `server/index.js` file is an example for this. While it is technically possible to unit test this code, it is often only possible by repeating the implementation and stubbing too much. In these cases it is totally valid to disable files or some branches. But first think about the reason why testing this part of the code is so hard. Often the reason is that the software design is not ideal and might be improvable (e.g. by using dependency injection to solve dependencies). Having a check for 100% that bails for values below can help you remind you to think about these points

# Additional information

## The stack

The following libraries and tools are used:

* Simple `npm` scripts for all project related tasks
* `Express.js` as the server side web application framework ([github home](https://github.com/visionmedia/express))
* Testing and stubbing:
  * Test-Framework: `Mocha` ([github home](https://github.com/visionmedia/mocha))
  * Assertions: `Chai` ([github home](https://github.com/chaijs/chai))
  * Stubbing etc.: `Sinon.JS` ([github home](https://github.com/cjohansen/Sinon.JS))
  * Code coverage: `isparta` ([github home](https://github.com/douglasduteil/isparta))
* `ESLint` for linting ([homepage](http://eslint.org/))

## Coverage

The code coverage is analyzed by `isparta` which uses internally `istanbul`. It reads the `.istanbul.yml` configuration file as `istanbul` itself would which is the reason why this configuration is used even without having a direct `istanbul` dependency mentioned in the `package.json` file.

## <a name="docker">Docker</a>

In the `Dockerfile` your image is described. You can use this image for deployment of your web application.

You can build Docker images of your project by running:

```
npm run build:docker
```

This will create an image that can be started using docker on this machine:

```
npm run start:docker
```

This will start a container from your image. You can test this container by running:

* When using [`boot2docker`](http://boot2docker.io) (typically on a mac machine): As `boot2docker` requires a virtual machine for running Docker
  * You need to find out the ip of this virtual machine: `boot2docker ip`
  * Open up `http://<this ip>:42123`
* Without it: Open up `http://locahost:42123`

This should show your page. See the [Docker documentation](https://docs.docker.com/) for more information about the capabilities of Docker.

***Notes***

* When running on a classical linux environment: The two scripts `build:docker` and `start:docker` assume that you are able to run `docker` on your terminal without `sudo`
* The line `EXPOSE 3000` in the `Dockerfile`: This exposes port 3000 of your application (which is used by the server)
* You might want to change the port mapping: Currently it is configured when the container is started to map port `42123` of your host system to port `3000` of your container
* You most likely want to change the `build:docker` and `start:docker` scripts to contain the name of your project instead of `node-express-base`
* List of all locally available docker images: `docker images`
* List of all running docker containers: `docker ps`
* You can use e.g. the docker container [`nginx-proxy`](https://github.com/jwilder/nginx-proxy) for simple reverse proxying
* List of all docker containers (running and stopped alike): `docker ps -a`

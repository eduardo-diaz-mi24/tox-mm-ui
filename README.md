# tox-mm-ui

[![GitHub version](https://badge.fury.io/gh/dasrick%2Ftox-mm-ui.svg)](https://badge.fury.io/gh/dasrick%2Ftox-mm-ui)
[![dependency Status](https://david-dm.org/dasrick/tox-mm-ui/status.svg)](https://david-dm.org/dasrick/tox-mm-ui#info=dependencies)
[![devDependency Status](https://david-dm.org/dasrick/tox-mm-ui/dev-status.svg)](https://david-dm.org/dasrick/tox-mm-ui#info=devDependencies)
[![Heroku Badge](http://img.shields.io/badge/staging%20to-Heroku-7056bf.svg)](https://tox-mm-qa.herokuapp.com)
[![Heroku Badge](http://img.shields.io/badge/production%20to-Heroku-7056bf.svg)](https://tox-mm.herokuapp.com)

UI for Messe München

## npm run ...

Here are some calls ...

The initial call will be almost

    npm install

The install call will automatically call the *build* task ... see next command

To build all parts of the app

    npm run build


to run only the karma test use

    npm run test


To start the local web server ...

    npm run start

This web server will be reachable at [localhost:6789](http://localhost:6789)


## Versioning

to set new version in package.json and tag the branch use the following command or(and) read this: 
[npm package version](https://www.npmjs.com/package/versiony#readme)

    npm version patch

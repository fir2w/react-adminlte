# Angular 2 ES6 Starter 
[![Dependency Status](https://david-dm.org/blacksonic/angular2-es6-starter.svg)](https://david-dm.org/blacksonic/angular2-es6-starter)
[![devDependency Status](https://david-dm.org/blacksonic/angular2-es6-starter/dev-status.svg)](https://david-dm.org/blacksonic/angular2-es6-starter#info=devDependencies)
[![Build Status](https://travis-ci.org/blacksonic/angular2-es6-starter.svg?branch=master)](https://travis-ci.org/blacksonic/angular2-es6-starter)

A skeleton Angular 2 application built in ES6 with Babel, Webpack, Gulp. A more detailed application [(TodoMVC) can be found here](https://github.com/blacksonic/angular2-es6-todomvc).
The example is based on the official [5 Min Quickstart](https://angular.io/docs/ts/latest/quickstart.html) tutorial.

- Uses Babel to support class/parameter decorators and parameter type annotations.
- No Typescript included.
- Bundles JavaScript files into one file with Webpack.
- Automates bundling with Gulp.
- Automatically rebundles and refreshes on changes.
- Unit testing with Jasmine.
- End-To-End testing with Protractor.
- Deployment included.

### Quick Start

It bundles the application (JS files), copies the static files and starts the webserver with Nodemon.
On server side changes restarts the server, on client side changes rebundles JS files and refreshes the page with Livereload.

```bash

git clone https://github.com/blacksonic/angular2-es6-starter.git
cd angular2-es6-starter
npm install

gulp serve

```

Open it in your browser [http://localhost:9000](http://localhost:9000) and let the fun begin!

### Testing

Runs tests with Karma and Jasmine against the Angular 2 application.

```bash

gulp test

```

Because of the bundling of Webpack it takes multiple seconds which is not ideal for every file change.
On your local machine you can run it continously.
The test files can be found in the ```client/app``` folder next to the source files with ```*.spec.js``` extensions.

```bash

gulp test-dev

```

### Deployment (to Heroku)

It bundles the application (JS files) and copies static files and server files to ```dist``` directory along with ```package.json```.
Then it can be commited to the desired location (for example Heroku).

```bash

gulp dist

cd dist
git init
git add -A .
git commit -m "Deploy #1" && echo Committed
git push -f git@heroku.com:angular2-es6-starter.git master

```

Check out the [deployed version](https://angular2-es6-starter.herokuapp.com/).

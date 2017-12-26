#!/usr/bin/env node

'use strict';

var currentNodeVersion = process.versions.node;
var semver = currentNodeVersion.split('.');
var major = semver[0];

if (major < 4) {
  console.error(
    require('chalk').red(
      'You are running Node ' +
        currentNodeVersion +
        '.\n' +
        'cip requires Node 4 or higher. \n' +
        'Please update your version of Node.'
    )
  );
  process.exit(1);
}
//  else {
//   require('commander')
//     .version(require('../package').version)
//     .usage('<command> [options]')
//     .command('init', 'generate a new project from a template')
//     .parse(process.argv)
// }

require('../lib/index');
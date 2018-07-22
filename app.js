console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes.js');
const user = os.userInfo();

const command = process.argv[2];
console.log('Command: ', command);

if (command === 'add') {
  console.log('Adding new note');
} else if (command === 'list') {
  console.log('List all notes');
} else if (command === 'read') {
  console.log('Reading note');
} else if (command === 'remove') {
  console.log('Removing note');
} else {
  console.log('Command not recognized');
}
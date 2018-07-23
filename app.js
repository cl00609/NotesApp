console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');
const user = os.userInfo();

const { argv } = yargs;
const command = process.argv[2];

console.log('Command: ', command);
console.log('Command: ', process.argv);
console.log('Yargs: ', argv);

if (command === 'add') {
  notes.addNote(argv.title, argv.body);
} else if (command === 'list') {
  notes.getAll();
} else if (command === 'read') {
  notes.getNote(argv.title);
} else if (command === 'remove') {
  notes.deleteNote(argv.title);
} else {
  console.log('Command not recognized');
}

console.log('Starting app...')
const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes');

const argv = yargs.argv;
var command = argv._[0];
console.log('Command:', command);
console.log('Process:', process.argv);
console.log('Yargs:', argv);

if (command === 'add') {
    var note = notes.addNote(argv.title, argv.body);
    if (note) { console.log(`Congratulations! You've just added ${note.title}!`) }
} else if (command === 'list') {
    notes.getAll();
} else if (command === 'read') {
    var note = notes.readNote(argv.title);
    if (note) { console.log(`Below You'll find you note \n Note title: ${note.title} \n Note body: ${note.body}`) }
    else { console.log('Note not found') }
} else if (command === 'remove') {
    var noteRemoved = notes.removeNote(argv.title);
    var message = noteRemoved ? 'Note was removed' : 'Note not found';
    console.log(message);
} else {
    console.log('Command not recognized');
}

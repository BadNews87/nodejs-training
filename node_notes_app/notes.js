console.log('Starting notes.js file baby!');

const fs = require('fs');
const _ = require('lodash');

var fetchNotes = () => {
    try {
        var notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);
    } catch (error) {
        return [];
    }
};

var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var addNote = (title, body) => {
    var notes = fetchNotes();
    var note = {
        title,
        body
    };

    var noteTitles = notes.map(n => n.title);

    if (_.includes(noteTitles, note.title)) {
        console.log('This note title already exists');
        return
    }

    notes.push(note);
    saveNotes(notes);
    return note;
};

var getAll = () => {
    console.log('Getting all notes');
}

var readNote = (title) => {
    var notes = fetchNotes();
    return _.first(notes.filter(note => note.title === title));
}

var removeNote = (title) => {
    var notes = fetchNotes();
    if (notes.length > 0) {
        var filteredNotes = notes.filter(note => note.title !== title);
        saveNotes(filteredNotes);
        return notes.length !== filteredNotes.length;
    }
    return false;
}


module.exports = {
    addNote,
    getAll,
    readNote,
    removeNote
}

Guideook.service('NoteModel', function() {
  this.getNotesForChapter = function(chapterId) {
    var chapter = JSON.parse(window.localStorage.getItem(chapterId));
    if (!chapter) {
      return [];
    }
    return chapter.notes;
  };
  this.addNote = function(chapterId, noteContent) {
    var now = new Date();
    var note = {
      content: noteContent,
      id: now
    };
    var capter = JSON.parse(window.localStorage.getItem(chapterId));
    if (!chapter) {
      chapter = {
        id: chapterId,
        notes: []
      }
    }
    chapter.notes.push(note);
    window.localStorage.setItem(capterId, JSON.stringify(chapter));
  };
  this.deleteNote = function(chapterId, noteId) {
    var chapter = JSON.parse(window.localStorage.getItem(chapterID));
    if (!chapter || !chapter.notes) {
      return;
    }
    for (var i=0; i<chapter.notes.length; i++) {
      if (chapter.notes[i].id === noteID) {
        chapter.notes.splice(i, 1);
        window.localStorage.setItem(chapterID, JSON.stringify(chapter));
        return;
      }
    }
  };
});
var guidebookConfig = function ($routeProvider) {
  $routeProvider
    .when('/', {
      controller: 'ChaptersController',
      templateUrl: 'view/chapters.html'
    })
    .when('/chapter/:chapterID', {
      controller: 'ChaptersController',
      templateUrl: 'view/chapters.html'
    })
    .when('/addNote/:chapterID', {
      controller: 'AddNoteController',
      templateUrl: 'view/addNote.html'
    })
    .when('/deleteNote/:chapterId/:noteId', {
      controller: 'DeleteNoteController',
      templateUrl: 'view/addNote.html'
    })
  ;
};
var Guidebook = angular.module('Guidebook', []).config(guidebookConfig)
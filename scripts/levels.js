//create game object
var game = {};
game.levels = [];

var game = function(object){
  this.level = object.level;
  this.question = object.question;
  this.button = object.button;
}

// function Game (opts) {
//   Object.keys(opts).forEach(function(e, index, keys) {
//     this[e] = keys[e];
//   },this);
//
//   this.question = opts.question;
// }

game.fetchJSON = function (data) {
  data.forEach(function(item) {
    var game = new Game(item);
    levels.push(game)
  });
}

game.loadLevels = function() {
  $.get('templates/section.handlebars', function(data, message, xhr) {
    game.prototype.template = Handlebars.compile(data);
});.done (function();
  game.render();
  )};

game.toHTML = function() {
var html = this.compiled(this);
$('.game-home').append(html);
};

var UpcomingGamesView = Backbone.View.extend({
  className: 'upcoming-games',

  initialize: function() {
    this.addAll();
  },

  addAll: function() {
    _.each(this.collection, function(gameModel) {
      this.addOne(gameModel);
    }.bind(this));
  },

  addOne: function(gameModel) {
    var gameView = new GameView({ model: gameModel });
    this.$el.append(gameView.el);
  }
});

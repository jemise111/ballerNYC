var GameCollection = Backbone.Collection.extend({
  model: GameModel,
  url: function() {
    var curUserID = window.location.pathname.match(/\/\d+$/)[0].replace("/","");
    return "/users/"+ curUserID + "/games";
  },
  upcomingGames: function() {
    var currentDateTime = Date.parse(new Date());
    return _.filter(this.models, function(game) {
      return Date.parse(game.get('start_at')) > currentDateTime;
    }.bind(this));
  },
  historicalGames: function() {
    var currentDateTime = Date.parse(new Date());
    return _.filter(this.models, function(game) {
      return Date.parse(game.get('start_at')) < currentDateTime;
    }.bind(this));
  }
});

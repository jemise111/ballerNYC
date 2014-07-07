var BallerRouter = Backbone.Router.extend({
  routes: {
    "": "upcomingGames",
    "game-history": "gameHistory",
    "subscribed-courts": "subscribedCourts",
    "edit-profile": "editProfile"
  },
  initialize: function() {
  },
  start: function() {
    Backbone.history.start();
  },
  upcomingGames: function() {
    this.cleanAndReset(GameCollection);
    this.collection.fetch({success: function(){
      this.collection = this.collection.upcomingGames();
      this.upcomingGamesView = new UpcomingGamesView({collection: this.collection});
      $('#profile-right-section').append(this.upcomingGamesView.el);
    }.bind(this)});
  },
  gameHistory: function() {
    this.cleanAndReset(GameCollection);
    this.collection.fetch({success: function(){
      this.collection = this.collection.historicalGames();
      this.gameHistoryView = new GameHistoryView({collection: this.collection});
      $('#profile-right-section').append(this.gameHistoryView.el);
    }.bind(this)});
  },
  subscribedCourts: function() {
    this.cleanAndReset(CourtCollection);
    this.collection.fetch({success: function(){
      console.log(this.collection);
      this.subscribedCourtsView = new SubscribedCourtsView({collection: this.collection});
      $('#profile-right-section').append(this.subscribedCourtsView.el);
    }.bind(this)});
  },
  cleanAndReset: function(collection) {
    this.collection = new collection();
    $('#profile-right-section').empty();
  }
});

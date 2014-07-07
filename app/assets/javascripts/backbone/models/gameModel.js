var GameModel = Backbone.Model.extend({
  urlRoot: '/games',
  initialize: function() {
    this.users = new UserCollection();
    this.users.url = '/games/' + this.id + '/users';
    this.court = new CourtModel({id: this.get('court_id')});
  }
});

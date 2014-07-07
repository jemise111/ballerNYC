var GameView = Backbone.View.extend({
  className: 'game-view one-edge-shadow',

  initialize: function() {
    this.template = _.template($('#game-template').html());
    this.render();
  },

  render: function() {
    var date = new Date(Date.parse(this.model.get('start_at')));
    var prettyDate = date.toDateString() + " at " + date.toLocaleTimeString();
    this.model.users.fetch({success: function() {
      this.model.court.fetch({success: function() {
        var users = this.model.users.models;
        var court = this.model.court;
        var compiledView = this.template({start_at: prettyDate, users: users, court: court});
        this.$el.html(compiledView);
      }.bind(this)});
    }.bind(this)});
  }
});

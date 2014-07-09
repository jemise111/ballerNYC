var EditProfileView = Backbone.View.extend({
  className: 'edit-profile-container',
  initialize: function() {
    this.template = _.template($('#edit-profile-template').html());
    this.render();
  },
  render: function() {
    this.$el.html(this.template);
  }
});

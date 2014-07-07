//= require jquery
//= require underscore
//= require backbone
//= require_tree ./backbone/models
//= require_tree ./backbone/collections
//= require_tree ./backbone/views
//= require backbone/router

$(function(){
  if ($('#profile-left-bar').length > 0) {
    ballerRouter = new BallerRouter();
    ballerRouter.start();
  }
}());

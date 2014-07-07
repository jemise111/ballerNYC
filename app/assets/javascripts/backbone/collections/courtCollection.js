var CourtCollection = Backbone.Collection.extend({
  // url is set when collection is instantiated
  model: CourtModel,
  url: function() {
    var curUserID = window.location.pathname.match(/\/\d+$/)[0].replace("/","");
    return "/users/"+ curUserID + "/courts";
  }
});

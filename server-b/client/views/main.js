  Template.body.events({
    'click .delete': function(e, tmpl) {
      Meteor.call('serverDelete', this._id);
    },
    'click a.insert': function (e) {
      e.preventDefault();
      var item = { test: new Date() };
      Meteor.call('serverAdd', item);
    },
  });

  Template.body.helpers({
    items: function(){
      return Items.find();
    },
    connected: function(){
      return Meteor.status().connected == true
    }
  });
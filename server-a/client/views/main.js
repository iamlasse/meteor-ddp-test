 Template.test.events({
  'click a.insert': function (e) {
    e.preventDefault();
    var item = { test: new Date() };
    Meteor.call('addItem', item);
  },
  'click a.delete': function (e) {
    e.preventDefault();
    Meteor.call('deleteItem', this._id);
  }
});

 Template.test.helpers({
  items: function () {
    return Items.find();
  }
});
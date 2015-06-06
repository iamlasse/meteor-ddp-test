Meteor.methods({
  deleteItem: function(id) {
    Items.remove({_id: id});
  },
  addItem: function(item) {
    Items.insert(item);
  }
});

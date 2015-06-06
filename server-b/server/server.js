var remote = DDP.connect('http://127.0.0.1:8080/');
ServerAItems = new Mongo.Collection('items', { connection: remote });

ServerAItems.find().observe({
  added: function(item) {
    console.log('-- remote item added --');
    console.log(item);
    Meteor.call('addItem', item);
  },
  removed: function(item) {
    console.log('-- remote item removed --');
    console.log(item);
    if(item)
      Meteor.call('deleteItem', item._id);
  },
  changed: function (newDoc, oldDoc) {
    console.log('-- remote item changed --')
    console.log(newDoc, oldDoc);
    // Items.upsert(newDoc._id, newDoc);
  }
});

// Items.find().observe({
//   added: function(item){
//     console.log('-- local item added --');
//   }
// });

Meteor.startup(function() {
  console.log('-- Server B --');
  remote.subscribe('allItems');
});